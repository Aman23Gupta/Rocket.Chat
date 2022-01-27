import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { Meteor } from 'meteor/meteor';
import React, { useCallback, useMemo, useState, ReactElement, ContextType, useEffect } from 'react';

import { callbacks } from '../../../../lib/callbacks';
import { validateEmail } from '../../../../lib/emailValidator';
import { useMethod, useEndpoint } from '../../../contexts/ServerContext';
import { useSessionDispatch } from '../../../contexts/SessionContext';
import { useSettingSetValue, useSetting, useSettingsDispatch } from '../../../contexts/SettingsContext';
import { useToastMessageDispatch } from '../../../contexts/ToastMessagesContext';
import { useTranslation } from '../../../contexts/TranslationContext';
import { useLoginWithPassword, useUserId } from '../../../contexts/UserContext';
import { SetupWizardContext } from '../contexts/SetupWizardContext';
import { useParameters } from '../hooks/useParameters';
import { useStepRouting } from '../hooks/useStepRouting';

const initialData: ContextType<typeof SetupWizardContext>['setupWizardData'] = {
	adminData: { fullname: '', username: '', companyEmail: '', password: '' },
	organizationData: {
		organizationName: '',
		organizationType: '',
		organizationIndustry: '',
		organizationSize: '',
		country: '',
	},
	serverData: {
		agreement: false,
		email: '',
		registerType: 'registered',
		updates: false,
	},
	// eslint-disable-next-line @typescript-eslint/camelcase
	registrationData: { cloudEmail: '', device_code: '', user_code: '' },
};

type HandleRegisterServer = (params: { email: string; resend?: boolean }) => Promise<void>;

const SetupWizardProvider = ({ children }: { children: ReactElement }): ReactElement => {
	const [setupWizardData, setSetupWizardData] = useState<ContextType<typeof SetupWizardContext>['setupWizardData']>(initialData);
	const [currentStep, setCurrentStep] = useStepRouting();
	const { loaded, settings, canDeclineServerRegistration } = useParameters();

	const dispatchToastMessage = useToastMessageDispatch();
	const dispatchSettings = useSettingsDispatch();
	const setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
	const cloudEmail = useSetting('Organization_mail') as string;
	const t = useTranslation();

	const registerUser = useMethod('registerUser');
	const defineUsername = useMethod('setUsername');

	const userId = useUserId();
	const loginWithPassword = useLoginWithPassword();
	const setForceLogin = useSessionDispatch('forceLogin');

	const createRegistrationIntent = useEndpoint('POST', 'cloud.createRegistrationIntent');

	useEffect(() => {
		setSetupWizardData((prev) => ({
			...prev,
			registrationData: { ...prev.registrationData, cloudEmail },
		}));
	}, [cloudEmail]);

	const goToPreviousStep = useCallback(() => setCurrentStep((currentStep) => currentStep - 1), [setCurrentStep]);
	const goToNextStep = useCallback(() => setCurrentStep((currentStep) => currentStep + 1), [setCurrentStep]);
	const goToStep = useCallback((step) => setCurrentStep(() => step), [setCurrentStep]);

	const _validateEmail = useCallback(
		(email: string): true | string => {
			if (!validateEmail(email)) {
				return t('Invalid_email');
			}

			return true;
		},
		[t],
	);

	const registerAdminUser = useCallback(async (): Promise<void> => {
		const {
			adminData: { fullname, username, companyEmail, password },
		} = setupWizardData;
		await registerUser({ name: fullname, username, email: companyEmail, pass: password });
		callbacks.run('userRegistered', {});

		try {
			await loginWithPassword(companyEmail, password);
		} catch (error) {
			if (error instanceof Meteor.Error && error.error === 'error-invalid-email') {
				dispatchToastMessage({ type: 'success', message: t('We_have_sent_registration_email') });
				return;
			}
			if (error instanceof Error || typeof error === 'string') {
				dispatchToastMessage({ type: 'error', message: error });
			}
			throw error;
		}

		setForceLogin(false);

		await defineUsername(username);
		callbacks.run('usernameSet', {});
	}, [defineUsername, dispatchToastMessage, loginWithPassword, registerUser, setForceLogin, setupWizardData, t]);

	const saveWorkspaceData = useCallback(async (): Promise<void> => {
		const {
			serverData: { updates, agreement },
		} = setupWizardData;

		await dispatchSettings([
			{
				_id: 'Statistics_reporting',
				value: true,
			},
			{
				_id: 'Apps_Framework_enabled',
				value: true,
			},
			{
				_id: 'Register_Server',
				value: true,
			},
			{
				_id: 'Allow_Marketing_Emails',
				value: updates,
			},
			{
				_id: 'Cloud_Service_Agree_PrivacyTerms',
				value: agreement,
			},
		]);
	}, [dispatchSettings, setupWizardData]);

	const saveOrganizationData = useCallback(async (): Promise<void> => {
		const {
			organizationData: { organizationName, organizationType, organizationIndustry, organizationSize, country },
		} = setupWizardData;

		await dispatchSettings([
			{
				_id: 'Country',
				value: country,
			},
			{
				_id: 'Organization_Type',
				value: organizationType,
			},
			{
				_id: 'Industry',
				value: organizationIndustry,
			},
			{
				_id: 'Size',
				value: organizationSize,
			},
			{
				_id: 'Organization_Name',
				value: organizationName,
			},
		]);
	}, [dispatchSettings, setupWizardData]);

	const registerServer: HandleRegisterServer = useMutableCallback(async ({ email, resend = false }): Promise<void> => {
		if (!userId) {
			try {
				await registerAdminUser();
			} catch (e) {
				if (e instanceof Error || typeof e === 'string')
					return dispatchToastMessage({
						type: 'error',
						message: e,
					});
			}
		}

		try {
			await saveOrganizationData();
			const { intentData } = await createRegistrationIntent({ resend, email });

			setSetupWizardData((prevState) => ({
				...prevState,
				registrationData: { ...intentData, cloudEmail: email },
			}));

			goToStep(5);
			setShowSetupWizard('in_progress');
		} catch (e) {
			console.log(e);
		}
	});

	const value = useMemo(
		() => ({
			setupWizardData,
			setSetupWizardData,
			currentStep,
			loaded,
			settings,
			canDeclineServerRegistration,
			goToPreviousStep,
			goToNextStep,
			goToStep,
			registerAdminUser,
			validateEmail: _validateEmail,
			registerServer,
			saveWorkspaceData,
			saveOrganizationData,
		}),
		[
			setupWizardData,
			setSetupWizardData,
			currentStep,
			loaded,
			registerAdminUser,
			settings,
			canDeclineServerRegistration,
			goToPreviousStep,
			goToNextStep,
			goToStep,
			_validateEmail,
			registerServer,
			saveWorkspaceData,
			saveOrganizationData,
		],
	);

	return <SetupWizardContext.Provider value={value}>{children}</SetupWizardContext.Provider>;
};

export default SetupWizardProvider;

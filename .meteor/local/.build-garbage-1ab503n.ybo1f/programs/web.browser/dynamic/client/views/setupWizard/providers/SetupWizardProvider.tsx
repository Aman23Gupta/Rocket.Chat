function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/providers/SetupWizardProvider.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let React, useCallback, useMemo, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let callbacks;
module.link("../../../../lib/callbacks", {
  callbacks(v) {
    callbacks = v;
  }

}, 3);
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 4);
let useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useEndpoint(v) {
    useEndpoint = v;
  }

}, 5);
let useSessionDispatch;
module.link("../../../contexts/SessionContext", {
  useSessionDispatch(v) {
    useSessionDispatch = v;
  }

}, 6);
let useSettingSetValue, useSetting, useSettingsDispatch;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue(v) {
    useSettingSetValue = v;
  },

  useSetting(v) {
    useSetting = v;
  },

  useSettingsDispatch(v) {
    useSettingsDispatch = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useLoginWithPassword, useUserId;
module.link("../../../contexts/UserContext", {
  useLoginWithPassword(v) {
    useLoginWithPassword = v;
  },

  useUserId(v) {
    useUserId = v;
  }

}, 10);
let SetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  SetupWizardContext(v) {
    SetupWizardContext = v;
  }

}, 11);
let useParameters;
module.link("../hooks/useParameters", {
  useParameters(v) {
    useParameters = v;
  }

}, 12);
let useStepRouting;
module.link("../hooks/useStepRouting", {
  useStepRouting(v) {
    useStepRouting = v;
  }

}, 13);
const initialData = {
  adminData: {
    fullname: '',
    username: '',
    companyEmail: '',
    password: ''
  },
  organizationData: {
    organizationName: '',
    organizationType: '',
    organizationIndustry: '',
    organizationSize: '',
    country: ''
  },
  serverData: {
    agreement: false,
    email: '',
    registerType: 'registered',
    updates: false
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
  registrationData: {
    cloudEmail: '',
    device_code: '',
    user_code: ''
  }
};

const SetupWizardProvider = _ref => {
  let {
    children
  } = _ref;
  const [setupWizardData, setSetupWizardData] = useState(initialData);
  const [currentStep, setCurrentStep] = useStepRouting();
  const {
    loaded,
    settings,
    canDeclineServerRegistration
  } = useParameters();
  const dispatchToastMessage = useToastMessageDispatch();
  const dispatchSettings = useSettingsDispatch();
  const setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  const cloudEmail = useSetting('Organization_mail');
  const t = useTranslation();
  const registerUser = useMethod('registerUser');
  const defineUsername = useMethod('setUsername');
  const userId = useUserId();
  const loginWithPassword = useLoginWithPassword();
  const setForceLogin = useSessionDispatch('forceLogin');
  const createRegistrationIntent = useEndpoint('POST', 'cloud.createRegistrationIntent');
  useEffect(() => {
    setSetupWizardData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      registrationData: _objectSpread(_objectSpread({}, prev.registrationData), {}, {
        cloudEmail
      })
    }));
  }, [cloudEmail]);
  const goToPreviousStep = useCallback(() => setCurrentStep(currentStep => currentStep - 1), [setCurrentStep]);
  const goToNextStep = useCallback(() => setCurrentStep(currentStep => currentStep + 1), [setCurrentStep]);
  const goToStep = useCallback(step => setCurrentStep(() => step), [setCurrentStep]);

  const _validateEmail = useCallback(email => {
    if (!validateEmail(email)) {
      return t('Invalid_email');
    }

    return true;
  }, [t]);

  const registerAdminUser = useCallback(async () => {
    const {
      adminData: {
        fullname,
        username,
        companyEmail,
        password
      }
    } = setupWizardData;
    await registerUser({
      name: fullname,
      username,
      email: companyEmail,
      pass: password
    });
    callbacks.run('userRegistered', {});

    try {
      await loginWithPassword(companyEmail, password);
    } catch (error) {
      if (error instanceof Meteor.Error && error.error === 'error-invalid-email') {
        dispatchToastMessage({
          type: 'success',
          message: t('We_have_sent_registration_email')
        });
        return;
      }

      if (error instanceof Error || typeof error === 'string') {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      throw error;
    }

    setForceLogin(false);
    await defineUsername(username);
    await dispatchSettings([{
      _id: 'Organization_Email',
      value: companyEmail
    }]);
    callbacks.run('usernameSet', {});
  }, [defineUsername, dispatchToastMessage, loginWithPassword, registerUser, setForceLogin, dispatchSettings, setupWizardData, t]);
  const saveWorkspaceData = useCallback(async () => {
    const {
      serverData: {
        updates,
        agreement
      }
    } = setupWizardData;
    await dispatchSettings([{
      _id: 'Statistics_reporting',
      value: true
    }, {
      _id: 'Apps_Framework_enabled',
      value: true
    }, {
      _id: 'Register_Server',
      value: true
    }, {
      _id: 'Allow_Marketing_Emails',
      value: updates
    }, {
      _id: 'Cloud_Service_Agree_PrivacyTerms',
      value: agreement
    }]);
  }, [dispatchSettings, setupWizardData]);
  const saveOrganizationData = useCallback(async () => {
    const {
      organizationData: {
        organizationName,
        organizationType,
        organizationIndustry,
        organizationSize,
        country
      }
    } = setupWizardData;
    await dispatchSettings([{
      _id: 'Country',
      value: country
    }, {
      _id: 'Organization_Type',
      value: organizationType
    }, {
      _id: 'Industry',
      value: organizationIndustry
    }, {
      _id: 'Size',
      value: organizationSize
    }, {
      _id: 'Organization_Name',
      value: organizationName
    }]);
  }, [dispatchSettings, setupWizardData]);
  const registerServer = useMutableCallback(async _ref2 => {
    let {
      email,
      resend = false
    } = _ref2;

    if (!userId) {
      try {
        await registerAdminUser();
      } catch (e) {
        if (e instanceof Error || typeof e === 'string') return dispatchToastMessage({
          type: 'error',
          message: e
        });
      }
    }

    try {
      await saveOrganizationData();
      const {
        intentData
      } = await createRegistrationIntent({
        resend,
        email
      });
      setSetupWizardData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        registrationData: _objectSpread(_objectSpread({}, intentData), {}, {
          cloudEmail: email
        })
      }));
      goToStep(5);
      setShowSetupWizard('in_progress');
    } catch (e) {
      console.log(e);
    }
  });
  const value = useMemo(() => ({
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
    saveOrganizationData
  }), [setupWizardData, setSetupWizardData, currentStep, loaded, registerAdminUser, settings, canDeclineServerRegistration, goToPreviousStep, goToNextStep, goToStep, _validateEmail, registerServer, saveWorkspaceData, saveOrganizationData]);
  return /*#__PURE__*/React.createElement(SetupWizardContext.Provider, {
    value: value
  }, children);
};

module.exportDefault(SetupWizardProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/providers/b28eb3b13d9ee71ee7aaff223bcf3b47fe62209a.map

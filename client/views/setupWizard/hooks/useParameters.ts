import { useState, useEffect } from 'react';

import { ISetting } from '../../../../definition/ISetting';
import { useMethod } from '../../../contexts/ServerContext';

export const useParameters = (): {
	loaded: boolean;
	settings: Array<ISetting>;
	canDeclineServerRegistration: boolean;
} => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [settings, setSettings] = useState<Array<ISetting>>([]);
	const [canDeclineServerRegistration, setCapableOfDeclineServerRegistration] = useState<boolean>(false);
	const getSetupWizardParameters = useMethod('getSetupWizardParameters');

	useEffect(() => {
		let mounted = true;
		const requestParameters = async (): Promise<void> => {
			try {
				const { settings = [], allowStandaloneServer = false } = (await getSetupWizardParameters()) || {};

				if (!mounted) {
					return;
				}

				setLoaded(true);
				setSettings(settings);
				setCapableOfDeclineServerRegistration(allowStandaloneServer);
			} catch (error) {
				setLoaded(false);
				setSettings([]);
				setCapableOfDeclineServerRegistration(false);
			}
		};

		requestParameters();

		return (): void => {
			mounted = false;
		};
	}, [getSetupWizardParameters]);

	return {
		loaded,
		settings,
		canDeclineServerRegistration,
	};
};

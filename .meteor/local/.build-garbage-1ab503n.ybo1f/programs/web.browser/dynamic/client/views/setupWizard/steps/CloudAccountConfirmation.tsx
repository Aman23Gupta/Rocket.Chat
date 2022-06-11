function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/CloudAccountConfirmation.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let AwaitingConfirmationPage;
module.link("@rocket.chat/onboarding-ui", {
  AwaitingConfirmationPage(v) {
    AwaitingConfirmationPage = v;
  }

}, 0);
let React, useEffect, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useSettingSetValue;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue(v) {
    useSettingSetValue = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 6);

const setIntervalTime = interval => interval ? interval * 1000 : 0;

const CloudAccountConfirmation = () => {
  const {
    registerServer,
    goToStep,
    setupWizardData: {
      registrationData
    },
    saveWorkspaceData
  } = useSetupWizardContext();
  const setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  const cloudConfirmationPoll = useEndpoint('GET', 'cloud.confirmationPoll');
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const getConfirmation = useCallback(async () => {
    try {
      const {
        pollData
      } = await cloudConfirmationPoll({
        deviceCode: registrationData.device_code
      });

      if ('successful' in pollData && pollData.successful) {
        await saveWorkspaceData();
        dispatchToastMessage({
          type: 'success',
          message: t('Your_workspace_is_ready')
        });
        return setShowSetupWizard('completed');
      }
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [cloudConfirmationPoll, registrationData.device_code, setShowSetupWizard, saveWorkspaceData, dispatchToastMessage, t]);
  useEffect(() => {
    const pollInterval = setInterval(() => getConfirmation(), setIntervalTime(registrationData.interval));
    return () => clearInterval(pollInterval);
  }, [getConfirmation, registrationData.interval]);
  return /*#__PURE__*/React.createElement(AwaitingConfirmationPage, {
    emailAddress: registrationData.cloudEmail,
    securityCode: registrationData.user_code,
    onResendEmailRequest: () => registerServer({
      email: registrationData.cloudEmail,
      resend: true
    }),
    onChangeEmailRequest: () => goToStep(3)
  });
};

module.exportDefault(CloudAccountConfirmation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/654cb09faa3d1a31622953e54f585aafc459f5d5.map

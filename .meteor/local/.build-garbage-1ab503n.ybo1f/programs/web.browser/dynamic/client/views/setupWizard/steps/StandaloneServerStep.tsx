function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/StandaloneServerStep.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let StandaloneServerPage;
module.link("@rocket.chat/onboarding-ui", {
  StandaloneServerPage(v) {
    StandaloneServerPage = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useSettingSetValue;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue(v) {
    useSettingSetValue = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 5);

const CloudAccountStep = () => {
  const {
    goToPreviousStep,
    currentStep,
    registerAdminUser,
    saveOrganizationData
  } = useSetupWizardContext();
  const setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();

  const handleConfirmStandalone = async _ref => {
    let {
      registerType
    } = _ref;

    if (registerType !== 'registered') {
      await registerAdminUser();
      await saveOrganizationData();
      dispatchToastMessage({
        type: 'success',
        message: t('Your_workspace_is_ready')
      });
      return setShowSetupWizard('completed');
    }
  };

  return /*#__PURE__*/React.createElement(StandaloneServerPage, {
    currentStep: currentStep,
    onBackButtonClick: goToPreviousStep,
    onSubmit: handleConfirmStandalone,
    stepCount: 4
  });
};

module.exportDefault(CloudAccountStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/52920aef53eba990707dd75942db690a1a7e0029.map

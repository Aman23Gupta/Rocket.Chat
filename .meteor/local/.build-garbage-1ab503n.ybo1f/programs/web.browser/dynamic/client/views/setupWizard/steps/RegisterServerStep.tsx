function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/RegisterServerStep.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let RegisteredServerPage;
module.link("@rocket.chat/onboarding-ui", {
  RegisteredServerPage(v) {
    RegisteredServerPage = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 2);

const RegisterServerStep = () => {
  const {
    goToPreviousStep,
    goToNextStep,
    currentStep,
    setSetupWizardData,
    setupWizardData: {
      adminData
    },
    registerServer
  } = useSetupWizardContext();

  const handleSubmit = async data => {
    if (data.registerType !== 'standalone') {
      setSetupWizardData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
        serverData: data
      }));
      await registerServer(data);
    }
  };

  return /*#__PURE__*/React.createElement(RegisteredServerPage, {
    onClickContinue: goToNextStep,
    onBackButtonClick: goToPreviousStep,
    stepCount: 4,
    onSubmit: handleSubmit,
    currentStep: currentStep,
    initialValues: {
      email: adminData.companyEmail
    }
  });
};

module.exportDefault(RegisterServerStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/a86f10d50584c4c5d76699f78e2417235e6852c0.map

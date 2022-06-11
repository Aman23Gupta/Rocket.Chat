function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/SetupWizardPage.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useSetupWizardContext;
module.link("./contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 1);
let AdminInfoStep;
module.link("./steps/AdminInfoStep", {
  default(v) {
    AdminInfoStep = v;
  }

}, 2);
let CloudAccountConfirmation;
module.link("./steps/CloudAccountConfirmation", {
  default(v) {
    CloudAccountConfirmation = v;
  }

}, 3);
let OrganizationInfoStep;
module.link("./steps/OrganizationInfoStep", {
  default(v) {
    OrganizationInfoStep = v;
  }

}, 4);
let RegisterServerStep;
module.link("./steps/RegisterServerStep", {
  default(v) {
    RegisterServerStep = v;
  }

}, 5);
let StandaloneServerStep;
module.link("./steps/StandaloneServerStep", {
  default(v) {
    StandaloneServerStep = v;
  }

}, 6);

const SetupWizardPage = () => {
  const {
    currentStep
  } = useSetupWizardContext();

  switch (currentStep) {
    case 1:
      return /*#__PURE__*/React.createElement(AdminInfoStep, null);

    case 2:
      return /*#__PURE__*/React.createElement(OrganizationInfoStep, null);

    case 3:
      return /*#__PURE__*/React.createElement(RegisterServerStep, null);

    case 4:
      return /*#__PURE__*/React.createElement(StandaloneServerStep, null);

    case 5:
      return /*#__PURE__*/React.createElement(CloudAccountConfirmation, null);

    default:
      throw new Error('Wrong wizard step');
  }
};

module.exportDefault(SetupWizardPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/6eff29a49344c8794db4afea9b0f483b3dba2f3a.map

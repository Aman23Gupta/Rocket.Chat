function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/SetupWizardPage.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useSetupWizardContext;
module.link("./contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 1);
var AdminInfoStep;
module.link("./steps/AdminInfoStep", {
  "default": function (v) {
    AdminInfoStep = v;
  }
}, 2);
var CloudAccountConfirmation;
module.link("./steps/CloudAccountConfirmation", {
  "default": function (v) {
    CloudAccountConfirmation = v;
  }
}, 3);
var OrganizationInfoStep;
module.link("./steps/OrganizationInfoStep", {
  "default": function (v) {
    OrganizationInfoStep = v;
  }
}, 4);
var RegisterServerStep;
module.link("./steps/RegisterServerStep", {
  "default": function (v) {
    RegisterServerStep = v;
  }
}, 5);
var StandaloneServerStep;
module.link("./steps/StandaloneServerStep", {
  "default": function (v) {
    StandaloneServerStep = v;
  }
}, 6);

var SetupWizardPage = function () {
  var _useSetupWizardContex = useSetupWizardContext(),
      currentStep = _useSetupWizardContex.currentStep;

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
//# sourceMappingURL=/dynamic/client/views/setupWizard/62643ffa4d2ae78295086f6d86a2d799ea00764d.map

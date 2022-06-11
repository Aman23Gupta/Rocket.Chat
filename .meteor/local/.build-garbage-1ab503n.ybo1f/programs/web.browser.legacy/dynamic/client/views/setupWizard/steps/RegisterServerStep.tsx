function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/RegisterServerStep.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var RegisteredServerPage;
module.link("@rocket.chat/onboarding-ui", {
  RegisteredServerPage: function (v) {
    RegisteredServerPage = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 2);

var RegisterServerStep = function () {
  var _useSetupWizardContex = useSetupWizardContext(),
      goToPreviousStep = _useSetupWizardContex.goToPreviousStep,
      goToNextStep = _useSetupWizardContex.goToNextStep,
      currentStep = _useSetupWizardContex.currentStep,
      setSetupWizardData = _useSetupWizardContex.setSetupWizardData,
      adminData = _useSetupWizardContex.setupWizardData.adminData,
      registerServer = _useSetupWizardContex.registerServer;

  var handleSubmit = function () {
    function _callee(data) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(data.registerType !== 'standalone')) {
                  _context.next = 4;
                  break;
                }

                setSetupWizardData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    serverData: data
                  });
                });
                _context.next = 4;
                return _regeneratorRuntime.awrap(registerServer(data));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }();

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
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/4895328eba8c484bba9546859b4b04809c8ab246.map

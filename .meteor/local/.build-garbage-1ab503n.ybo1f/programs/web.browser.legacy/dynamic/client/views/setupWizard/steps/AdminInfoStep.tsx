function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/AdminInfoStep.tsx                                                                    //
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
var AdminInfoPage;
module.link("@rocket.chat/onboarding-ui", {
  AdminInfoPage: function (v) {
    AdminInfoPage = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 4);

var AdminInfoStep = function () {
  var t = useTranslation();
  var regexpForUsernameValidation = useSetting('UTF8_User_Names_Validation');
  var usernameRegExp = new RegExp("^" + regexpForUsernameValidation + "$");

  var _useSetupWizardContex = useSetupWizardContext(),
      adminData = _useSetupWizardContex.setupWizardData.adminData,
      setSetupWizardData = _useSetupWizardContex.setSetupWizardData,
      goToNextStep = _useSetupWizardContex.goToNextStep,
      currentStep = _useSetupWizardContex.currentStep,
      validateEmail = _useSetupWizardContex.validateEmail; // TODO: check if username exists


  var validateUsername = function (username) {
    if (!usernameRegExp.test(username)) {
      return t('Invalid_username');
    }

    return true;
  };

  var handleSubmit = function () {
    function _callee(data) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSetupWizardData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    adminData: data
                  });
                });
                goToNextStep();

              case 2:
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

  return /*#__PURE__*/React.createElement(AdminInfoPage, {
    validatePassword: function (password) {
      return password.length > 0;
    },
    passwordRulesHint: '',
    validateUsername: validateUsername,
    validateEmail: validateEmail,
    currentStep: currentStep,
    initialValues: adminData,
    stepCount: 4,
    onSubmit: handleSubmit
  });
};

module.exportDefault(AdminInfoStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/1c14277d13c155f6a707f5d4098ada172045be80.map

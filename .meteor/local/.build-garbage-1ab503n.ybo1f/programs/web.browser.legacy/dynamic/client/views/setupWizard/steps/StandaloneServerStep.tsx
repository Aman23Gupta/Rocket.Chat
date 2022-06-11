function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/StandaloneServerStep.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var StandaloneServerPage;
module.link("@rocket.chat/onboarding-ui", {
  StandaloneServerPage: function (v) {
    StandaloneServerPage = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useSettingSetValue;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue: function (v) {
    useSettingSetValue = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 5);

var CloudAccountStep = function () {
  var _useSetupWizardContex = useSetupWizardContext(),
      goToPreviousStep = _useSetupWizardContex.goToPreviousStep,
      currentStep = _useSetupWizardContex.currentStep,
      registerAdminUser = _useSetupWizardContex.registerAdminUser,
      saveOrganizationData = _useSetupWizardContex.saveOrganizationData;

  var setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();

  var handleConfirmStandalone = function () {
    function _callee(_ref) {
      var registerType;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                registerType = _ref.registerType;

                if (!(registerType !== 'registered')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return _regeneratorRuntime.awrap(registerAdminUser());

              case 4:
                _context.next = 6;
                return _regeneratorRuntime.awrap(saveOrganizationData());

              case 6:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Your_workspace_is_ready')
                });
                return _context.abrupt("return", setShowSetupWizard('completed'));

              case 8:
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
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/2c8c1b01572cb4c5eb8acdf85751c0b612ff8ef8.map

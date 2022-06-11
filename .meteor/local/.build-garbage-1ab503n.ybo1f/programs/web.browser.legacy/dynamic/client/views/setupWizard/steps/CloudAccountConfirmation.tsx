function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/CloudAccountConfirmation.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var AwaitingConfirmationPage;
module.link("@rocket.chat/onboarding-ui", {
  AwaitingConfirmationPage: function (v) {
    AwaitingConfirmationPage = v;
  }
}, 0);
var React, useEffect, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var useSettingSetValue;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue: function (v) {
    useSettingSetValue = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 6);

var setIntervalTime = function (interval) {
  return interval ? interval * 1000 : 0;
};

var CloudAccountConfirmation = function () {
  var _useSetupWizardContex = useSetupWizardContext(),
      registerServer = _useSetupWizardContex.registerServer,
      goToStep = _useSetupWizardContex.goToStep,
      registrationData = _useSetupWizardContex.setupWizardData.registrationData,
      saveWorkspaceData = _useSetupWizardContex.saveWorkspaceData;

  var setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  var cloudConfirmationPoll = useEndpoint('GET', 'cloud.confirmationPoll');
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var getConfirmation = useCallback(function () {
    function _callee() {
      var _await$cloudConfirmat, pollData;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(cloudConfirmationPoll({
                  deviceCode: registrationData.device_code
                }));

              case 3:
                _await$cloudConfirmat = _context.sent;
                pollData = _await$cloudConfirmat.pollData;

                if (!('successful' in pollData && pollData.successful)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return _regeneratorRuntime.awrap(saveWorkspaceData());

              case 8:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Your_workspace_is_ready')
                });
                return _context.abrupt("return", setShowSetupWizard('completed'));

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 12]], Promise);
    }

    return _callee;
  }(), [cloudConfirmationPoll, registrationData.device_code, setShowSetupWizard, saveWorkspaceData, dispatchToastMessage, t]);
  useEffect(function () {
    var pollInterval = setInterval(function () {
      return getConfirmation();
    }, setIntervalTime(registrationData.interval));
    return function () {
      return clearInterval(pollInterval);
    };
  }, [getConfirmation, registrationData.interval]);
  return /*#__PURE__*/React.createElement(AwaitingConfirmationPage, {
    emailAddress: registrationData.cloudEmail,
    securityCode: registrationData.user_code,
    onResendEmailRequest: function () {
      return registerServer({
        email: registrationData.cloudEmail,
        resend: true
      });
    },
    onChangeEmailRequest: function () {
      return goToStep(3);
    }
  });
};

module.exportDefault(CloudAccountConfirmation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/1cb1b30de5e274639fcdc6d5baea7e0001edd052.map

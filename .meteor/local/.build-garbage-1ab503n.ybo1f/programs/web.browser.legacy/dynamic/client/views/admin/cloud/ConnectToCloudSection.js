function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/ConnectToCloudSection.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onRegisterStatusChange"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Box, Button, ButtonGroup, Throbber, Callout;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var Subtitle;
module.link("../../../components/Subtitle", {
  "default": function (v) {
    Subtitle = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

function ConnectToCloudSection(_ref) {
  var onRegisterStatusChange = _ref.onRegisterStatusChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isConnecting = _useSafely2[0],
      setConnecting = _useSafely2[1];

  var registerWorkspace = useMethod('cloud:registerWorkspace');
  var syncWorkspace = useMethod('cloud:syncWorkspace');
  var hasAcceptedTerms = useSetting('Cloud_Service_Agree_PrivacyTerms');

  var handleRegisterButtonClick = function () {
    function _callee() {
      var isRegistered, isSynced;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setConnecting(true);
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(registerWorkspace());

              case 4:
                isRegistered = _context.sent;

                if (isRegistered) {
                  _context.next = 7;
                  break;
                }

                throw Error(t('An error occured'));

              case 7:
                _context.next = 9;
                return _regeneratorRuntime.awrap(syncWorkspace());

              case 9:
                isSynced = _context.sent;

                if (isSynced) {
                  _context.next = 12;
                  break;
                }

                throw Error(t('An error occured syncing'));

              case 12:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Sync Complete')
                });
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 18:
                _context.prev = 18;
                _context.next = 21;
                return _regeneratorRuntime.awrap(onRegisterStatusChange && onRegisterStatusChange());

              case 21:
                setConnecting(false);
                return _context.finish(18);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 15, 18, 23]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Subtitle, null, t('Cloud_registration_required')), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_registration_required_description'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isConnecting || !hasAcceptedTerms,
    minHeight: "x40",
    onClick: handleRegisterButtonClick
  }, isConnecting ? /*#__PURE__*/React.createElement(Throbber, {
    is: "span",
    inheritColor: true
  }) : t('Cloud_registration_required_link_text'))), !hasAcceptedTerms && /*#__PURE__*/React.createElement(Box, {
    mb: "x12"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, t('Cloud_Service_Agree_PrivacyTerms_Login_Disabled_Warning'))));
}

module.exportDefault(ConnectToCloudSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/a55922ca395e7dc6e34fbf4ceb9cb25f435e6fc9.map

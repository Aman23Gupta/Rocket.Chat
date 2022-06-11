function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/TwoFactorEmail.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 1);
var Box, Button, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 3);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 4);

var TwoFactorEmail = function (props) {
  var t = useTranslation();
  var user = useUser();
  var isEnabled = user && user.services && user.services.email2fa && user.services.email2fa.enabled;
  var enable2faAction = useEndpointAction('POST', 'users.2fa.enableEmail', undefined, t('Two-factor_authentication_enabled'));
  var disable2faAction = useEndpointAction('POST', 'users.2fa.disableEmail', undefined, t('Two-factor_authentication_disabled'));
  var handleEnable = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(enable2faAction());

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
  }(), [enable2faAction]);
  var handleDisable = useCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(disable2faAction());

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [disable2faAction]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mbs: "x16"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Two-factor_authentication_email')), isEnabled && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDisable
  }, t('Disable_two-factor_authentication_email')), !isEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, null, t('Two-factor_authentication_email_is_currently_disabled')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleEnable
  }, t('Enable_two-factor_authentication_email')))));
};

module.exportDefault(TwoFactorEmail);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/bafedec50d2f4eb09eaa58a65da70180104d249c.map

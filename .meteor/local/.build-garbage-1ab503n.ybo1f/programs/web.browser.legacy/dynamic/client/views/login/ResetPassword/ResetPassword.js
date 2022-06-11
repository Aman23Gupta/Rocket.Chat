function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/ResetPassword/ResetPassword.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Button, TextInput, Field, Modal, Box, Throbber;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  Box: function (v) {
    Box = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var React, useState, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 3);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 7);
var useMethodData;
module.link("../../../hooks/useMethodData", {
  useMethodData: function (v) {
    useMethodData = v;
  }
}, 8);
var LoginLayout;
module.link("../LoginLayout", {
  "default": function (v) {
    LoginLayout = v;
  }
}, 9);

var getChangePasswordReason = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      requirePasswordChange = _ref.requirePasswordChange,
      _ref$requirePasswordC = _ref.requirePasswordChangeReason,
      requirePasswordChangeReason = _ref$requirePasswordC === void 0 ? requirePasswordChange ? 'You_need_to_change_your_password' : 'Please_enter_your_new_password_below' : _ref$requirePasswordC;

  return requirePasswordChangeReason;
};

var ResetPassword = function () {
  var user = useUser();
  var t = useTranslation();
  var setUserPassword = useMethod('setUserPassword');
  var resetPassword = useMethod('resetPassword');
  var token = useRouteParameter('token');
  var params = useMemo(function () {
    return [{
      token: token
    }];
  }, [token]);

  var _useMethodData = useMethodData('getPasswordPolicy', params),
      _useMethodData$value = _useMethodData.value;

  _useMethodData$value = _useMethodData$value === void 0 ? {} : _useMethodData$value;
  var policyEnabled = _useMethodData$value.enabled,
      policies = _useMethodData$value.policy;
  var router = useRoute('home');
  var changePasswordReason = getChangePasswordReason(user || {});

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      newPassword = _useState2[0],
      setNewPassword = _useState2[1];

  var _useSafely = useSafely(useState(false)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isLoading = _useSafely2[0],
      setIsLoading = _useSafely2[1];

  var _useSafely3 = useSafely(useState()),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      error = _useSafely4[0],
      setError = _useSafely4[1];

  var handleOnChange = useCallback(function (event) {
    return setNewPassword(event.currentTarget.value);
  }, [setNewPassword]);
  var isSubmitDisabled = !newPassword.trim() || isLoading;
  var handleSubmit = useCallback(function () {
    function _callee(e) {
      var result, error, _ref2$reason, reason;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (!isSubmitDisabled) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                setIsLoading(true);
                _context.prev = 4;

                if (!(token && resetPassword)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 8;
                return _regeneratorRuntime.awrap(resetPassword(token, newPassword));

              case 8:
                result = _context.sent;
                _context.next = 11;
                return _regeneratorRuntime.awrap(Meteor.loginWithToken(result.token));

              case 11:
                router.push({});
                _context.next = 16;
                break;

              case 14:
                _context.next = 16;
                return _regeneratorRuntime.awrap(setUserPassword(newPassword));

              case 16:
                _context.next = 24;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](4);
                error = _context.t0.error;
                _ref2$reason = _context.t0.reason;
                reason = _ref2$reason === void 0 ? error : _ref2$reason;
                setError(reason);

              case 24:
                _context.prev = 24;
                setIsLoading(false);
                return _context.finish(24);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[4, 18, 24, 27]], Promise);
    }

    return _callee;
  }(), [isSubmitDisabled, setIsLoading, token, resetPassword, newPassword, router, setUserPassword, setError]);
  return /*#__PURE__*/React.createElement(LoginLayout, null, /*#__PURE__*/React.createElement(Modal, {
    is: "form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, {
    textAlign: "start"
  }, t('Password'))), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(changePasswordReason)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Type_your_new_password'),
    type: "password",
    name: "newPassword",
    id: "newPassword",
    dir: "auto",
    onChange: handleOnChange,
    autoComplete: "off",
    value: newPassword
  })), error && /*#__PURE__*/React.createElement(Field.Error, null, error), policyEnabled && /*#__PURE__*/React.createElement(Field.Hint, null, policies.map(function (policy, index) {
    return /*#__PURE__*/React.createElement(Box, {
      is: "p",
      textAlign: "start",
      key: index
    }, t.apply(void 0, _toConsumableArray(policy)));
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isSubmitDisabled,
    type: "submit"
  }, isLoading ? /*#__PURE__*/React.createElement(Throbber, {
    size: "x12",
    inheritColor: true
  }) : t('Reset')))))));
};

module.exportDefault(ResetPassword);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/ResetPassword/7fc43c450e081a06eb6bbff4f63d235b4aedcc6a.map

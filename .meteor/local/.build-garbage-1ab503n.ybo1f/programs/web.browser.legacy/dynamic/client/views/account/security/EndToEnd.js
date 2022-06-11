function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/EndToEnd.js                                                                           //
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
var Box, Margins, PasswordInput, Field, FieldGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useLocalStorage, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useLocalStorage: function (v) {
    useLocalStorage = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var React, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 3);
var e2e;
module.link("../../../../app/e2e/client/rocketchat.e2e", {
  e2e: function (v) {
    e2e = v;
  }
}, 4);
var callbacks;
module.link("../../../../lib/callbacks", {
  callbacks: function (v) {
    callbacks = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 10);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 11);

var EndToEnd = function (props) {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var homeRoute = useRoute('home');
  var user = useUser();
  var publicKey = useLocalStorage('public_key');
  var privateKey = useLocalStorage('private_key');
  var resetE2eKey = useMethod('e2e.resetOwnE2EKey');

  var _useForm = useForm({
    password: '',
    passwordConfirm: ''
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      reset = _useForm.reset;

  var password = values.password,
      passwordConfirm = values.passwordConfirm;
  var handlePassword = handlers.handlePassword,
      handlePasswordConfirm = handlers.handlePasswordConfirm;
  var keysExist = publicKey && privateKey;
  var hasTypedPassword = password.trim().length > 0;
  var passwordError = password !== passwordConfirm && passwordConfirm.length > 0 ? t('Passwords_do_not_match') : undefined;
  var canSave = keysExist && !passwordError && passwordConfirm.length > 0;
  var handleLogout = useMutableCallback(function () {
    Meteor.logout(function () {
      callbacks.run('afterLogoutCleanUp', user);
      Meteor.call('logoutCleanUp', user);
      homeRoute.push({});
    });
  });
  var saveNewPassword = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(e2e.changePassword(password));

              case 3:
                reset();
                dispatchToastMessage({
                  type: 'success',
                  message: t('Encryption_key_saved_successfully')
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, password, reset, t]);
  var handleResetE2eKey = useCallback(function () {
    function _callee2() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(resetE2eKey());

              case 3:
                result = _context2.sent;

                if (result) {
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_e2e_key_was_reset')
                  });
                  handleLogout();
                }

                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee2;
  }(), [dispatchToastMessage, resetE2eKey, handleLogout, t]);
  useEffect(function () {
    if (password.trim() === '') {
      handlePasswordConfirm('');
    }
  }, [handlePasswordConfirm, password]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    mbs: "x16"
  }, props), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('E2E_Encryption_Password_Change')), /*#__PURE__*/React.createElement(Box, {
    dangerouslySetInnerHTML: {
      __html: t('E2E_Encryption_Password_Explanation')
    }
  }), /*#__PURE__*/React.createElement(FieldGroup, {
    w: "full"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('New_encryption_password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
    value: password,
    onChange: handlePassword,
    placeholder: t('New_Password_Placeholder'),
    disabled: !keysExist
  })), !keysExist && /*#__PURE__*/React.createElement(Field.Hint, null, t('EncryptionKey_Change_Disabled'))), hasTypedPassword && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Confirm_new_encryption_password')), /*#__PURE__*/React.createElement(PasswordInput, {
    error: passwordError,
    value: passwordConfirm,
    onChange: handlePasswordConfirm,
    placeholder: t('Confirm_New_Password_Placeholder')
  }), /*#__PURE__*/React.createElement(Field.Error, null, passwordError))), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !canSave,
    onClick: saveNewPassword
  }, t('Save_changes')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    mbs: "x16"
  }, t('Reset_E2E_Key')), /*#__PURE__*/React.createElement(Box, {
    dangerouslySetInnerHTML: {
      __html: t('E2E_Reset_Key_Explanation')
    }
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleResetE2eKey
  }, t('Reset_E2E_Key'))));
};

module.exportDefault(EndToEnd);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/25fb1bbd4e5af149b70ad22947d3a651ec78cb78.map

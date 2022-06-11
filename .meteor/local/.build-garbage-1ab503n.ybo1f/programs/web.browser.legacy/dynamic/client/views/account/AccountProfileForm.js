function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountProfileForm.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["values", "handlers", "user", "settings", "onSaveStateChange"];

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
var Field, FieldGroup, TextInput, TextAreaInput, Box, Icon, AnimatedVisibility, PasswordInput, Button, Grid, Margins;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  AnimatedVisibility: function (v) {
    AnimatedVisibility = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  Button: function (v) {
    Button = v;
  },
  Grid: function (v) {
    Grid = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useDebouncedCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback: function (v) {
    useDebouncedCallback = v;
  },
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useCallback, useMemo, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var validateEmail;
module.link("../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 3);
var getUserEmailAddress;
module.link("../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 4);
var CustomFieldsForm;
module.link("../../components/CustomFieldsForm", {
  "default": function (v) {
    CustomFieldsForm = v;
  }
}, 5);
var USER_STATUS_TEXT_MAX_LENGTH;
module.link("../../components/UserStatus", {
  USER_STATUS_TEXT_MAX_LENGTH: function (v) {
    USER_STATUS_TEXT_MAX_LENGTH = v;
  }
}, 6);
var UserStatusMenu;
module.link("../../components/UserStatusMenu", {
  "default": function (v) {
    UserStatusMenu = v;
  }
}, 7);
var UserAvatarEditor;
module.link("../../components/avatar/UserAvatarEditor", {
  "default": function (v) {
    UserAvatarEditor = v;
  }
}, 8);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);

function AccountProfileForm(_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      user = _ref.user,
      settings = _ref.settings,
      onSaveStateChange = _ref.onSaveStateChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var checkUsernameAvailability = useMethod('checkUsernameAvailability');
  var getAvatarSuggestions = useMethod('getAvatarSuggestion');
  var sendConfirmationEmail = useMethod('sendConfirmationEmail');

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      usernameError = _useState2[0],
      setUsernameError = _useState2[1];

  var _useSafely = useSafely(useState()),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      avatarSuggestions = _useSafely2[0],
      setAvatarSuggestions = _useSafely2[1];

  var allowRealNameChange = settings.allowRealNameChange,
      allowUserStatusMessageChange = settings.allowUserStatusMessageChange,
      allowEmailChange = settings.allowEmailChange,
      allowPasswordChange = settings.allowPasswordChange,
      allowUserAvatarChange = settings.allowUserAvatarChange,
      canChangeUsername = settings.canChangeUsername,
      namesRegex = settings.namesRegex,
      requireName = settings.requireName;
  var realname = values.realname,
      email = values.email,
      username = values.username,
      password = values.password,
      confirmationPassword = values.confirmationPassword,
      statusText = values.statusText,
      bio = values.bio,
      statusType = values.statusType,
      customFields = values.customFields,
      nickname = values.nickname;
  var handleRealname = handlers.handleRealname,
      handleEmail = handlers.handleEmail,
      handleUsername = handlers.handleUsername,
      handlePassword = handlers.handlePassword,
      handleConfirmationPassword = handlers.handleConfirmationPassword,
      handleAvatar = handlers.handleAvatar,
      handleStatusText = handlers.handleStatusText,
      handleStatusType = handlers.handleStatusType,
      handleBio = handlers.handleBio,
      handleCustomFields = handlers.handleCustomFields,
      handleNickname = handlers.handleNickname;
  var previousEmail = getUserEmailAddress(user);
  var handleSendConfirmationEmail = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(email !== previousEmail)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _regeneratorRuntime.awrap(sendConfirmationEmail(email));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Verification_email_sent')
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[2, 8]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, email, previousEmail, sendConfirmationEmail, t]);
  var passwordError = useMemo(function () {
    return !password || !confirmationPassword || password === confirmationPassword ? undefined : t('Passwords_do_not_match');
  }, [t, password, confirmationPassword]);
  var emailError = useMemo(function () {
    return validateEmail(email) ? undefined : 'error-invalid-email-address';
  }, [email]);
  var checkUsername = useDebouncedCallback(function () {
    function _callee2(username) {
      var isAvailable;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(user.username === username)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", setUsernameError(undefined));

              case 2:
                if (namesRegex.test(username)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", setUsernameError(t('error-invalid-username')));

              case 4:
                _context2.next = 6;
                return _regeneratorRuntime.awrap(checkUsernameAvailability(username));

              case 6:
                isAvailable = _context2.sent;

                if (isAvailable) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", setUsernameError(t('Username_already_exist')));

              case 9:
                setUsernameError(undefined);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), 400, [namesRegex, t, user.username, checkUsernameAvailability, setUsernameError]);
  useEffect(function () {
    var getSuggestions = function () {
      function _callee3() {
        var suggestions;
        return _regeneratorRuntime.async(function () {
          function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _regeneratorRuntime.awrap(getAvatarSuggestions());

                case 2:
                  suggestions = _context3.sent;
                  setAvatarSuggestions(suggestions);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }

          return _callee3$;
        }(), null, null, null, Promise);
      }

      return _callee3;
    }();

    getSuggestions();
  }, [getAvatarSuggestions, setAvatarSuggestions]);
  useEffect(function () {
    checkUsername(username);
  }, [checkUsername, username]);
  useEffect(function () {
    if (!password) {
      handleConfirmationPassword('');
    }
  }, [password, handleConfirmationPassword]);
  var nameError = useMemo(function () {
    if (user.name === realname) {
      return undefined;
    }

    if (!realname && requireName) {
      return t('Field_required');
    }
  }, [realname, requireName, t, user.name]);
  var statusTextError = useMemo(function () {
    if (statusText && statusText.length > USER_STATUS_TEXT_MAX_LENGTH) {
      return t('Max_length_is', USER_STATUS_TEXT_MAX_LENGTH);
    }

    return undefined;
  }, [statusText, t]);

  var _user$emails = _slicedToArray(user.emails, 1),
      _user$emails$ = _user$emails[0];

  _user$emails$ = _user$emails$ === void 0 ? {
    verified: false
  } : _user$emails$;
  var _user$emails$$verifie = _user$emails$.verified,
      verified = _user$emails$$verifie === void 0 ? false : _user$emails$$verifie;
  var canSave = !![!!passwordError, !!emailError, !!usernameError, !!nameError, !!statusTextError].filter(Boolean);
  useEffect(function () {
    onSaveStateChange(canSave);
  }, [canSave, onSaveStateChange]);
  var handleSubmit = useCallback(function (e) {
    e.preventDefault();
  }, []);
  return /*#__PURE__*/React.createElement(FieldGroup, _extends({
    is: "form",
    autoComplete: "off",
    onSubmit: handleSubmit
  }, props), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(UserAvatarEditor, {
      etag: user.avatarETag,
      currentUsername: user.username,
      username: username,
      setAvatarObj: handleAvatar,
      disabled: !allowUserAvatarChange,
      suggestions: avatarSuggestions
    }));
  }, [username, user.username, handleAvatar, allowUserAvatarChange, avatarSuggestions, user.avatarETag]), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      mie: "x8",
      flexShrink: 1
    }, /*#__PURE__*/React.createElement(Field.Label, {
      flexGrow: 0
    }, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      error: nameError,
      disabled: !allowRealNameChange,
      flexGrow: 1,
      value: realname,
      onChange: handleRealname
    })), !allowRealNameChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('RealName_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, nameError));
  }, [t, realname, handleRealname, allowRealNameChange, nameError]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, {
      mis: "x8",
      flexShrink: 1
    }, /*#__PURE__*/React.createElement(Field.Label, {
      flexGrow: 0
    }, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      error: usernameError,
      disabled: !canChangeUsername,
      flexGrow: 1,
      value: username,
      onChange: handleUsername,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "at",
        size: "x20"
      })
    })), !canChangeUsername && /*#__PURE__*/React.createElement(Field.Hint, null, t('Username_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, usernameError));
  }, [t, username, handleUsername, canChangeUsername, usernameError])), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('StatusMessage')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      error: statusTextError,
      disabled: !allowUserStatusMessageChange,
      flexGrow: 1,
      value: statusText,
      onChange: handleStatusText,
      placeholder: t('StatusMessage_Placeholder'),
      addon: /*#__PURE__*/React.createElement(UserStatusMenu, {
        margin: "neg-x2",
        onChange: handleStatusType,
        initialStatus: statusType
      })
    })), !allowUserStatusMessageChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('StatusMessage_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, statusTextError));
  }, [t, statusTextError, allowUserStatusMessageChange, statusText, handleStatusText, handleStatusType, statusType]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Nickname')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: nickname,
      onChange: handleNickname,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "edit",
        size: "x20",
        alignSelf: "center"
      })
    })));
  }, [nickname, handleNickname, t]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Bio')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
      rows: 3,
      flexGrow: 1,
      value: bio,
      onChange: handleBio,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "edit",
        size: "x20",
        alignSelf: "center"
      })
    })));
  }, [bio, handleBio, t]), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid.Item, null, /*#__PURE__*/React.createElement(FieldGroup, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0
  }, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: email,
      error: emailError,
      onChange: handleEmail,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: verified ? 'circle-check' : 'mail',
        size: "x20"
      }),
      disabled: !allowEmailChange
    })), !allowEmailChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('Email_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, t(emailError)));
  }, [t, email, handleEmail, verified, allowEmailChange, emailError]), useMemo(function () {
    return !verified && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Margins, {
      blockEnd: "x28"
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: email !== previousEmail,
      onClick: handleSendConfirmationEmail
    }, t('Resend_verification_email'))));
  }, [verified, t, email, previousEmail, handleSendConfirmationEmail]))), /*#__PURE__*/React.createElement(Grid.Item, null, /*#__PURE__*/React.createElement(FieldGroup, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0
  }, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
      autoComplete: "off",
      disabled: !allowPasswordChange,
      error: passwordError,
      flexGrow: 1,
      value: password,
      onChange: handlePassword,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      })
    })), !allowPasswordChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('Password_Change_Disabled')));
  }, [t, password, handlePassword, passwordError, allowPasswordChange]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(AnimatedVisibility, {
      visibility: password ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN
    }, /*#__PURE__*/React.createElement(Field.Label, null, t('Confirm_password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
      autoComplete: "off",
      error: passwordError,
      flexGrow: 1,
      value: confirmationPassword,
      onChange: handleConfirmationPassword,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      })
    })), passwordError && /*#__PURE__*/React.createElement(Field.Error, null, passwordError)));
  }, [t, confirmationPassword, handleConfirmationPassword, password, passwordError]))))), /*#__PURE__*/React.createElement(CustomFieldsForm, {
    customFieldsData: customFields,
    setCustomFieldsData: handleCustomFields
  }));
}

module.exportDefault(AccountProfileForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/8611be0108f3cfe70399b6c50745777ba4c54bbd.map

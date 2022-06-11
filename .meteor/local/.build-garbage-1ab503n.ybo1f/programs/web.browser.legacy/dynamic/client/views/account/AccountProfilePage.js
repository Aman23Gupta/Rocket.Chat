function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountProfilePage.js                                                                          //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var ButtonGroup, Button, Box, Icon;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var SHA256;
module.link("meteor/sha", {
  SHA256: function (v) {
    SHA256 = v;
  }
}, 1);
var React, useMemo, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var getUserEmailAddress;
module.link("../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 3);
var ConfirmOwnerChangeWarningModal;
module.link("../../components/ConfirmOwnerChangeWarningModal", {
  "default": function (v) {
    ConfirmOwnerChangeWarningModal = v;
  }
}, 4);
var Page;
module.link("../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 5);
var useSetModal;
module.link("../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 6);
var useEndpoint, useMethod;
module.link("../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useUser, useLogout;
module.link("../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  },
  useLogout: function (v) {
    useLogout = v;
  }
}, 11);
var useForm;
module.link("../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 12);
var useUpdateAvatar;
module.link("../../hooks/useUpdateAvatar", {
  useUpdateAvatar: function (v) {
    useUpdateAvatar = v;
  }
}, 13);
var AccountProfileForm;
module.link("./AccountProfileForm", {
  "default": function (v) {
    AccountProfileForm = v;
  }
}, 14);
var ActionConfirmModal;
module.link("./ActionConfirmModal", {
  "default": function (v) {
    ActionConfirmModal = v;
  }
}, 15);

var getInitialValues = function (user) {
  var _user$name, _getUserEmailAddress, _user$username, _user$avatarUrl, _user$statusText, _user$status, _user$bio, _user$customFields, _user$nickname;

  return {
    realname: (_user$name = user.name) !== null && _user$name !== void 0 ? _user$name : '',
    email: (_getUserEmailAddress = getUserEmailAddress(user)) !== null && _getUserEmailAddress !== void 0 ? _getUserEmailAddress : '',
    username: (_user$username = user.username) !== null && _user$username !== void 0 ? _user$username : '',
    password: '',
    confirmationPassword: '',
    avatar: '',
    url: (_user$avatarUrl = user.avatarUrl) !== null && _user$avatarUrl !== void 0 ? _user$avatarUrl : '',
    statusText: (_user$statusText = user.statusText) !== null && _user$statusText !== void 0 ? _user$statusText : '',
    statusType: (_user$status = user.status) !== null && _user$status !== void 0 ? _user$status : '',
    bio: (_user$bio = user.bio) !== null && _user$bio !== void 0 ? _user$bio : '',
    customFields: (_user$customFields = user.customFields) !== null && _user$customFields !== void 0 ? _user$customFields : {},
    nickname: (_user$nickname = user.nickname) !== null && _user$nickname !== void 0 ? _user$nickname : ''
  };
};

var AccountProfilePage = function () {
  var _user$services, _user$services$passwo;

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var user = useUser();

  var _useForm = useForm(getInitialValues(user !== null && user !== void 0 ? user : {})),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      commit = _useForm.commit,
      reset = _useForm.reset;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      canSave = _useState2[0],
      setCanSave = _useState2[1];

  var setModal = useSetModal();
  var logout = useLogout();

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loggingOut = _useState4[0],
      setLoggingOut = _useState4[1];

  var logoutOtherClients = useEndpoint('POST', 'users.logoutOtherClients');
  var deleteOwnAccount = useMethod('deleteUserOwnAccount');
  var saveFn = useMethod('saveUserProfile');
  var closeModal = useCallback(function () {
    return setModal(null);
  }, [setModal]);
  var localPassword = Boolean(user === null || user === void 0 ? void 0 : (_user$services = user.services) === null || _user$services === void 0 ? void 0 : (_user$services$passwo = _user$services.password) === null || _user$services$passwo === void 0 ? void 0 : _user$services$passwo.exists);
  var erasureType = useSetting('Message_ErasureType');
  var allowRealNameChange = useSetting('Accounts_AllowRealNameChange');
  var allowUserStatusMessageChange = useSetting('Accounts_AllowUserStatusMessageChange');
  var canChangeUsername = useSetting('Accounts_AllowUsernameChange');
  var allowEmailChange = useSetting('Accounts_AllowEmailChange');
  var allowPasswordChange = useSetting('Accounts_AllowPasswordChange');
  var allowOAuthPasswordChange = useSetting('Accounts_AllowPasswordChangeForOAuthUsers');
  var allowUserAvatarChange = useSetting('Accounts_AllowUserAvatarChange');
  var allowDeleteOwnAccount = useSetting('Accounts_AllowDeleteOwnAccount');
  var requireName = useSetting('Accounts_RequireNameForSignUp');
  var namesRegexSetting = useSetting('UTF8_User_Names_Validation');

  if (allowPasswordChange && !allowOAuthPasswordChange) {
    allowPasswordChange = localPassword;
  }

  var namesRegex = useMemo(function () {
    return new RegExp("^" + namesRegexSetting + "$");
  }, [namesRegexSetting]);
  var settings = useMemo(function () {
    return {
      allowRealNameChange: allowRealNameChange,
      allowUserStatusMessageChange: allowUserStatusMessageChange,
      allowEmailChange: allowEmailChange,
      allowPasswordChange: allowPasswordChange,
      allowUserAvatarChange: allowUserAvatarChange,
      allowDeleteOwnAccount: allowDeleteOwnAccount,
      canChangeUsername: canChangeUsername,
      requireName: requireName,
      namesRegex: namesRegex
    };
  }, [allowDeleteOwnAccount, allowEmailChange, allowPasswordChange, allowRealNameChange, allowUserAvatarChange, allowUserStatusMessageChange, canChangeUsername, requireName, namesRegex]);
  var realname = values.realname,
      email = values.email,
      avatar = values.avatar,
      username = values.username,
      password = values.password,
      statusText = values.statusText,
      statusType = values.statusType,
      customFields = values.customFields,
      bio = values.bio,
      nickname = values.nickname;
  var handleAvatar = handlers.handleAvatar,
      handlePassword = handlers.handlePassword,
      handleConfirmationPassword = handlers.handleConfirmationPassword;
  var updateAvatar = useUpdateAvatar(avatar, user === null || user === void 0 ? void 0 : user._id);
  var onSave = useCallback(function () {
    function _callee2() {
      var save;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                save = function () {
                  function _callee(typedPassword) {
                    var avatarResult;
                    return _regeneratorRuntime.async(function () {
                      function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return _regeneratorRuntime.awrap(saveFn(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, allowRealNameChange && {
                                realname: realname
                              }), allowEmailChange && getUserEmailAddress(user) !== email && {
                                email: email
                              }), allowPasswordChange && {
                                newPassword: password
                              }), canChangeUsername && {
                                username: username
                              }), allowUserStatusMessageChange && {
                                statusText: statusText
                              }), typedPassword && {
                                typedPassword: SHA256(typedPassword)
                              }), {}, {
                                statusType: statusType,
                                nickname: nickname,
                                bio: bio || ''
                              }), customFields));

                            case 3:
                              handlePassword('');
                              handleConfirmationPassword('');
                              _context.next = 7;
                              return _regeneratorRuntime.awrap(updateAvatar());

                            case 7:
                              avatarResult = _context.sent;

                              if (avatarResult) {
                                handleAvatar('');
                              }

                              commit();
                              dispatchToastMessage({
                                type: 'success',
                                message: t('Profile_saved_successfully')
                              });
                              _context.next = 16;
                              break;

                            case 13:
                              _context.prev = 13;
                              _context.t0 = _context["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context.t0
                              });

                            case 16:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }

                      return _callee$;
                    }(), null, null, [[0, 13]], Promise);
                  }

                  return _callee;
                }();

                save();

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
  }(), [saveFn, allowEmailChange, allowPasswordChange, allowRealNameChange, allowUserStatusMessageChange, bio, canChangeUsername, email, password, realname, statusText, username, user, updateAvatar, handleAvatar, dispatchToastMessage, t, customFields, statusType, commit, nickname, handlePassword, handleConfirmationPassword]);
  var handleLogoutOtherLocations = useCallback(function () {
    function _callee3() {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setLoggingOut(true);
                _context3.prev = 1;
                _context3.next = 4;
                return _regeneratorRuntime.awrap(logoutOtherClients());

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Logged_out_of_other_clients_successfully')
                });
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 10:
                setLoggingOut(false);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[1, 7]], Promise);
    }

    return _callee3;
  }(), [logoutOtherClients, dispatchToastMessage, t]);
  var handleConfirmOwnerChange = useCallback(function (passwordOrUsername, shouldChangeOwner, shouldBeRemoved) {
    var handleConfirm = function () {
      function _callee4() {
        return _regeneratorRuntime.async(function () {
          function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return _regeneratorRuntime.awrap(deleteOwnAccount(SHA256(passwordOrUsername), true));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_has_been_deleted')
                  });
                  closeModal();
                  logout();
                  _context4.next = 11;
                  break;

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context4.t0
                  });

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }

          return _callee4$;
        }(), null, null, [[0, 8]], Promise);
      }

      return _callee4;
    }();

    return setModal(function () {
      return /*#__PURE__*/React.createElement(ConfirmOwnerChangeWarningModal, {
        onConfirm: handleConfirm,
        onCancel: closeModal,
        contentTitle: t("Delete_User_Warning_" + erasureType),
        confirmLabel: t('Delete'),
        shouldChangeOwner: shouldChangeOwner,
        shouldBeRemoved: shouldBeRemoved
      });
    });
  }, [closeModal, erasureType, setModal, t, deleteOwnAccount, dispatchToastMessage, logout]);
  var handleDeleteOwnAccount = useCallback(function () {
    function _callee6() {
      var handleConfirm;
      return _regeneratorRuntime.async(function () {
        function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                handleConfirm = function () {
                  function _callee5(passwordOrUsername) {
                    var _error$details, shouldChangeOwner, shouldBeRemoved;

                    return _regeneratorRuntime.async(function () {
                      function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.prev = 0;
                              _context5.next = 3;
                              return _regeneratorRuntime.awrap(deleteOwnAccount(SHA256(passwordOrUsername)));

                            case 3:
                              dispatchToastMessage({
                                type: 'success',
                                message: t('User_has_been_deleted')
                              });
                              logout();
                              _context5.next = 13;
                              break;

                            case 7:
                              _context5.prev = 7;
                              _context5.t0 = _context5["catch"](0);

                              if (!(_context5.t0.error === 'user-last-owner')) {
                                _context5.next = 12;
                                break;
                              }

                              _error$details = _context5.t0.details, shouldChangeOwner = _error$details.shouldChangeOwner, shouldBeRemoved = _error$details.shouldBeRemoved;
                              return _context5.abrupt("return", handleConfirmOwnerChange(passwordOrUsername, shouldChangeOwner, shouldBeRemoved));

                            case 12:
                              dispatchToastMessage({
                                type: 'error',
                                message: _context5.t0
                              });

                            case 13:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }

                      return _callee5$;
                    }(), null, null, [[0, 7]], Promise);
                  }

                  return _callee5;
                }();

                return _context6.abrupt("return", setModal(function () {
                  return /*#__PURE__*/React.createElement(ActionConfirmModal, {
                    onConfirm: handleConfirm,
                    onCancel: closeModal,
                    isPassword: localPassword
                  });
                }));

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee6$;
      }(), null, null, null, Promise);
    }

    return _callee6;
  }(), [closeModal, dispatchToastMessage, localPassword, setModal, handleConfirmOwnerChange, deleteOwnAccount, logout, t]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Profile')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    disabled: !hasUnsavedChanges,
    onClick: reset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasUnsavedChanges || !canSave || loggingOut,
    onClick: onSave
  }, t('Save_changes')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "600px",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(AccountProfileForm, {
    values: values,
    handlers: handlers,
    user: user !== null && user !== void 0 ? user : {
      emails: []
    },
    settings: settings,
    onSaveStateChange: setCanSave
  }), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    mb: "x12"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleLogoutOtherLocations,
    flexGrow: 0,
    disabled: loggingOut
  }, t('Logout_Others')), allowDeleteOwnAccount && /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: handleDeleteOwnAccount
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x20",
    mie: "x4"
  }), t('Delete_my_account'))))));
};

module.exportDefault(AccountProfilePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/45fb79cfe7f9cb2ce61ad84c8a1be2a4f988bef5.map

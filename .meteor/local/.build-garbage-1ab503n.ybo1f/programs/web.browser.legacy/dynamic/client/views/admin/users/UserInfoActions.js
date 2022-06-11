function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserInfoActions.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 3);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 4);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 5);
module.export({
  UserInfoActions: function () {
    return UserInfoActions;
  }
});
var ButtonGroup, Menu, Option;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var React, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var ConfirmOwnerChangeWarningModal;
module.link("../../../components/ConfirmOwnerChangeWarningModal", {
  "default": function (v) {
    ConfirmOwnerChangeWarningModal = v;
  }
}, 2);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 4);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 7);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useActionSpread;
module.link("../../hooks/useActionSpread", {
  useActionSpread: function (v) {
    useActionSpread = v;
  }
}, 11);
var UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 12);

var UserInfoActions = function (_ref) {
  var username = _ref.username,
      _id = _ref._id,
      isActive = _ref.isActive,
      isAdmin = _ref.isAdmin,
      onChange = _ref.onChange,
      onReload = _ref.onReload;
  var t = useTranslation();
  var setModal = useSetModal();
  var directRoute = useRoute('direct');
  var userRoute = useRoute('admin-users');
  var dispatchToastMessage = useToastMessageDispatch();
  var canDirectMessage = usePermission('create-d');
  var canEditOtherUserInfo = usePermission('edit-other-user-info');
  var canAssignAdminRole = usePermission('assign-admin-role');
  var canResetE2EEKey = usePermission('edit-other-user-e2ee');
  var canResetTOTP = usePermission('edit-other-user-totp');
  var canEditOtherUserActiveStatus = usePermission('edit-other-user-active-status');
  var canDeleteUser = usePermission('delete-user');
  var enforcePassword = useSetting('Accounts_TwoFactorAuthentication_Enforce_Password_Fallback');
  var handleClose = useCallback(function () {
    setModal();
    onChange();
  }, [setModal, onChange]);

  var handleDeletedUser = function () {
    setModal();
    userRoute.push({});
    onReload();
  };

  var confirmOwnerChanges = function (action) {
    var modalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function () {
      function _callee2() {
        var _error$xhr, _error$xhr$responseJS, _error$xhr$responseJS2, shouldChangeOwner, shouldBeRemoved;

        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(action());

                case 3:
                  return _context2.abrupt("return", _context2.sent);

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);

                  if (!(((_error$xhr = _context2.t0.xhr) === null || _error$xhr === void 0 ? void 0 : (_error$xhr$responseJS = _error$xhr.responseJSON) === null || _error$xhr$responseJS === void 0 ? void 0 : _error$xhr$responseJS.errorType) === 'user-last-owner')) {
                    _context2.next = 12;
                    break;
                  }

                  _error$xhr$responseJS2 = _context2.t0.xhr.responseJSON.details, shouldChangeOwner = _error$xhr$responseJS2.shouldChangeOwner, shouldBeRemoved = _error$xhr$responseJS2.shouldBeRemoved;
                  setModal( /*#__PURE__*/React.createElement(ConfirmOwnerChangeWarningModal, _extends({
                    shouldChangeOwner: shouldChangeOwner,
                    shouldBeRemoved: shouldBeRemoved
                  }, modalProps, {
                    onConfirm: function () {
                      function _callee() {
                        return _regeneratorRuntime.async(function () {
                          function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  _context.next = 2;
                                  return _regeneratorRuntime.awrap(action(true));

                                case 2:
                                  setModal();

                                case 3:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }

                          return _callee$;
                        }(), null, null, null, Promise);
                      }

                      return _callee;
                    }(),
                    onCancel: function () {
                      setModal();
                      onChange();
                    }
                  })));
                  return _context2.abrupt("return");

                case 12:
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });

                case 13:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee2;
    }();
  };

  var deleteUserQuery = useMemo(function () {
    return {
      userId: _id
    };
  }, [_id]);
  var deleteUserEndpoint = useEndpoint('POST', 'users.delete');
  var erasureType = useSetting('Message_ErasureType');
  var deleteUser = confirmOwnerChanges(function () {
    function _callee3() {
      var confirm,
          result,
          _args3 = arguments;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                confirm = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;

                if (confirm) {
                  deleteUserQuery.confirmRelinquish = confirm;
                }

                _context3.next = 4;
                return _regeneratorRuntime.awrap(deleteUserEndpoint(deleteUserQuery));

              case 4:
                result = _context3.sent;

                if (result.success) {
                  handleDeletedUser();
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_has_been_deleted')
                  });
                } else {
                  setModal();
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }(), {
    contentTitle: t("Delete_User_Warning_" + erasureType),
    confirmLabel: t('Delete')
  });
  var confirmDeleteUser = useCallback(function () {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: deleteUser,
      onCancel: function () {
        return setModal();
      },
      confirmText: t('Delete')
    }, t("Delete_User_Warning_" + erasureType)));
  }, [deleteUser, erasureType, setModal, t]);
  var setAdminStatus = useMethod('setAdminStatus');
  var changeAdminStatus = useCallback(function () {
    function _callee4() {
      var message;
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _regeneratorRuntime.awrap(setAdminStatus(_id, !isAdmin));

              case 3:
                message = isAdmin ? 'User_is_no_longer_an_admin' : 'User_is_now_an_admin';
                dispatchToastMessage({
                  type: 'success',
                  message: t(message)
                });
                onChange();
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
  }(), [_id, dispatchToastMessage, isAdmin, onChange, setAdminStatus, t]);
  var resetE2EEKeyRequest = useEndpoint('POST', 'users.resetE2EKey');
  var resetTOTPRequest = useEndpoint('POST', 'users.resetTOTP');
  var resetE2EEKey = useCallback(function () {
    function _callee5() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                setModal();
                _context5.next = 3;
                return _regeneratorRuntime.awrap(resetE2EEKeyRequest({
                  userId: _id
                }));

              case 3:
                result = _context5.sent;

                if (result) {
                  setModal( /*#__PURE__*/React.createElement(GenericModal, {
                    variant: "success",
                    onClose: handleClose,
                    onConfirm: handleClose
                  }, t('Users_key_has_been_reset')));
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, null, Promise);
    }

    return _callee5;
  }(), [resetE2EEKeyRequest, setModal, t, _id, handleClose]);
  var resetTOTP = useCallback(function () {
    function _callee6() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                setModal();
                _context6.next = 3;
                return _regeneratorRuntime.awrap(resetTOTPRequest({
                  userId: _id
                }));

              case 3:
                result = _context6.sent;

                if (result) {
                  setModal( /*#__PURE__*/React.createElement(GenericModal, {
                    variant: "success",
                    onClose: handleClose,
                    onConfirm: handleClose
                  }, t('Users_TOTP_has_been_reset')));
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }

        return _callee6$;
      }(), null, null, null, Promise);
    }

    return _callee6;
  }(), [resetTOTPRequest, setModal, t, _id, handleClose]);
  var confirmResetE2EEKey = useCallback(function () {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: resetE2EEKey,
      onCancel: function () {
        return setModal();
      },
      confirmText: t('Reset')
    }, t('E2E_Reset_Other_Key_Warning')));
  }, [resetE2EEKey, t, setModal]);
  var confirmResetTOTP = useCallback(function () {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: resetTOTP,
      onCancel: function () {
        return setModal();
      },
      confirmText: t('Reset')
    }, t('TOTP_Reset_Other_Key_Warning')));
  }, [resetTOTP, t, setModal]);
  var activeStatusQuery = useMemo(function () {
    return {
      userId: _id,
      activeStatus: !isActive
    };
  }, [_id, isActive]);
  var changeActiveStatusMessage = isActive ? 'User_has_been_deactivated' : 'User_has_been_activated';
  var changeActiveStatusRequest = useEndpoint('POST', 'users.setActiveStatus');
  var changeActiveStatus = confirmOwnerChanges(function () {
    function _callee7() {
      var confirm,
          result,
          _args7 = arguments;
      return _regeneratorRuntime.async(function () {
        function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                confirm = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;

                if (confirm) {
                  activeStatusQuery.confirmRelinquish = confirm;
                }

                _context7.prev = 2;
                _context7.next = 5;
                return _regeneratorRuntime.awrap(changeActiveStatusRequest(activeStatusQuery));

              case 5:
                result = _context7.sent;

                if (result.success) {
                  dispatchToastMessage({
                    type: 'success',
                    message: t(changeActiveStatusMessage)
                  });
                  onChange();
                }

                _context7.next = 12;
                break;

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](2);
                throw _context7.t0;

              case 12:
              case "end":
                return _context7.stop();
            }
          }
        }

        return _callee7$;
      }(), null, null, [[2, 9]], Promise);
    }

    return _callee7;
  }(), {
    confirmLabel: t('Yes_deactivate_it')
  });
  var directMessageClick = useCallback(function () {
    return directRoute.push({
      rid: username
    });
  }, [directRoute, username]);
  var editUserClick = useCallback(function () {
    return userRoute.push({
      context: 'edit',
      id: _id
    });
  }, [_id, userRoute]);
  var options = useMemo(function () {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, canDirectMessage && {
      directMessage: {
        icon: 'balloon',
        label: t('Direct_Message'),
        action: directMessageClick
      }
    }), canEditOtherUserInfo && {
      editUser: {
        icon: 'edit',
        label: t('Edit'),
        action: editUserClick
      }
    }), canAssignAdminRole && username && {
      makeAdmin: {
        icon: 'key',
        label: isAdmin ? t('Remove_Admin') : t('Make_Admin'),
        action: changeAdminStatus
      }
    }), canResetE2EEKey && enforcePassword && {
      resetE2EEKey: {
        icon: 'key',
        label: t('Reset_E2E_Key'),
        action: confirmResetE2EEKey
      }
    }), canResetTOTP && enforcePassword && {
      resetTOTP: {
        icon: 'key',
        label: t('Reset_TOTP'),
        action: confirmResetTOTP
      }
    }), canDeleteUser && {
      "delete": {
        icon: 'trash',
        label: t('Delete'),
        action: confirmDeleteUser
      }
    }), canEditOtherUserActiveStatus && {
      changeActiveStatus: {
        icon: 'user',
        label: isActive ? t('Deactivate') : t('Activate'),
        action: changeActiveStatus
      }
    });
  }, [t, canDirectMessage, directMessageClick, canEditOtherUserInfo, editUserClick, canAssignAdminRole, isAdmin, changeAdminStatus, canDeleteUser, confirmDeleteUser, canEditOtherUserActiveStatus, isActive, changeActiveStatus, enforcePassword, canResetE2EEKey, canResetTOTP, confirmResetE2EEKey, confirmResetTOTP, username]);

  var _useActionSpread = useActionSpread(options),
      actionsDefinition = _useActionSpread.actions,
      menuOptions = _useActionSpread.menu;

  var menu = useMemo(function () {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      mi: "x4",
      placement: "bottom-start",
      small: false,
      ghost: false,
      flexShrink: 0,
      key: "menu",
      renderItem: function (_ref2) {
        var _ref2$label = _ref2.label,
            label = _ref2$label.label,
            icon = _ref2$label.icon,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({
          label: label,
          title: label,
          icon: icon
        }, props));
      },
      options: menuOptions
    });
  }, [menuOptions]);
  var actions = useMemo(function () {
    var mapAction = function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          _ref4$ = _ref4[1],
          label = _ref4$.label,
          icon = _ref4$.icon,
          action = _ref4$.action;

      return /*#__PURE__*/React.createElement(UserInfo.Action, {
        key: key,
        title: label,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [].concat(_toConsumableArray(actionsDefinition.map(mapAction)), [menu]).filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    flexGrow: 0,
    justifyContent: "center"
  }, actions);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/07b590daf0489f8e1b942c39b2af098d6c2a9bce.map

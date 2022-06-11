function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserInfoActions.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 2);
module.export({
  UserInfoActions: () => UserInfoActions
});
let ButtonGroup, Menu, Option;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let React, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let ConfirmOwnerChangeWarningModal;
module.link("../../../components/ConfirmOwnerChangeWarningModal", {
  default(v) {
    ConfirmOwnerChangeWarningModal = v;
  }

}, 2);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 4);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useEndpoint(v) {
    useEndpoint = v;
  }

}, 7);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useActionSpread;
module.link("../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 11);
let UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 12);

const UserInfoActions = _ref => {
  let {
    username,
    _id,
    isActive,
    isAdmin,
    onChange,
    onReload
  } = _ref;
  const t = useTranslation();
  const setModal = useSetModal();
  const directRoute = useRoute('direct');
  const userRoute = useRoute('admin-users');
  const dispatchToastMessage = useToastMessageDispatch();
  const canDirectMessage = usePermission('create-d');
  const canEditOtherUserInfo = usePermission('edit-other-user-info');
  const canAssignAdminRole = usePermission('assign-admin-role');
  const canResetE2EEKey = usePermission('edit-other-user-e2ee');
  const canResetTOTP = usePermission('edit-other-user-totp');
  const canEditOtherUserActiveStatus = usePermission('edit-other-user-active-status');
  const canDeleteUser = usePermission('delete-user');
  const enforcePassword = useSetting('Accounts_TwoFactorAuthentication_Enforce_Password_Fallback');
  const handleClose = useCallback(() => {
    setModal();
    onChange();
  }, [setModal, onChange]);

  const handleDeletedUser = () => {
    setModal();
    userRoute.push({});
    onReload();
  };

  const confirmOwnerChanges = function (action) {
    let modalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return async () => {
      try {
        return await action();
      } catch (error) {
        var _error$xhr, _error$xhr$responseJS;

        if (((_error$xhr = error.xhr) === null || _error$xhr === void 0 ? void 0 : (_error$xhr$responseJS = _error$xhr.responseJSON) === null || _error$xhr$responseJS === void 0 ? void 0 : _error$xhr$responseJS.errorType) === 'user-last-owner') {
          const {
            shouldChangeOwner,
            shouldBeRemoved
          } = error.xhr.responseJSON.details;
          setModal( /*#__PURE__*/React.createElement(ConfirmOwnerChangeWarningModal, _extends({
            shouldChangeOwner: shouldChangeOwner,
            shouldBeRemoved: shouldBeRemoved
          }, modalProps, {
            onConfirm: async () => {
              await action(true);
              setModal();
            },
            onCancel: () => {
              setModal();
              onChange();
            }
          })));
          return;
        }

        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };
  };

  const deleteUserQuery = useMemo(() => ({
    userId: _id
  }), [_id]);
  const deleteUserEndpoint = useEndpoint('POST', 'users.delete');
  const erasureType = useSetting('Message_ErasureType');
  const deleteUser = confirmOwnerChanges(async function () {
    let confirm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (confirm) {
      deleteUserQuery.confirmRelinquish = confirm;
    }

    const result = await deleteUserEndpoint(deleteUserQuery);

    if (result.success) {
      handleDeletedUser();
      dispatchToastMessage({
        type: 'success',
        message: t('User_has_been_deleted')
      });
    } else {
      setModal();
    }
  }, {
    contentTitle: t("Delete_User_Warning_".concat(erasureType)),
    confirmLabel: t('Delete')
  });
  const confirmDeleteUser = useCallback(() => {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: deleteUser,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }, t("Delete_User_Warning_".concat(erasureType))));
  }, [deleteUser, erasureType, setModal, t]);
  const setAdminStatus = useMethod('setAdminStatus');
  const changeAdminStatus = useCallback(async () => {
    try {
      await setAdminStatus(_id, !isAdmin);
      const message = isAdmin ? 'User_is_no_longer_an_admin' : 'User_is_now_an_admin';
      dispatchToastMessage({
        type: 'success',
        message: t(message)
      });
      onChange();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [_id, dispatchToastMessage, isAdmin, onChange, setAdminStatus, t]);
  const resetE2EEKeyRequest = useEndpoint('POST', 'users.resetE2EKey');
  const resetTOTPRequest = useEndpoint('POST', 'users.resetTOTP');
  const resetE2EEKey = useCallback(async () => {
    setModal();
    const result = await resetE2EEKeyRequest({
      userId: _id
    });

    if (result) {
      setModal( /*#__PURE__*/React.createElement(GenericModal, {
        variant: "success",
        onClose: handleClose,
        onConfirm: handleClose
      }, t('Users_key_has_been_reset')));
    }
  }, [resetE2EEKeyRequest, setModal, t, _id, handleClose]);
  const resetTOTP = useCallback(async () => {
    setModal();
    const result = await resetTOTPRequest({
      userId: _id
    });

    if (result) {
      setModal( /*#__PURE__*/React.createElement(GenericModal, {
        variant: "success",
        onClose: handleClose,
        onConfirm: handleClose
      }, t('Users_TOTP_has_been_reset')));
    }
  }, [resetTOTPRequest, setModal, t, _id, handleClose]);
  const confirmResetE2EEKey = useCallback(() => {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: resetE2EEKey,
      onCancel: () => setModal(),
      confirmText: t('Reset')
    }, t('E2E_Reset_Other_Key_Warning')));
  }, [resetE2EEKey, t, setModal]);
  const confirmResetTOTP = useCallback(() => {
    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: resetTOTP,
      onCancel: () => setModal(),
      confirmText: t('Reset')
    }, t('TOTP_Reset_Other_Key_Warning')));
  }, [resetTOTP, t, setModal]);
  const activeStatusQuery = useMemo(() => ({
    userId: _id,
    activeStatus: !isActive
  }), [_id, isActive]);
  const changeActiveStatusMessage = isActive ? 'User_has_been_deactivated' : 'User_has_been_activated';
  const changeActiveStatusRequest = useEndpoint('POST', 'users.setActiveStatus');
  const changeActiveStatus = confirmOwnerChanges(async function () {
    let confirm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (confirm) {
      activeStatusQuery.confirmRelinquish = confirm;
    }

    try {
      const result = await changeActiveStatusRequest(activeStatusQuery);

      if (result.success) {
        dispatchToastMessage({
          type: 'success',
          message: t(changeActiveStatusMessage)
        });
        onChange();
      }
    } catch (error) {
      throw error;
    }
  }, {
    confirmLabel: t('Yes_deactivate_it')
  });
  const directMessageClick = useCallback(() => directRoute.push({
    rid: username
  }), [directRoute, username]);
  const editUserClick = useCallback(() => userRoute.push({
    context: 'edit',
    id: _id
  }), [_id, userRoute]);
  const options = useMemo(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, canDirectMessage && {
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
    delete: {
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
  }), [t, canDirectMessage, directMessageClick, canEditOtherUserInfo, editUserClick, canAssignAdminRole, isAdmin, changeAdminStatus, canDeleteUser, confirmDeleteUser, canEditOtherUserActiveStatus, isActive, changeActiveStatus, enforcePassword, canResetE2EEKey, canResetTOTP, confirmResetE2EEKey, confirmResetTOTP, username]);
  const {
    actions: actionsDefinition,
    menu: menuOptions
  } = useActionSpread(options);
  const menu = useMemo(() => {
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
      renderItem: _ref2 => {
        let {
          label: {
            label,
            icon
          }
        } = _ref2,
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
  const actions = useMemo(() => {
    const mapAction = _ref3 => {
      let [key, {
        label,
        icon,
        action
      }] = _ref3;
      return /*#__PURE__*/React.createElement(UserInfo.Action, {
        key: key,
        title: label,
        label: label,
        onClick: action,
        icon: icon
      });
    };

    return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    flexGrow: 0,
    justifyContent: "center"
  }, actions);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/a66ccf1c947dcc07139a91b1bfb181224442a7df.map

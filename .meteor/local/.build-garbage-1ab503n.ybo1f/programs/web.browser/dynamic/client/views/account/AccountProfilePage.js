function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountProfilePage.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let ButtonGroup, Button, Box, Icon;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let SHA256;
module.link("meteor/sha", {
  SHA256(v) {
    SHA256 = v;
  }

}, 1);
let React, useMemo, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let getUserEmailAddress;
module.link("../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 3);
let ConfirmOwnerChangeWarningModal;
module.link("../../components/ConfirmOwnerChangeWarningModal", {
  default(v) {
    ConfirmOwnerChangeWarningModal = v;
  }

}, 4);
let Page;
module.link("../../components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useSetModal;
module.link("../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 6);
let useEndpoint, useMethod;
module.link("../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useUser, useLogout;
module.link("../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  },

  useLogout(v) {
    useLogout = v;
  }

}, 11);
let useForm;
module.link("../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 12);
let useUpdateAvatar;
module.link("../../hooks/useUpdateAvatar", {
  useUpdateAvatar(v) {
    useUpdateAvatar = v;
  }

}, 13);
let AccountProfileForm;
module.link("./AccountProfileForm", {
  default(v) {
    AccountProfileForm = v;
  }

}, 14);
let ActionConfirmModal;
module.link("./ActionConfirmModal", {
  default(v) {
    ActionConfirmModal = v;
  }

}, 15);

const getInitialValues = user => {
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

const AccountProfilePage = () => {
  var _user$services, _user$services$passwo;

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const user = useUser();
  const {
    values,
    handlers,
    hasUnsavedChanges,
    commit,
    reset
  } = useForm(getInitialValues(user !== null && user !== void 0 ? user : {}));
  const [canSave, setCanSave] = useState(true);
  const setModal = useSetModal();
  const logout = useLogout();
  const [loggingOut, setLoggingOut] = useState(false);
  const logoutOtherClients = useEndpoint('POST', 'users.logoutOtherClients');
  const deleteOwnAccount = useMethod('deleteUserOwnAccount');
  const saveFn = useMethod('saveUserProfile');
  const closeModal = useCallback(() => setModal(null), [setModal]);
  const localPassword = Boolean(user === null || user === void 0 ? void 0 : (_user$services = user.services) === null || _user$services === void 0 ? void 0 : (_user$services$passwo = _user$services.password) === null || _user$services$passwo === void 0 ? void 0 : _user$services$passwo.exists);
  const erasureType = useSetting('Message_ErasureType');
  const allowRealNameChange = useSetting('Accounts_AllowRealNameChange');
  const allowUserStatusMessageChange = useSetting('Accounts_AllowUserStatusMessageChange');
  const canChangeUsername = useSetting('Accounts_AllowUsernameChange');
  const allowEmailChange = useSetting('Accounts_AllowEmailChange');
  let allowPasswordChange = useSetting('Accounts_AllowPasswordChange');
  const allowOAuthPasswordChange = useSetting('Accounts_AllowPasswordChangeForOAuthUsers');
  const allowUserAvatarChange = useSetting('Accounts_AllowUserAvatarChange');
  const allowDeleteOwnAccount = useSetting('Accounts_AllowDeleteOwnAccount');
  const requireName = useSetting('Accounts_RequireNameForSignUp');
  const namesRegexSetting = useSetting('UTF8_User_Names_Validation');

  if (allowPasswordChange && !allowOAuthPasswordChange) {
    allowPasswordChange = localPassword;
  }

  const namesRegex = useMemo(() => new RegExp("^".concat(namesRegexSetting, "$")), [namesRegexSetting]);
  const settings = useMemo(() => ({
    allowRealNameChange,
    allowUserStatusMessageChange,
    allowEmailChange,
    allowPasswordChange,
    allowUserAvatarChange,
    allowDeleteOwnAccount,
    canChangeUsername,
    requireName,
    namesRegex
  }), [allowDeleteOwnAccount, allowEmailChange, allowPasswordChange, allowRealNameChange, allowUserAvatarChange, allowUserStatusMessageChange, canChangeUsername, requireName, namesRegex]);
  const {
    realname,
    email,
    avatar,
    username,
    password,
    statusText,
    statusType,
    customFields,
    bio,
    nickname
  } = values;
  const {
    handleAvatar,
    handlePassword,
    handleConfirmationPassword
  } = handlers;
  const updateAvatar = useUpdateAvatar(avatar, user === null || user === void 0 ? void 0 : user._id);
  const onSave = useCallback(async () => {
    const save = async typedPassword => {
      try {
        await saveFn(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, allowRealNameChange && {
          realname
        }), allowEmailChange && getUserEmailAddress(user) !== email && {
          email
        }), allowPasswordChange && {
          newPassword: password
        }), canChangeUsername && {
          username
        }), allowUserStatusMessageChange && {
          statusText
        }), typedPassword && {
          typedPassword: SHA256(typedPassword)
        }), {}, {
          statusType,
          nickname,
          bio: bio || ''
        }), customFields);
        handlePassword('');
        handleConfirmationPassword('');
        const avatarResult = await updateAvatar();

        if (avatarResult) {
          handleAvatar('');
        }

        commit();
        dispatchToastMessage({
          type: 'success',
          message: t('Profile_saved_successfully')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };

    save();
  }, [saveFn, allowEmailChange, allowPasswordChange, allowRealNameChange, allowUserStatusMessageChange, bio, canChangeUsername, email, password, realname, statusText, username, user, updateAvatar, handleAvatar, dispatchToastMessage, t, customFields, statusType, commit, nickname, handlePassword, handleConfirmationPassword]);
  const handleLogoutOtherLocations = useCallback(async () => {
    setLoggingOut(true);

    try {
      await logoutOtherClients();
      dispatchToastMessage({
        type: 'success',
        message: t('Logged_out_of_other_clients_successfully')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }

    setLoggingOut(false);
  }, [logoutOtherClients, dispatchToastMessage, t]);
  const handleConfirmOwnerChange = useCallback((passwordOrUsername, shouldChangeOwner, shouldBeRemoved) => {
    const handleConfirm = async () => {
      try {
        await deleteOwnAccount(SHA256(passwordOrUsername), true);
        dispatchToastMessage({
          type: 'success',
          message: t('User_has_been_deleted')
        });
        closeModal();
        logout();
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };

    return setModal(() => /*#__PURE__*/React.createElement(ConfirmOwnerChangeWarningModal, {
      onConfirm: handleConfirm,
      onCancel: closeModal,
      contentTitle: t("Delete_User_Warning_".concat(erasureType)),
      confirmLabel: t('Delete'),
      shouldChangeOwner: shouldChangeOwner,
      shouldBeRemoved: shouldBeRemoved
    }));
  }, [closeModal, erasureType, setModal, t, deleteOwnAccount, dispatchToastMessage, logout]);
  const handleDeleteOwnAccount = useCallback(async () => {
    const handleConfirm = async passwordOrUsername => {
      try {
        await deleteOwnAccount(SHA256(passwordOrUsername));
        dispatchToastMessage({
          type: 'success',
          message: t('User_has_been_deleted')
        });
        logout();
      } catch (error) {
        if (error.error === 'user-last-owner') {
          const {
            shouldChangeOwner,
            shouldBeRemoved
          } = error.details;
          return handleConfirmOwnerChange(passwordOrUsername, shouldChangeOwner, shouldBeRemoved);
        }

        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }
    };

    return setModal(() => /*#__PURE__*/React.createElement(ActionConfirmModal, {
      onConfirm: handleConfirm,
      onCancel: closeModal,
      isPassword: localPassword
    }));
  }, [closeModal, dispatchToastMessage, localPassword, setModal, handleConfirmOwnerChange, deleteOwnAccount, logout, t]);
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
//# sourceMappingURL=/dynamic/client/views/account/4153b25169ac60ed5af9280f0fd69e6074f87cc7.map

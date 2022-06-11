function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountProfileForm.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["values", "handlers", "user", "settings", "onSaveStateChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Field, FieldGroup, TextInput, TextAreaInput, Box, Icon, AnimatedVisibility, PasswordInput, Button, Grid, Margins;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  AnimatedVisibility(v) {
    AnimatedVisibility = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  Button(v) {
    Button = v;
  },

  Grid(v) {
    Grid = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useDebouncedCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback(v) {
    useDebouncedCallback = v;
  },

  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useCallback, useMemo, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let validateEmail;
module.link("../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 3);
let getUserEmailAddress;
module.link("../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 4);
let CustomFieldsForm;
module.link("../../components/CustomFieldsForm", {
  default(v) {
    CustomFieldsForm = v;
  }

}, 5);
let USER_STATUS_TEXT_MAX_LENGTH;
module.link("../../components/UserStatus", {
  USER_STATUS_TEXT_MAX_LENGTH(v) {
    USER_STATUS_TEXT_MAX_LENGTH = v;
  }

}, 6);
let UserStatusMenu;
module.link("../../components/UserStatusMenu", {
  default(v) {
    UserStatusMenu = v;
  }

}, 7);
let UserAvatarEditor;
module.link("../../components/avatar/UserAvatarEditor", {
  default(v) {
    UserAvatarEditor = v;
  }

}, 8);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);

function AccountProfileForm(_ref) {
  let {
    values,
    handlers,
    user,
    settings,
    onSaveStateChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const checkUsernameAvailability = useMethod('checkUsernameAvailability');
  const getAvatarSuggestions = useMethod('getAvatarSuggestion');
  const sendConfirmationEmail = useMethod('sendConfirmationEmail');
  const [usernameError, setUsernameError] = useState();
  const [avatarSuggestions, setAvatarSuggestions] = useSafely(useState());
  const {
    allowRealNameChange,
    allowUserStatusMessageChange,
    allowEmailChange,
    allowPasswordChange,
    allowUserAvatarChange,
    canChangeUsername,
    namesRegex,
    requireName
  } = settings;
  const {
    realname,
    email,
    username,
    password,
    confirmationPassword,
    statusText,
    bio,
    statusType,
    customFields,
    nickname
  } = values;
  const {
    handleRealname,
    handleEmail,
    handleUsername,
    handlePassword,
    handleConfirmationPassword,
    handleAvatar,
    handleStatusText,
    handleStatusType,
    handleBio,
    handleCustomFields,
    handleNickname
  } = handlers;
  const previousEmail = getUserEmailAddress(user);
  const handleSendConfirmationEmail = useCallback(async () => {
    if (email !== previousEmail) {
      return;
    }

    try {
      await sendConfirmationEmail(email);
      dispatchToastMessage({
        type: 'success',
        message: t('Verification_email_sent')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, email, previousEmail, sendConfirmationEmail, t]);
  const passwordError = useMemo(() => !password || !confirmationPassword || password === confirmationPassword ? undefined : t('Passwords_do_not_match'), [t, password, confirmationPassword]);
  const emailError = useMemo(() => validateEmail(email) ? undefined : 'error-invalid-email-address', [email]);
  const checkUsername = useDebouncedCallback(async username => {
    if (user.username === username) {
      return setUsernameError(undefined);
    }

    if (!namesRegex.test(username)) {
      return setUsernameError(t('error-invalid-username'));
    }

    const isAvailable = await checkUsernameAvailability(username);

    if (!isAvailable) {
      return setUsernameError(t('Username_already_exist'));
    }

    setUsernameError(undefined);
  }, 400, [namesRegex, t, user.username, checkUsernameAvailability, setUsernameError]);
  useEffect(() => {
    const getSuggestions = async () => {
      const suggestions = await getAvatarSuggestions();
      setAvatarSuggestions(suggestions);
    };

    getSuggestions();
  }, [getAvatarSuggestions, setAvatarSuggestions]);
  useEffect(() => {
    checkUsername(username);
  }, [checkUsername, username]);
  useEffect(() => {
    if (!password) {
      handleConfirmationPassword('');
    }
  }, [password, handleConfirmationPassword]);
  const nameError = useMemo(() => {
    if (user.name === realname) {
      return undefined;
    }

    if (!realname && requireName) {
      return t('Field_required');
    }
  }, [realname, requireName, t, user.name]);
  const statusTextError = useMemo(() => {
    if (statusText && statusText.length > USER_STATUS_TEXT_MAX_LENGTH) {
      return t('Max_length_is', USER_STATUS_TEXT_MAX_LENGTH);
    }

    return undefined;
  }, [statusText, t]);
  const {
    emails: [{
      verified = false
    } = {
      verified: false
    }]
  } = user;
  const canSave = !![!!passwordError, !!emailError, !!usernameError, !!nameError, !!statusTextError].filter(Boolean);
  useEffect(() => {
    onSaveStateChange(canSave);
  }, [canSave, onSaveStateChange]);
  const handleSubmit = useCallback(e => {
    e.preventDefault();
  }, []);
  return /*#__PURE__*/React.createElement(FieldGroup, _extends({
    is: "form",
    autoComplete: "off",
    onSubmit: handleSubmit
  }, props), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(UserAvatarEditor, {
    etag: user.avatarETag,
    currentUsername: user.username,
    username: username,
    setAvatarObj: handleAvatar,
    disabled: !allowUserAvatarChange,
    suggestions: avatarSuggestions
  })), [username, user.username, handleAvatar, allowUserAvatarChange, avatarSuggestions, user.avatarETag]), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }, useMemo(() => /*#__PURE__*/React.createElement(Field, {
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
  })), !allowRealNameChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('RealName_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, nameError)), [t, realname, handleRealname, allowRealNameChange, nameError]), useMemo(() => /*#__PURE__*/React.createElement(Field, {
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
  })), !canChangeUsername && /*#__PURE__*/React.createElement(Field.Hint, null, t('Username_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, usernameError)), [t, username, handleUsername, canChangeUsername, usernameError])), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('StatusMessage')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
  })), !allowUserStatusMessageChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('StatusMessage_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, statusTextError)), [t, statusTextError, allowUserStatusMessageChange, statusText, handleStatusText, handleStatusType, statusType]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Nickname')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: nickname,
    onChange: handleNickname,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20",
      alignSelf: "center"
    })
  }))), [nickname, handleNickname, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Bio')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    flexGrow: 1,
    value: bio,
    onChange: handleBio,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20",
      alignSelf: "center"
    })
  }))), [bio, handleBio, t]), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Grid.Item, null, /*#__PURE__*/React.createElement(FieldGroup, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0
  }, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: email,
    error: emailError,
    onChange: handleEmail,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: verified ? 'circle-check' : 'mail',
      size: "x20"
    }),
    disabled: !allowEmailChange
  })), !allowEmailChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('Email_Change_Disabled')), /*#__PURE__*/React.createElement(Field.Error, null, t(emailError))), [t, email, handleEmail, verified, allowEmailChange, emailError]), useMemo(() => !verified && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x28"
  }, /*#__PURE__*/React.createElement(Button, {
    disabled: email !== previousEmail,
    onClick: handleSendConfirmationEmail
  }, t('Resend_verification_email')))), [verified, t, email, previousEmail, handleSendConfirmationEmail]))), /*#__PURE__*/React.createElement(Grid.Item, null, /*#__PURE__*/React.createElement(FieldGroup, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0
  }, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
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
  })), !allowPasswordChange && /*#__PURE__*/React.createElement(Field.Hint, null, t('Password_Change_Disabled'))), [t, password, handlePassword, passwordError, allowPasswordChange]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(AnimatedVisibility, {
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
  })), passwordError && /*#__PURE__*/React.createElement(Field.Error, null, passwordError))), [t, confirmationPassword, handleConfirmationPassword, password, passwordError]))))), /*#__PURE__*/React.createElement(CustomFieldsForm, {
    customFieldsData: customFields,
    setCustomFieldsData: handleCustomFields
  }));
}

module.exportDefault(AccountProfileForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/00b1b2c498881f68f8355ccc5f05c4cd38d35f29.map

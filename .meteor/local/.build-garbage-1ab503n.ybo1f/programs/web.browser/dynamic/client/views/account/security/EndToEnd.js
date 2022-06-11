function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/EndToEnd.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Margins, PasswordInput, Field, FieldGroup, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useLocalStorage, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useLocalStorage(v) {
    useLocalStorage = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let React, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 3);
let e2e;
module.link("../../../../app/e2e/client/rocketchat.e2e", {
  e2e(v) {
    e2e = v;
  }

}, 4);
let callbacks;
module.link("../../../../lib/callbacks", {
  callbacks(v) {
    callbacks = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 10);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 11);

const EndToEnd = props => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const homeRoute = useRoute('home');
  const user = useUser();
  const publicKey = useLocalStorage('public_key');
  const privateKey = useLocalStorage('private_key');
  const resetE2eKey = useMethod('e2e.resetOwnE2EKey');
  const {
    values,
    handlers,
    reset
  } = useForm({
    password: '',
    passwordConfirm: ''
  });
  const {
    password,
    passwordConfirm
  } = values;
  const {
    handlePassword,
    handlePasswordConfirm
  } = handlers;
  const keysExist = publicKey && privateKey;
  const hasTypedPassword = password.trim().length > 0;
  const passwordError = password !== passwordConfirm && passwordConfirm.length > 0 ? t('Passwords_do_not_match') : undefined;
  const canSave = keysExist && !passwordError && passwordConfirm.length > 0;
  const handleLogout = useMutableCallback(() => {
    Meteor.logout(() => {
      callbacks.run('afterLogoutCleanUp', user);
      Meteor.call('logoutCleanUp', user);
      homeRoute.push({});
    });
  });
  const saveNewPassword = useCallback(async () => {
    try {
      await e2e.changePassword(password);
      reset();
      dispatchToastMessage({
        type: 'success',
        message: t('Encryption_key_saved_successfully')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, password, reset, t]);
  const handleResetE2eKey = useCallback(async () => {
    try {
      const result = await resetE2eKey();

      if (result) {
        dispatchToastMessage({
          type: 'success',
          message: t('User_e2e_key_was_reset')
        });
        handleLogout();
      }
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, resetE2eKey, handleLogout, t]);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/account/security/f041516c338fda0b388d1c762ac492a2fb7cb30a.map

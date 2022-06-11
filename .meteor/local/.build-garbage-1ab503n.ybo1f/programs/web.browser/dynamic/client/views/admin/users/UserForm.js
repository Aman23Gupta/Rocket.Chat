function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserForm.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["formValues", "formHandlers", "availableRoles", "append", "prepend", "errors"];

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
module.export({
  default: () => UserForm
});
let Field, TextInput, TextAreaInput, PasswordInput, MultiSelectFiltered, Box, ToggleSwitch, Icon, Divider, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  PasswordInput(v) {
    PasswordInput = v;
  },

  MultiSelectFiltered(v) {
    MultiSelectFiltered = v;
  },

  Box(v) {
    Box = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Icon(v) {
    Icon = v;
  },

  Divider(v) {
    Divider = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let React, useCallback, useMemo, useState;
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

  useState(v) {
    useState = v;
  }

}, 1);
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 2);
let CustomFieldsForm;
module.link("../../../components/CustomFieldsForm", {
  default(v) {
    CustomFieldsForm = v;
  }

}, 3);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

function UserForm(_ref) {
  let {
    formValues,
    formHandlers,
    availableRoles,
    append,
    prepend,
    errors
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [hasCustomFields, setHasCustomFields] = useState(false);
  const {
    name,
    username,
    email,
    verified,
    statusText,
    bio,
    nickname,
    password,
    setRandomPassword,
    requirePasswordChange,
    roles,
    customFields,
    joinDefaultChannels,
    sendWelcomeEmail
  } = formValues;
  const {
    handleName,
    handleUsername,
    handleEmail,
    handleVerified,
    handleStatusText,
    handleBio,
    handleNickname,
    handlePassword,
    handleSetRandomPassword,
    handleRequirePasswordChange,
    handleRoles,
    handleCustomFields,
    handleJoinDefaultChannels,
    handleSendWelcomeEmail
  } = formHandlers;
  const onLoadCustomFields = useCallback(hasCustomFields => setHasCustomFields(hasCustomFields), []);
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    is: "form",
    onSubmit: useCallback(e => e.preventDefault(), [])
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, prepend, useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: errors && errors.name,
    flexGrow: 1,
    value: name,
    onChange: handleName
  })), errors && errors.name && /*#__PURE__*/React.createElement(Field.Error, null, errors.name)), [t, name, handleName, errors]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: errors && errors.username,
    flexGrow: 1,
    value: username,
    onChange: handleUsername,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "at",
      size: "x20"
    })
  })), errors && errors.username && /*#__PURE__*/React.createElement(Field.Error, null, errors.username)), [t, username, handleUsername, errors]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: errors && errors.email,
    flexGrow: 1,
    value: email,
    error: !validateEmail(email) && email.length > 0 ? 'error' : undefined,
    onChange: handleEmail,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: "x20"
    })
  })), errors && errors.email && /*#__PURE__*/React.createElement(Field.Error, null, errors.email), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    mbs: "x4"
  }, /*#__PURE__*/React.createElement(Box, null, t('Verified')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: verified,
    onChange: handleVerified
  })))), [t, email, handleEmail, verified, handleVerified, errors]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('StatusMessage')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: statusText,
    onChange: handleStatusText,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20"
    })
  }))), [t, statusText, handleStatusText]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Bio')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    flexGrow: 1,
    value: bio,
    onChange: handleBio,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20",
      alignSelf: "center"
    })
  }))), [bio, handleBio, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Nickname')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: nickname,
    onChange: handleNickname,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20",
      alignSelf: "center"
    })
  }))), [nickname, handleNickname, t]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
    errors: errors && errors.password,
    autoComplete: "off",
    flexGrow: 1,
    value: password,
    onChange: handlePassword,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "key",
      size: "x20"
    })
  })), errors && errors.password && /*#__PURE__*/React.createElement(Field.Error, null, errors.password)), [t, password, handlePassword, errors]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, null, t('Require_password_change')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    disabled: setRandomPassword,
    checked: setRandomPassword || requirePasswordChange,
    onChange: handleRequirePasswordChange
  })))), [t, setRandomPassword, requirePasswordChange, handleRequirePasswordChange]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, null, t('Set_random_password_and_send_by_email')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: setRandomPassword,
    onChange: handleSetRandomPassword
  })))), [t, setRandomPassword, handleSetRandomPassword]), useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Roles')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelectFiltered, {
    options: availableRoles,
    value: roles,
    onChange: handleRoles,
    placeholder: t('Select_role'),
    flexShrink: 1
  }))), [availableRoles, handleRoles, roles, t]), useMemo(() => handleJoinDefaultChannels && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, null, t('Join_default_channels')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: joinDefaultChannels,
    onChange: handleJoinDefaultChannels
  })))), [handleJoinDefaultChannels, t, joinDefaultChannels]), useMemo(() => handleSendWelcomeEmail && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Box, null, t('Send_welcome_email')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: sendWelcomeEmail,
    onChange: handleSendWelcomeEmail
  })))), [handleSendWelcomeEmail, t, sendWelcomeEmail]), hasCustomFields && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Custom_Fields'))), /*#__PURE__*/React.createElement(CustomFieldsForm, {
    onLoadFields: onLoadCustomFields,
    customFieldsData: customFields,
    setCustomFieldsData: handleCustomFields
  }), append));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/0562e21862b7710880110df33a9b3c7f6d3ef942.map

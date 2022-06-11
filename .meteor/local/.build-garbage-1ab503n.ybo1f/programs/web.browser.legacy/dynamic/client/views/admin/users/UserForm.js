function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserForm.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["formValues", "formHandlers", "availableRoles", "append", "prepend", "errors"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
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
module.export({
  "default": function () {
    return UserForm;
  }
});
var Field, TextInput, TextAreaInput, PasswordInput, MultiSelectFiltered, Box, ToggleSwitch, Icon, Divider, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  PasswordInput: function (v) {
    PasswordInput = v;
  },
  MultiSelectFiltered: function (v) {
    MultiSelectFiltered = v;
  },
  Box: function (v) {
    Box = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Divider: function (v) {
    Divider = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var React, useCallback, useMemo, useState;
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
  useState: function (v) {
    useState = v;
  }
}, 1);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 2);
var CustomFieldsForm;
module.link("../../../components/CustomFieldsForm", {
  "default": function (v) {
    CustomFieldsForm = v;
  }
}, 3);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

function UserForm(_ref) {
  var formValues = _ref.formValues,
      formHandlers = _ref.formHandlers,
      availableRoles = _ref.availableRoles,
      append = _ref.append,
      prepend = _ref.prepend,
      errors = _ref.errors,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasCustomFields = _useState2[0],
      setHasCustomFields = _useState2[1];

  var name = formValues.name,
      username = formValues.username,
      email = formValues.email,
      verified = formValues.verified,
      statusText = formValues.statusText,
      bio = formValues.bio,
      nickname = formValues.nickname,
      password = formValues.password,
      setRandomPassword = formValues.setRandomPassword,
      requirePasswordChange = formValues.requirePasswordChange,
      roles = formValues.roles,
      customFields = formValues.customFields,
      joinDefaultChannels = formValues.joinDefaultChannels,
      sendWelcomeEmail = formValues.sendWelcomeEmail;
  var handleName = formHandlers.handleName,
      handleUsername = formHandlers.handleUsername,
      handleEmail = formHandlers.handleEmail,
      handleVerified = formHandlers.handleVerified,
      handleStatusText = formHandlers.handleStatusText,
      handleBio = formHandlers.handleBio,
      handleNickname = formHandlers.handleNickname,
      handlePassword = formHandlers.handlePassword,
      handleSetRandomPassword = formHandlers.handleSetRandomPassword,
      handleRequirePasswordChange = formHandlers.handleRequirePasswordChange,
      handleRoles = formHandlers.handleRoles,
      handleCustomFields = formHandlers.handleCustomFields,
      handleJoinDefaultChannels = formHandlers.handleJoinDefaultChannels,
      handleSendWelcomeEmail = formHandlers.handleSendWelcomeEmail;
  var onLoadCustomFields = useCallback(function (hasCustomFields) {
    return setHasCustomFields(hasCustomFields);
  }, []);
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    is: "form",
    onSubmit: useCallback(function (e) {
      return e.preventDefault();
    }, [])
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, prepend, useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      error: errors && errors.name,
      flexGrow: 1,
      value: name,
      onChange: handleName
    })), errors && errors.name && /*#__PURE__*/React.createElement(Field.Error, null, errors.name));
  }, [t, name, handleName, errors]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      error: errors && errors.username,
      flexGrow: 1,
      value: username,
      onChange: handleUsername,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "at",
        size: "x20"
      })
    })), errors && errors.username && /*#__PURE__*/React.createElement(Field.Error, null, errors.username));
  }, [t, username, handleUsername, errors]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
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
    }))));
  }, [t, email, handleEmail, verified, handleVerified, errors]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('StatusMessage')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
      flexGrow: 1,
      value: statusText,
      onChange: handleStatusText,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "edit",
        size: "x20"
      })
    })));
  }, [t, statusText, handleStatusText]), useMemo(function () {
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
  }, [bio, handleBio, t]), useMemo(function () {
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
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Password')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PasswordInput, {
      errors: errors && errors.password,
      autoComplete: "off",
      flexGrow: 1,
      value: password,
      onChange: handlePassword,
      addon: /*#__PURE__*/React.createElement(Icon, {
        name: "key",
        size: "x20"
      })
    })), errors && errors.password && /*#__PURE__*/React.createElement(Field.Error, null, errors.password));
  }, [t, password, handlePassword, errors]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Box, null, t('Require_password_change')), /*#__PURE__*/React.createElement(ToggleSwitch, {
      disabled: setRandomPassword,
      checked: setRandomPassword || requirePasswordChange,
      onChange: handleRequirePasswordChange
    }))));
  }, [t, setRandomPassword, requirePasswordChange, handleRequirePasswordChange]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Box, null, t('Set_random_password_and_send_by_email')), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: setRandomPassword,
      onChange: handleSetRandomPassword
    }))));
  }, [t, setRandomPassword, handleSetRandomPassword]), useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Roles')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelectFiltered, {
      options: availableRoles,
      value: roles,
      onChange: handleRoles,
      placeholder: t('Select_role'),
      flexShrink: 1
    })));
  }, [availableRoles, handleRoles, roles, t]), useMemo(function () {
    return handleJoinDefaultChannels && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Box, null, t('Join_default_channels')), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: joinDefaultChannels,
      onChange: handleJoinDefaultChannels
    }))));
  }, [handleJoinDefaultChannels, t, joinDefaultChannels]), useMemo(function () {
    return handleSendWelcomeEmail && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }, /*#__PURE__*/React.createElement(Box, null, t('Send_welcome_email')), /*#__PURE__*/React.createElement(ToggleSwitch, {
      checked: sendWelcomeEmail,
      onChange: handleSendWelcomeEmail
    }))));
  }, [handleSendWelcomeEmail, t, sendWelcomeEmail]), hasCustomFields && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Custom_Fields'))), /*#__PURE__*/React.createElement(CustomFieldsForm, {
    onLoadFields: onLoadCustomFields,
    customFieldsData: customFields,
    setCustomFieldsData: handleCustomFields
  }), append));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/f7cc9c31ef96d32c42aca8b064ab1a2f5520975f.map

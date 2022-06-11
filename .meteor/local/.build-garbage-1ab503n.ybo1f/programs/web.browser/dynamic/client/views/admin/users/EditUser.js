function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/EditUser.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "roles", "onReload"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Box, Field, Margins, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  Margins(v) {
    Margins = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
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
let UserAvatarEditor;
module.link("../../../components/avatar/UserAvatarEditor", {
  default(v) {
    UserAvatarEditor = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 6);
let useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload(v) {
    useEndpointUpload = v;
  }

}, 7);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 8);
let UserForm;
module.link("./UserForm", {
  default(v) {
    UserForm = v;
  }

}, 9);

const getInitialValue = data => {
  var _data$name, _data$bio, _data$nickname, _data$customFields, _data$statusText;

  return {
    roles: data.roles,
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    password: '',
    username: data.username,
    status: data.status,
    bio: (_data$bio = data.bio) !== null && _data$bio !== void 0 ? _data$bio : '',
    nickname: (_data$nickname = data.nickname) !== null && _data$nickname !== void 0 ? _data$nickname : '',
    email: data.emails && data.emails.length && data.emails[0].address || '',
    verified: data.emails && data.emails.length && data.emails[0].verified || false,
    setRandomPassword: false,
    requirePasswordChange: data.setRandomPassword || false,
    customFields: (_data$customFields = data.customFields) !== null && _data$customFields !== void 0 ? _data$customFields : {},
    statusText: (_data$statusText = data.statusText) !== null && _data$statusText !== void 0 ? _data$statusText : ''
  };
};

function EditUser(_ref) {
  let {
    data,
    roles,
    onReload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [avatarObj, setAvatarObj] = useState();
  const [errors, setErrors] = useState({});
  const validationKeys = {
    name: name => setErrors(errors => _objectSpread(_objectSpread({}, errors), {}, {
      name: !name.trim().length ? t('The_field_is_required', t('name')) : undefined
    })),
    username: username => setErrors(errors => _objectSpread(_objectSpread({}, errors), {}, {
      username: !username.trim().length ? t('The_field_is_required', t('username')) : undefined
    })),
    email: email => setErrors(errors => _objectSpread(_objectSpread({}, errors), {}, {
      email: !email.trim().length ? t('The_field_is_required', t('email')) : undefined
    }))
  };

  const validateForm = _ref2 => {
    let {
      key,
      value
    } = _ref2;
    validationKeys[key] && validationKeys[key](value);
  };

  const {
    values,
    handlers,
    reset,
    hasUnsavedChanges
  } = useForm(getInitialValue(data), validateForm);
  const router = useRoute('admin-users');
  const goToUser = useCallback(id => router.push({
    context: 'info',
    id
  }), [router]);
  const saveQuery = useMemo(() => ({
    userId: data._id,
    data: values
  }), [data._id, values]);
  const saveAvatarQuery = useMemo(() => ({
    userId: data._id,
    avatarUrl: avatarObj && avatarObj.avatarUrl
  }), [data._id, avatarObj]);
  const resetAvatarQuery = useMemo(() => ({
    userId: data._id
  }), [data._id]);
  const saveAction = useEndpointAction('POST', 'users.update', saveQuery, t('User_updated_successfully'));
  const saveAvatarAction = useEndpointUpload('users.setAvatar', saveAvatarQuery, t('Avatar_changed_successfully'));
  const saveAvatarUrlAction = useEndpointAction('POST', 'users.setAvatar', saveAvatarQuery, t('Avatar_changed_successfully'));
  const resetAvatarAction = useEndpointAction('POST', 'users.resetAvatar', resetAvatarQuery, t('Avatar_changed_successfully'));
  const updateAvatar = useCallback(async () => {
    if (avatarObj === 'reset') {
      return resetAvatarAction();
    }

    if (avatarObj.avatarUrl) {
      return saveAvatarUrlAction();
    }

    avatarObj.set('userId', data._id);
    return saveAvatarAction(avatarObj);
  }, [avatarObj, resetAvatarAction, saveAvatarAction, saveAvatarUrlAction, data._id]);
  const handleSave = useMutableCallback(async () => {
    Object.entries(values).forEach(_ref3 => {
      let [key, value] = _ref3;
      validationKeys[key] && validationKeys[key](value);
    });
    const {
      name,
      username,
      email
    } = values;

    if (name === '' || username === '' || email === '') {
      return false;
    }

    if (hasUnsavedChanges) {
      const result = await saveAction();

      if (result.success && avatarObj) {
        await updateAvatar();
      }
    } else {
      await updateAvatar();
    }

    onReload();
    goToUser(data._id);
  }, [hasUnsavedChanges, avatarObj, data._id, goToUser, saveAction, updateAvatar, values, errors, validationKeys]);
  const availableRoles = roles.map(_ref4 => {
    let {
      _id,
      name,
      description
    } = _ref4;
    return [_id, description || name];
  });
  const canSaveOrReset = hasUnsavedChanges || avatarObj;
  const prepend = useMemo(() => /*#__PURE__*/React.createElement(UserAvatarEditor, {
    currentUsername: data.username,
    username: values.username,
    etag: data.avatarETag,
    setAvatarObj: setAvatarObj
  }), [data.username, data.avatarETag, values.username]);
  const append = useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    type: "reset",
    disabled: !canSaveOrReset,
    onClick: reset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    mie: "none",
    flexGrow: 1,
    disabled: !canSaveOrReset,
    onClick: handleSave
  }, t('Save')))))), [handleSave, canSaveOrReset, reset, t]);
  return /*#__PURE__*/React.createElement(UserForm, _extends({
    errors: errors,
    formValues: values,
    formHandlers: handlers,
    availableRoles: availableRoles,
    prepend: prepend,
    append: append
  }, props));
}

module.exportDefault(EditUser);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/e5fc9eaefda067253a7b7f8d32d0b0abc30d87e0.map

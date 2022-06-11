function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/AddUser.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["roles", "onReload"];

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
module.export({
  AddUser: () => AddUser
});
let Field, Box, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Box(v) {
    Box = v;
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
let React, useMemo, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 5);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 7);
let UserForm;
module.link("./UserForm", {
  default(v) {
    UserForm = v;
  }

}, 8);

function AddUser(_ref) {
  let {
    roles,
    onReload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const router = useRoute('admin-users');
  const {
    value: roleData
  } = useEndpointData('roles.list', '');
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
    })),
    password: (password, values) => setErrors(errors => _objectSpread(_objectSpread({}, errors), {}, {
      password: !password.trim().length && !values.setRandomPassword ? t('The_field_is_required', t('password')) : undefined
    })),
    setRandomPassword: (setRandomPassword, values) => setErrors(errors => _objectSpread(_objectSpread({}, errors), {}, {
      password: !values.password.trim().length && !setRandomPassword ? t('The_field_is_required', t('password')) : undefined
    }))
  };

  const validateForm = _ref2 => {
    let {
      key,
      value,
      values
    } = _ref2;
    validationKeys[key] && validationKeys[key](value, values);
  };

  const {
    values,
    handlers,
    reset,
    hasUnsavedChanges
  } = useForm({
    roles: [],
    name: '',
    username: '',
    statusText: '',
    bio: '',
    nickname: '',
    email: '',
    password: '',
    verified: false,
    requirePasswordChange: false,
    setRandomPassword: false,
    sendWelcomeEmail: true,
    joinDefaultChannels: true,
    customFields: {}
  }, validateForm);
  const goToUser = useCallback(id => router.push({
    context: 'info',
    id
  }), [router]);
  const saveAction = useEndpointAction('POST', 'users.create', values, t('User_created_successfully!'));
  const handleSave = useMutableCallback(async () => {
    Object.entries(values).forEach(_ref3 => {
      let [key, value] = _ref3;
      validateForm({
        key,
        value,
        values
      });
    });
    const {
      name,
      username,
      password,
      email,
      setRandomPassword
    } = values;

    if (name === '' || username === '' || email === '') {
      return false;
    }

    if (password === '' && setRandomPassword === false) {
      return false;
    }

    const result = await saveAction();

    if (result.success) {
      goToUser(result.user._id);
      onReload();
    }
  });
  const availableRoles = useMemo(() => {
    var _roleData$roles$map, _roleData$roles;

    return (_roleData$roles$map = roleData === null || roleData === void 0 ? void 0 : (_roleData$roles = roleData.roles) === null || _roleData$roles === void 0 ? void 0 : _roleData$roles.map(_ref4 => {
      let {
        _id,
        description
      } = _ref4;
      return [_id, description || _id];
    })) !== null && _roleData$roles$map !== void 0 ? _roleData$roles$map : [];
  }, [roleData]);
  const append = useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    disabled: !hasUnsavedChanges,
    onClick: reset,
    mie: "x4"
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    disabled: !hasUnsavedChanges,
    onClick: handleSave
  }, t('Save'))))), [hasUnsavedChanges, reset, t, handleSave]);
  return /*#__PURE__*/React.createElement(UserForm, _extends({
    errors: errors,
    formValues: values,
    formHandlers: handlers,
    availableRoles: availableRoles,
    append: append
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/224204daae39389d4ae93087e72cce594f8a4f7e.map

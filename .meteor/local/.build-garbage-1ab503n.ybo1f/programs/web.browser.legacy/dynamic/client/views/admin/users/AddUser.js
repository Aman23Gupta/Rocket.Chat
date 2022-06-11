function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/AddUser.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["roles", "onReload"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 4);
module.export({
  AddUser: function () {
    return AddUser;
  }
});
var Field, Box, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 5);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 7);
var UserForm;
module.link("./UserForm", {
  "default": function (v) {
    UserForm = v;
  }
}, 8);

function AddUser(_ref) {
  var roles = _ref.roles,
      onReload = _ref.onReload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var router = useRoute('admin-users');

  var _useEndpointData = useEndpointData('roles.list', ''),
      roleData = _useEndpointData.value;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var validationKeys = {
    name: function (name) {
      return setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, {
          name: !name.trim().length ? t('The_field_is_required', t('name')) : undefined
        });
      });
    },
    username: function (username) {
      return setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, {
          username: !username.trim().length ? t('The_field_is_required', t('username')) : undefined
        });
      });
    },
    email: function (email) {
      return setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, {
          email: !email.trim().length ? t('The_field_is_required', t('email')) : undefined
        });
      });
    },
    password: function (password, values) {
      return setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, {
          password: !password.trim().length && !values.setRandomPassword ? t('The_field_is_required', t('password')) : undefined
        });
      });
    },
    setRandomPassword: function (setRandomPassword, values) {
      return setErrors(function (errors) {
        return _objectSpread(_objectSpread({}, errors), {}, {
          password: !values.password.trim().length && !setRandomPassword ? t('The_field_is_required', t('password')) : undefined
        });
      });
    }
  };

  var validateForm = function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value,
        values = _ref2.values;
    validationKeys[key] && validationKeys[key](value, values);
  };

  var _useForm = useForm({
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
  }, validateForm),
      values = _useForm.values,
      handlers = _useForm.handlers,
      reset = _useForm.reset,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var goToUser = useCallback(function (id) {
    return router.push({
      context: 'info',
      id: id
    });
  }, [router]);
  var saveAction = useEndpointAction('POST', 'users.create', values, t('User_created_successfully!'));
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var name, username, password, email, setRandomPassword, result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object.entries(values).forEach(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  validateForm({
                    key: key,
                    value: value,
                    values: values
                  });
                });
                name = values.name, username = values.username, password = values.password, email = values.email, setRandomPassword = values.setRandomPassword;

                if (!(name === '' || username === '' || email === '')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                if (!(password === '' && setRandomPassword === false)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", false);

              case 6:
                _context.next = 8;
                return _regeneratorRuntime.awrap(saveAction());

              case 8:
                result = _context.sent;

                if (result.success) {
                  goToUser(result.user._id);
                  onReload();
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
  var availableRoles = useMemo(function () {
    var _roleData$roles$map, _roleData$roles;

    return (_roleData$roles$map = roleData === null || roleData === void 0 ? void 0 : (_roleData$roles = roleData.roles) === null || _roleData$roles === void 0 ? void 0 : _roleData$roles.map(function (_ref5) {
      var _id = _ref5._id,
          description = _ref5.description;
      return [_id, description || _id];
    })) !== null && _roleData$roles$map !== void 0 ? _roleData$roles$map : [];
  }, [roleData]);
  var append = useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
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
    }, t('Save')))));
  }, [hasUnsavedChanges, reset, t, handleSave]);
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
//# sourceMappingURL=/dynamic/client/views/admin/users/3c33b06ef50c98be0ad0765ac79989746c35f6b9.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/EditUser.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "roles", "onReload"];

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
var Box, Field, Margins, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  Margins: function (v) {
    Margins = v;
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
var React, useMemo, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var UserAvatarEditor;
module.link("../../../components/avatar/UserAvatarEditor", {
  "default": function (v) {
    UserAvatarEditor = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 6);
var useEndpointUpload;
module.link("../../../hooks/useEndpointUpload", {
  useEndpointUpload: function (v) {
    useEndpointUpload = v;
  }
}, 7);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);
var UserForm;
module.link("./UserForm", {
  "default": function (v) {
    UserForm = v;
  }
}, 9);

var getInitialValue = function (data) {
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
  var data = _ref.data,
      roles = _ref.roles,
      onReload = _ref.onReload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      avatarObj = _useState2[0],
      setAvatarObj = _useState2[1];

  var _useState3 = useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

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
    }
  };

  var validateForm = function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value;
    validationKeys[key] && validationKeys[key](value);
  };

  var _useForm = useForm(getInitialValue(data), validateForm),
      values = _useForm.values,
      handlers = _useForm.handlers,
      reset = _useForm.reset,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var router = useRoute('admin-users');
  var goToUser = useCallback(function (id) {
    return router.push({
      context: 'info',
      id: id
    });
  }, [router]);
  var saveQuery = useMemo(function () {
    return {
      userId: data._id,
      data: values
    };
  }, [data._id, values]);
  var saveAvatarQuery = useMemo(function () {
    return {
      userId: data._id,
      avatarUrl: avatarObj && avatarObj.avatarUrl
    };
  }, [data._id, avatarObj]);
  var resetAvatarQuery = useMemo(function () {
    return {
      userId: data._id
    };
  }, [data._id]);
  var saveAction = useEndpointAction('POST', 'users.update', saveQuery, t('User_updated_successfully'));
  var saveAvatarAction = useEndpointUpload('users.setAvatar', saveAvatarQuery, t('Avatar_changed_successfully'));
  var saveAvatarUrlAction = useEndpointAction('POST', 'users.setAvatar', saveAvatarQuery, t('Avatar_changed_successfully'));
  var resetAvatarAction = useEndpointAction('POST', 'users.resetAvatar', resetAvatarQuery, t('Avatar_changed_successfully'));
  var updateAvatar = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(avatarObj === 'reset')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", resetAvatarAction());

              case 2:
                if (!avatarObj.avatarUrl) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", saveAvatarUrlAction());

              case 4:
                avatarObj.set('userId', data._id);
                return _context.abrupt("return", saveAvatarAction(avatarObj));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [avatarObj, resetAvatarAction, saveAvatarAction, saveAvatarUrlAction, data._id]);
  var handleSave = useMutableCallback(function () {
    function _callee2() {
      var name, username, email, result;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Object.entries(values).forEach(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      key = _ref4[0],
                      value = _ref4[1];

                  validationKeys[key] && validationKeys[key](value);
                });
                name = values.name, username = values.username, email = values.email;

                if (!(name === '' || username === '' || email === '')) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", false);

              case 4:
                if (!hasUnsavedChanges) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 7;
                return _regeneratorRuntime.awrap(saveAction());

              case 7:
                result = _context2.sent;

                if (!(result.success && avatarObj)) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 11;
                return _regeneratorRuntime.awrap(updateAvatar());

              case 11:
                _context2.next = 15;
                break;

              case 13:
                _context2.next = 15;
                return _regeneratorRuntime.awrap(updateAvatar());

              case 15:
                onReload();
                goToUser(data._id);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [hasUnsavedChanges, avatarObj, data._id, goToUser, saveAction, updateAvatar, values, errors, validationKeys]);
  var availableRoles = roles.map(function (_ref5) {
    var _id = _ref5._id,
        name = _ref5.name,
        description = _ref5.description;
    return [_id, description || name];
  });
  var canSaveOrReset = hasUnsavedChanges || avatarObj;
  var prepend = useMemo(function () {
    return /*#__PURE__*/React.createElement(UserAvatarEditor, {
      currentUsername: data.username,
      username: values.username,
      etag: data.avatarETag,
      setAvatarObj: setAvatarObj
    });
  }, [data.username, data.avatarETag, values.username]);
  var append = useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
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
    }, t('Save'))))));
  }, [handleSave, canSaveOrReset, reset, t]);
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
//# sourceMappingURL=/dynamic/client/views/admin/users/1762b33c8211fe59c27b629035df3cd015d23912.map

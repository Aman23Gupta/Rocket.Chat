function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/EditOauthApp.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange", "data"];

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
var Button, ButtonGroup, TextInput, Field, Icon, TextAreaInput, ToggleSwitch, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var React, useCallback, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod, useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);

function EditOauthApp(_ref) {
  var onChange = _ref.onChange,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState({
    name: data.name,
    active: data.active,
    redirectUri: Array.isArray(data.redirectUri) ? data.redirectUri.join('\n') : data.redirectUri
  }),
      _useState2 = _slicedToArray(_useState, 2),
      newData = _useState2[0],
      setNewData = _useState2[1];

  var setModal = useSetModal();
  var router = useRoute('admin-oauth-apps');
  var close = useCallback(function () {
    return router.push({});
  }, [router]);
  var absoluteUrl = useAbsoluteUrl();
  var authUrl = useMemo(function () {
    return absoluteUrl('oauth/authorize');
  }, [absoluteUrl]);
  var tokenUrl = useMemo(function () {
    return absoluteUrl('oauth/token');
  }, [absoluteUrl]);
  var saveApp = useMethod('updateOAuthApp');
  var deleteApp = useMethod('deleteOAuthApp');
  var handleSave = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveApp(data._id, newData));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Application_updated')
                });
                onChange();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee;
  }(), [data._id, dispatchToastMessage, newData, onChange, saveApp, t]);
  var onDeleteConfirm = useCallback(function () {
    function _callee2() {
      var handleClose;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(deleteApp(data._id));

              case 3:
                handleClose = function () {
                  setModal();
                  close();
                };

                setModal(function () {
                  return /*#__PURE__*/React.createElement(GenericModal, {
                    variant: "success",
                    onClose: handleClose,
                    onConfirm: handleClose
                  }, t('Your_entry_has_been_deleted'));
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee2;
  }(), [close, data._id, deleteApp, dispatchToastMessage, setModal, t]);

  var openConfirmDelete = function () {
    return setModal(function () {
      return /*#__PURE__*/React.createElement(GenericModal, {
        variant: "danger",
        onConfirm: onDeleteConfirm,
        onCancel: function () {
          return setModal(undefined);
        },
        confirmText: t('Delete')
      }, t('Application_delete_warning'));
    });
  };

  var handleChange = function (field) {
    var getValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (e) {
      return e.currentTarget.value;
    };
    return function (e) {
      var _objectSpread2;

      return setNewData(_objectSpread(_objectSpread({}, newData), {}, (_objectSpread2 = {}, _objectSpread2[field] = getValue(e), _objectSpread2)));
    };
  };

  var active = newData.active,
      name = newData.name,
      redirectUri = newData.redirectUri;
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    w: "full"
  }, props), /*#__PURE__*/React.createElement(FieldGroup, {
    maxWidth: "x600",
    alignSelf: "center",
    w: "full"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    display: "flex",
    justifyContent: "space-between",
    w: "full"
  }, t('Active'), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: active,
    onChange: handleChange('active', function () {
      return !active;
    })
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Application_Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: handleChange('name')
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Give_the_application_a_name_This_will_be_seen_by_your_users'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Redirect_URI')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 5,
    value: redirectUri,
    onChange: handleChange('redirectUri')
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('After_OAuth2_authentication_users_will_be_redirected_to_this_URL'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Client_ID')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: data.clientId,
    onChange: handleChange('clientId')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Client_Secret')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: data.clientSecret
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Authorization_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: authUrl
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Access_Token_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: tokenUrl
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave
  }, t('Save'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: openConfirmDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    mie: "x4"
  }), t('Delete')))))));
}

module.exportDefault(EditOauthApp);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/c56bf1b0868e9a5c33d5724bafeeebd38959d65e.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAddApp.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
module.export({
  "default": function () {
    return OAuthAddApp;
  }
});
var Button, ButtonGroup, TextInput, Field, TextAreaInput, ToggleSwitch, FieldGroup;
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
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);

function OAuthAddApp(props) {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState({
    name: '',
    active: false,
    redirectUri: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      newData = _useState2[0],
      setNewData = _useState2[1];

  var saveApp = useMethod('addOAuthApp');
  var router = useRoute('admin-oauth-apps');
  var close = useCallback(function () {
    return router.push({});
  }, [router]);
  var handleSave = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveApp(newData));

              case 3:
                close();
                dispatchToastMessage({
                  type: 'success',
                  message: t('Application_added')
                });
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
  }(), [close, dispatchToastMessage, newData, saveApp, t]);

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
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('After_OAuth2_authentication_users_will_be_redirected_to_this_URL'))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave
  }, t('Save')))))));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/0650bf4548d3d8376308da2b8398340f3359ad83.map

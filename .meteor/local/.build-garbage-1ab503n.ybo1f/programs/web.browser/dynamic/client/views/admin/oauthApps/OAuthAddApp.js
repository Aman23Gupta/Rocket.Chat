function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAddApp.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
module.export({
  default: () => OAuthAddApp
});
let Button, ButtonGroup, TextInput, Field, TextAreaInput, ToggleSwitch, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let React, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);

function OAuthAddApp(props) {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [newData, setNewData] = useState({
    name: '',
    active: false,
    redirectUri: ''
  });
  const saveApp = useMethod('addOAuthApp');
  const router = useRoute('admin-oauth-apps');
  const close = useCallback(() => router.push({}), [router]);
  const handleSave = useCallback(async () => {
    try {
      await saveApp(newData);
      close();
      dispatchToastMessage({
        type: 'success',
        message: t('Application_added')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [close, dispatchToastMessage, newData, saveApp, t]);

  const handleChange = function (field) {
    let getValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e => e.currentTarget.value;
    return e => setNewData(_objectSpread(_objectSpread({}, newData), {}, {
      [field]: getValue(e)
    }));
  };

  const {
    active,
    name,
    redirectUri
  } = newData;
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
    onChange: handleChange('active', () => !active)
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
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/88c3e5d7d0f55815d74868d20357076c25e9235b.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/EditOauthApp.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange", "data"];

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
let Button, ButtonGroup, TextInput, Field, Icon, TextAreaInput, ToggleSwitch, FieldGroup;
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

  Icon(v) {
    Icon = v;
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
let React, useCallback, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod, useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);

function EditOauthApp(_ref) {
  let {
    onChange,
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [newData, setNewData] = useState({
    name: data.name,
    active: data.active,
    redirectUri: Array.isArray(data.redirectUri) ? data.redirectUri.join('\n') : data.redirectUri
  });
  const setModal = useSetModal();
  const router = useRoute('admin-oauth-apps');
  const close = useCallback(() => router.push({}), [router]);
  const absoluteUrl = useAbsoluteUrl();
  const authUrl = useMemo(() => absoluteUrl('oauth/authorize'), [absoluteUrl]);
  const tokenUrl = useMemo(() => absoluteUrl('oauth/token'), [absoluteUrl]);
  const saveApp = useMethod('updateOAuthApp');
  const deleteApp = useMethod('deleteOAuthApp');
  const handleSave = useCallback(async () => {
    try {
      await saveApp(data._id, newData);
      dispatchToastMessage({
        type: 'success',
        message: t('Application_updated')
      });
      onChange();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [data._id, dispatchToastMessage, newData, onChange, saveApp, t]);
  const onDeleteConfirm = useCallback(async () => {
    try {
      await deleteApp(data._id);

      const handleClose = () => {
        setModal();
        close();
      };

      setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
        variant: "success",
        onClose: handleClose,
        onConfirm: handleClose
      }, t('Your_entry_has_been_deleted')));
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [close, data._id, deleteApp, dispatchToastMessage, setModal, t]);

  const openConfirmDelete = () => setModal(() => /*#__PURE__*/React.createElement(GenericModal, {
    variant: "danger",
    onConfirm: onDeleteConfirm,
    onCancel: () => setModal(undefined),
    confirmText: t('Delete')
  }, t('Application_delete_warning')));

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
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/4c0ae445a4f855c8a816f3b3ce0c1a97be06b0b7.map

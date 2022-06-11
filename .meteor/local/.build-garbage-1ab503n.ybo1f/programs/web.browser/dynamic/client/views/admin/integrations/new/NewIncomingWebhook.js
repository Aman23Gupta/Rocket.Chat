function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewIncomingWebhook.js                                                           //
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
  default: () => NewIncomingWebhook
});
let Field, Box, Margins, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 4);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);
let IncomingWebhookForm;
module.link("../IncomingWebhookForm", {
  default(v) {
    IncomingWebhookForm = v;
  }

}, 6);
const initialState = {
  enabled: false,
  channel: '',
  username: '',
  name: '',
  alias: '',
  avatarUrl: '',
  emoji: '',
  scriptEnabled: false,
  script: ''
};

function NewIncomingWebhook(props) {
  const t = useTranslation();
  const router = useRoute('admin-integrations');
  const {
    values: formValues,
    handlers: formHandlers,
    reset
  } = useForm(initialState);
  const params = useMemo(() => _objectSpread(_objectSpread({}, formValues), {}, {
    type: 'webhook-incoming'
  }), [formValues]);
  const saveAction = useEndpointAction('POST', 'integrations.create', params, t('Integration_added'));
  const handleSave = useCallback(async () => {
    const result = await saveAction();

    if (result.success) {
      router.push({
        context: 'edit',
        type: 'incoming',
        id: result.integration._id
      });
    }
  }, [router, saveAction]);
  const actionButtons = useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    type: "reset",
    onClick: reset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    mie: "none",
    flexGrow: 1,
    onClick: handleSave
  }, t('Save')))))), [handleSave, reset, t]);
  return /*#__PURE__*/React.createElement(IncomingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: actionButtons
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/31e38a962a95dec8cb7c793079cd393a26c32810.map

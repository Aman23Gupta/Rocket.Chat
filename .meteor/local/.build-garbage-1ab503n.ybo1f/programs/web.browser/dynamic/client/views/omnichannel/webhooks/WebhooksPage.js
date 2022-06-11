function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/webhooks/WebhooksPage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, FieldGroup, Field, TextInput, MultiSelect, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let ExternalLink;
module.link("../../../components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 8);

const reduceSendOptions = options => Object.entries(options).reduce((acc, _ref) => {
  let [key, val] = _ref;

  if (val) {
    acc = [...acc, key];
  }

  return acc;
}, []);

const integrationsUrl = 'https://docs.rocket.chat/guides/omnichannel/webhooks-managers-guide';

const getInitialValues = _ref2 => {
  let {
    Livechat_webhookUrl,
    Livechat_secret_token,
    Livechat_webhook_on_start,
    Livechat_webhook_on_close,
    Livechat_webhook_on_chat_taken,
    Livechat_webhook_on_chat_queued,
    Livechat_webhook_on_forward,
    Livechat_webhook_on_offline_msg,
    Livechat_webhook_on_visitor_message,
    Livechat_webhook_on_agent_message
  } = _ref2;
  const sendOptions = {
    Livechat_webhook_on_start,
    Livechat_webhook_on_close,
    Livechat_webhook_on_chat_taken,
    Livechat_webhook_on_chat_queued,
    Livechat_webhook_on_forward,
    Livechat_webhook_on_offline_msg,
    Livechat_webhook_on_visitor_message,
    Livechat_webhook_on_agent_message
  };
  const mappedSendOptions = reduceSendOptions(sendOptions);
  return {
    Livechat_webhookUrl,
    Livechat_secret_token,
    sendOn: mappedSendOptions
  };
};

const WebhooksPage = _ref3 => {
  let {
    settings
  } = _ref3;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    values,
    handlers,
    hasUnsavedChanges,
    reset,
    commit
  } = useForm(getInitialValues(settings));
  const save = useMethod('livechat:saveIntegration');
  const test = useMethod('livechat:webhookTest');
  const {
    Livechat_webhookUrl,
    Livechat_secret_token,
    sendOn
  } = values;
  const {
    handleLivechat_webhookUrl,
    handleLivechat_secret_token,
    handleSendOn
  } = handlers;
  const sendOptions = useMemo(() => [['Livechat_webhook_on_start', t('Chat_start')], ['Livechat_webhook_on_close', t('Chat_close')], ['Livechat_webhook_on_chat_taken', t('Chat_taken')], ['Livechat_webhook_on_chat_queued', t('Chat_queued')], ['Livechat_webhook_on_forward', t('Forwarding')], ['Livechat_webhook_on_offline_msg', t('Offline_messages')], ['Livechat_webhook_on_visitor_message', t('Visitor_message')], ['Livechat_webhook_on_agent_message', t('Agent_messages')]], [t]);
  const handleSave = useMutableCallback(async () => {
    const sendOnObj = sendOptions.reduce((acc, _ref4) => {
      let [key] = _ref4;
      acc = _objectSpread(_objectSpread({}, acc), {}, {
        [key]: sendOn.includes(key) ? 1 : 0
      });
      return acc;
    }, {});

    try {
      await save(_objectSpread({
        Livechat_webhookUrl,
        Livechat_secret_token
      }, sendOnObj));
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      commit();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleTest = useMutableCallback(async () => {
    try {
      await test();
      dispatchToastMessage({
        type: 'success',
        message: t('It_works')
      });
      commit();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Webhooks')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => reset()
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleTest,
    disabled: !Livechat_webhookUrl || hasUnsavedChanges
  }, t('Send_Test')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement("p", null, t('You_can_use_webhooks_to_easily_integrate_livechat_with_your_CRM')), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(ExternalLink, {
    to: integrationsUrl
  }, t('Click_here')), " ", t('to_see_more_details_on_how_to_integrate')), /*#__PURE__*/React.createElement(FieldGroup, {
    style: {
      marginTop: '1.5rem'
    }
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Webhook_URL')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: Livechat_webhookUrl,
    onChange: handleLivechat_webhookUrl,
    placeholder: "https://yourdomain.com/webhook/entrypoint"
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Secret_token')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: Livechat_secret_token,
    onChange: handleLivechat_secret_token,
    placeholder: t('Secret_token')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Send_request_on')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    w: "full",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch"
  }, /*#__PURE__*/React.createElement(MultiSelect, {
    w: "full",
    value: sendOn,
    onChange: handleSendOn,
    options: sendOptions,
    placeholder: t('Select_an_option')
  }))))))));
};

module.exportDefault(WebhooksPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/webhooks/9a0a7775e62768b7b658c1b4d952b655d65151af.map

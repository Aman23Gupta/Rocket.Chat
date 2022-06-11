function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/webhooks/WebhooksPage.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var Box, FieldGroup, Field, TextInput, MultiSelect, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var ExternalLink;
module.link("../../../components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);

var reduceSendOptions = function (options) {
  return Object.entries(options).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    if (val) {
      acc = [].concat(_toConsumableArray(acc), [key]);
    }

    return acc;
  }, []);
};

var integrationsUrl = 'https://docs.rocket.chat/guides/omnichannel/webhooks-managers-guide';

var getInitialValues = function (_ref3) {
  var Livechat_webhookUrl = _ref3.Livechat_webhookUrl,
      Livechat_secret_token = _ref3.Livechat_secret_token,
      Livechat_webhook_on_start = _ref3.Livechat_webhook_on_start,
      Livechat_webhook_on_close = _ref3.Livechat_webhook_on_close,
      Livechat_webhook_on_chat_taken = _ref3.Livechat_webhook_on_chat_taken,
      Livechat_webhook_on_chat_queued = _ref3.Livechat_webhook_on_chat_queued,
      Livechat_webhook_on_forward = _ref3.Livechat_webhook_on_forward,
      Livechat_webhook_on_offline_msg = _ref3.Livechat_webhook_on_offline_msg,
      Livechat_webhook_on_visitor_message = _ref3.Livechat_webhook_on_visitor_message,
      Livechat_webhook_on_agent_message = _ref3.Livechat_webhook_on_agent_message;
  var sendOptions = {
    Livechat_webhook_on_start: Livechat_webhook_on_start,
    Livechat_webhook_on_close: Livechat_webhook_on_close,
    Livechat_webhook_on_chat_taken: Livechat_webhook_on_chat_taken,
    Livechat_webhook_on_chat_queued: Livechat_webhook_on_chat_queued,
    Livechat_webhook_on_forward: Livechat_webhook_on_forward,
    Livechat_webhook_on_offline_msg: Livechat_webhook_on_offline_msg,
    Livechat_webhook_on_visitor_message: Livechat_webhook_on_visitor_message,
    Livechat_webhook_on_agent_message: Livechat_webhook_on_agent_message
  };
  var mappedSendOptions = reduceSendOptions(sendOptions);
  return {
    Livechat_webhookUrl: Livechat_webhookUrl,
    Livechat_secret_token: Livechat_secret_token,
    sendOn: mappedSendOptions
  };
};

var WebhooksPage = function (_ref4) {
  var settings = _ref4.settings;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useForm = useForm(getInitialValues(settings)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      reset = _useForm.reset,
      commit = _useForm.commit;

  var save = useMethod('livechat:saveIntegration');
  var test = useMethod('livechat:webhookTest');
  var Livechat_webhookUrl = values.Livechat_webhookUrl,
      Livechat_secret_token = values.Livechat_secret_token,
      sendOn = values.sendOn;
  var handleLivechat_webhookUrl = handlers.handleLivechat_webhookUrl,
      handleLivechat_secret_token = handlers.handleLivechat_secret_token,
      handleSendOn = handlers.handleSendOn;
  var sendOptions = useMemo(function () {
    return [['Livechat_webhook_on_start', t('Chat_start')], ['Livechat_webhook_on_close', t('Chat_close')], ['Livechat_webhook_on_chat_taken', t('Chat_taken')], ['Livechat_webhook_on_chat_queued', t('Chat_queued')], ['Livechat_webhook_on_forward', t('Forwarding')], ['Livechat_webhook_on_offline_msg', t('Offline_messages')], ['Livechat_webhook_on_visitor_message', t('Visitor_message')], ['Livechat_webhook_on_agent_message', t('Agent_messages')]];
  }, [t]);
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var sendOnObj;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sendOnObj = sendOptions.reduce(function (acc, _ref5) {
                  var _objectSpread2;

                  var _ref6 = _slicedToArray(_ref5, 1),
                      key = _ref6[0];

                  acc = _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, _objectSpread2[key] = sendOn.includes(key) ? 1 : 0, _objectSpread2));
                  return acc;
                }, {});
                _context.prev = 1;
                _context.next = 4;
                return _regeneratorRuntime.awrap(save(_objectSpread({
                  Livechat_webhookUrl: Livechat_webhookUrl,
                  Livechat_secret_token: Livechat_secret_token
                }, sendOnObj)));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                commit();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 8]], Promise);
    }

    return _callee;
  }());
  var handleTest = useMutableCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(test());

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('It_works')
                });
                commit();
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
  }());
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Webhooks')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function () {
      return reset();
    }
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/webhooks/4783a09a9df2b2b28a46f77d4f4dbb08f679c168.map

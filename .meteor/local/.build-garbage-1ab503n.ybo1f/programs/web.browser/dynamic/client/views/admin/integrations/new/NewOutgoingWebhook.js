function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewOutgoingWebhook.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "onChange", "setSaveAction"];

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
  default: () => NewOutgoingWebhook
});
let Field, Button;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 5);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
let OutgoingWebhookForm;
module.link("../OutgoiongWebhookForm", {
  default(v) {
    OutgoingWebhookForm = v;
  }

}, 7);
let triggerWordsToArray;
module.link("../helpers/triggerWords", {
  triggerWordsToArray(v) {
    triggerWordsToArray = v;
  }

}, 8);
const defaultData = {
  type: 'webhook-outgoing',
  enabled: true,
  impersonateUser: false,
  event: 'sendMessage',
  urls: '',
  triggerWords: '',
  targetRoom: '',
  channel: '',
  username: '',
  name: '',
  alias: '',
  avatar: '',
  emoji: '',
  scriptEnabled: false,
  script: '',
  retryFailedCalls: true,
  retryCount: 6,
  retryDelay: 'powers-of-ten',
  triggerWordAnywhere: false,
  runOnEdits: true
};

function NewOutgoingWebhook(_ref) {
  let {
    data = defaultData,
    onChange,
    setSaveAction
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const router = useRoute('admin-integrations');
  const {
    values: formValues,
    handlers: formHandlers
  } = useForm(_objectSpread(_objectSpread({}, data), {}, {
    token: useUniqueId()
  }));
  const {
    urls,
    triggerWords
  } = formValues;
  const params = useMemo(() => _objectSpread(_objectSpread({}, formValues), {}, {
    urls: urls.split('\n'),
    triggerWords: triggerWordsToArray(triggerWords)
  }), [formValues, triggerWords, urls]);
  const saveIntegration = useEndpointAction('POST', 'integrations.create', params, t('Integration_added'));
  const handleSave = useCallback(async () => {
    const result = await saveIntegration();

    if (result.success) {
      router.push({
        id: result.integration._id,
        context: 'edit',
        type: 'outgoing'
      });
    }
  }, [saveIntegration, router]);
  const saveButton = useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
    w: "full",
    mie: "none",
    flexGrow: 1,
    onClick: handleSave
  }, t('Save')))), [handleSave, t]);
  return /*#__PURE__*/React.createElement(OutgoingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: saveButton
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/5a29ccf0c1f25e413e50f72d4dfb4004da7d22a6.map

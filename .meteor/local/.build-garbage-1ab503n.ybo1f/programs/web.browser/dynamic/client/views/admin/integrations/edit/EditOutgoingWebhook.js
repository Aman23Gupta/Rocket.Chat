function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditOutgoingWebhook.js                                                         //
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

}, 1);
let GenericModal;
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 8);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 9);
let OutgoingWebhookForm;
module.link("../OutgoiongWebhookForm", {
  default(v) {
    OutgoingWebhookForm = v;
  }

}, 10);
let triggerWordsToArray, triggerWordsToString;
module.link("../helpers/triggerWords", {
  triggerWordsToArray(v) {
    triggerWordsToArray = v;
  },

  triggerWordsToString(v) {
    triggerWordsToString = v;
  }

}, 11);

const getInitialValue = data => {
  var _data$enabled, _data$urls$join, _data$targetRoom, _data$channel$join, _data$username, _data$name, _data$alias, _data$avatarUrl, _data$emoji, _data$scriptEnabled, _data$script, _data$retryFailedCall, _data$retryCount, _data$retryDelay, _data$triggerWordAnyw, _data$runOnEdits;

  const initialValue = {
    enabled: (_data$enabled = data.enabled) !== null && _data$enabled !== void 0 ? _data$enabled : true,
    impersonateUser: data.impersonateUser,
    event: data.event,
    token: data.token,
    urls: (_data$urls$join = data.urls.join('\n')) !== null && _data$urls$join !== void 0 ? _data$urls$join : '',
    triggerWords: triggerWordsToString(data.triggerWords),
    targetRoom: (_data$targetRoom = data.targetRoom) !== null && _data$targetRoom !== void 0 ? _data$targetRoom : '',
    channel: (_data$channel$join = data.channel.join(', ')) !== null && _data$channel$join !== void 0 ? _data$channel$join : '',
    username: (_data$username = data.username) !== null && _data$username !== void 0 ? _data$username : '',
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    alias: (_data$alias = data.alias) !== null && _data$alias !== void 0 ? _data$alias : '',
    avatarUrl: (_data$avatarUrl = data.avatarUrl) !== null && _data$avatarUrl !== void 0 ? _data$avatarUrl : '',
    emoji: (_data$emoji = data.emoji) !== null && _data$emoji !== void 0 ? _data$emoji : '',
    scriptEnabled: (_data$scriptEnabled = data.scriptEnabled) !== null && _data$scriptEnabled !== void 0 ? _data$scriptEnabled : false,
    script: (_data$script = data.script) !== null && _data$script !== void 0 ? _data$script : '',
    retryFailedCalls: (_data$retryFailedCall = data.retryFailedCalls) !== null && _data$retryFailedCall !== void 0 ? _data$retryFailedCall : true,
    retryCount: (_data$retryCount = data.retryCount) !== null && _data$retryCount !== void 0 ? _data$retryCount : 5,
    retryDelay: (_data$retryDelay = data.retryDelay) !== null && _data$retryDelay !== void 0 ? _data$retryDelay : 'power-of-ten',
    triggerWordAnywhere: (_data$triggerWordAnyw = data.triggerWordAnywhere) !== null && _data$triggerWordAnyw !== void 0 ? _data$triggerWordAnyw : false,
    runOnEdits: (_data$runOnEdits = data.runOnEdits) !== null && _data$runOnEdits !== void 0 ? _data$runOnEdits : true
  };
  return initialValue;
};

function EditOutgoingWebhook(_ref) {
  let {
    data,
    onChange,
    setSaveAction
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    handlers: formHandlers,
    values: formValues,
    reset
  } = useForm(getInitialValue(data));
  const setModal = useSetModal();
  const saveIntegration = useMethod('updateOutgoingIntegration');
  const router = useRoute('admin-integrations');
  const deleteQuery = useMemo(() => ({
    type: 'webhook-outgoing',
    integrationId: data._id
  }), [data._id]);
  const deleteIntegration = useEndpointAction('POST', 'integrations.remove', deleteQuery);
  const handleDeleteIntegration = useCallback(() => {
    const closeModal = () => setModal();

    const handleClose = () => {
      closeModal();
      router.push({});
    };

    const onDelete = async () => {
      const result = await deleteIntegration();

      if (result.success) {
        setModal( /*#__PURE__*/React.createElement(GenericModal, {
          variant: "success",
          onClose: handleClose,
          onConfirm: handleClose
        }, t('Your_entry_has_been_deleted')));
      }
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDelete,
      onCancel: closeModal,
      confirmText: t('Delete')
    }, t('Integration_Delete_Warning')));
  }, [deleteIntegration, router, setModal, t]);
  const {
    urls,
    triggerWords
  } = formValues;
  const handleSave = useCallback(async () => {
    try {
      await saveIntegration(data._id, _objectSpread(_objectSpread({}, formValues), {}, {
        triggerWords: triggerWordsToArray(triggerWords),
        urls: urls.split('\n')
      }));
      dispatchToastMessage({
        type: 'success',
        message: t('Integration_updated')
      });
      onChange();
    } catch (e) {
      dispatchToastMessage({
        type: 'error',
        message: e
      });
    }
  }, [data._id, dispatchToastMessage, formValues, onChange, saveIntegration, t, triggerWords, urls]);
  const actionButtons = useMemo(() => /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
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
  }, t('Save')))), /*#__PURE__*/React.createElement(Button, {
    mbs: "x4",
    primary: true,
    danger: true,
    w: "full",
    onClick: handleDeleteIntegration
  }, t('Delete')))), [handleDeleteIntegration, handleSave, reset, t]);
  return /*#__PURE__*/React.createElement(OutgoingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: actionButtons
  }, props));
}

module.exportDefault(EditOutgoingWebhook);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/f542038e2356bf5ca3bf53b814f8ca87289bfb8a.map

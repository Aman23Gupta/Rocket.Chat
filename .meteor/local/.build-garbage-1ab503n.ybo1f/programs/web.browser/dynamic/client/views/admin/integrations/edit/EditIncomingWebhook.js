function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditIncomingWebhook.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "onChange"];

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
let IncomingWebhookForm;
module.link("../IncomingWebhookForm", {
  default(v) {
    IncomingWebhookForm = v;
  }

}, 10);

const getInitialValue = data => {
  var _data$channel$join, _data$username, _data$name, _data$alias, _data$avatarUrl, _data$emoji;

  const initialValue = {
    enabled: data.enabled,
    channel: (_data$channel$join = data.channel.join(', ')) !== null && _data$channel$join !== void 0 ? _data$channel$join : '',
    username: (_data$username = data.username) !== null && _data$username !== void 0 ? _data$username : '',
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    alias: (_data$alias = data.alias) !== null && _data$alias !== void 0 ? _data$alias : '',
    avatarUrl: (_data$avatarUrl = data.avatarUrl) !== null && _data$avatarUrl !== void 0 ? _data$avatarUrl : '',
    emoji: (_data$emoji = data.emoji) !== null && _data$emoji !== void 0 ? _data$emoji : '',
    scriptEnabled: data.scriptEnabled,
    script: data.script
  };
  return initialValue;
};

function EditIncomingWebhook(_ref) {
  let {
    data,
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    values: formValues,
    handlers: formHandlers,
    reset
  } = useForm(getInitialValue(data));
  const setModal = useSetModal();
  const deleteQuery = useMemo(() => ({
    type: 'webhook-incoming',
    integrationId: data._id
  }), [data._id]);
  const deleteIntegration = useEndpointAction('POST', 'integrations.remove', deleteQuery);
  const saveIntegration = useMethod('updateIncomingIntegration');
  const router = useRoute('admin-integrations');
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
  const handleSave = useCallback(async () => {
    try {
      await saveIntegration(data._id, _objectSpread({}, formValues));
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
  }, [data._id, dispatchToastMessage, formValues, onChange, saveIntegration, t]);
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
  return /*#__PURE__*/React.createElement(IncomingWebhookForm, _extends({
    formHandlers: formHandlers,
    formValues: formValues,
    extraData: {
      _id: data._id,
      token: data.token
    },
    append: actionButtons
  }, props));
}

module.exportDefault(EditIncomingWebhook);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/ebe17ccda5e77fb8e876f0dfd0390db9fbe24961.map

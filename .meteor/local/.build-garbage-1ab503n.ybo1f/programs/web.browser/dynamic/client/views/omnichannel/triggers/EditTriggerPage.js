function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/EditTriggerPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["actions"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Margins, FieldGroup, Box, Button;
module.link("@rocket.chat/fuselage", {
  Margins(v) {
    Margins = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
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
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 7);
let TriggersForm;
module.link("./TriggersForm", {
  default(v) {
    TriggersForm = v;
  }

}, 8);

const getInitialValues = _ref => {
  let {
    name,
    description,
    enabled,
    runOnce,
    conditions: [{
      name: condName,
      value: condValue
    }],
    actions: [{
      action: actName,
      params: {
        sender: actSender,
        msg: actMsg,
        name: actSenderName
      }
    }]
  } = _ref;
  return {
    name: name !== null && name !== void 0 ? name : '',
    description: description !== null && description !== void 0 ? description : '',
    enabled: !!enabled,
    runOnce: !!runOnce,
    conditions: {
      name: condName !== null && condName !== void 0 ? condName : 'page-url',
      value: condValue !== null && condValue !== void 0 ? condValue : ''
    },
    actions: {
      name: actName !== null && actName !== void 0 ? actName : '',
      params: {
        sender: actSender !== null && actSender !== void 0 ? actSender : 'queue',
        msg: actMsg !== null && actMsg !== void 0 ? actMsg : '',
        name: actSenderName !== null && actSenderName !== void 0 ? actSenderName : ''
      }
    }
  };
};

const EditTriggerPage = _ref2 => {
  let {
    data,
    onSave
  } = _ref2;
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const router = useRoute('omnichannel-triggers');
  const save = useMethod('livechat:saveTrigger');
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(getInitialValues(data));
  const handleSave = useMutableCallback(async () => {
    try {
      const {
        actions: {
          params: {
            sender,
            msg,
            name
          }
        }
      } = values,
            restValues = _objectWithoutProperties(values, _excluded);

      await save(_objectSpread(_objectSpread({
        _id: data._id
      }, restValues), {}, {
        conditions: [values.conditions],
        actions: [{
          name: 'send-message',
          params: _objectSpread({
            sender,
            msg
          }, sender === 'custom' && {
            name
          })
        }]
      }));
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      onSave();
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const {
    name
  } = values;
  const canSave = name && hasUnsavedChanges;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(TriggersForm, {
    values: values,
    handlers: handlers
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    primary: true,
    onClick: handleSave,
    disabled: !canSave
  }, t('Save')))));
};

module.exportDefault(EditTriggerPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/ee76b46c1ec626db93cdce0045d1fe1067992a6b.map

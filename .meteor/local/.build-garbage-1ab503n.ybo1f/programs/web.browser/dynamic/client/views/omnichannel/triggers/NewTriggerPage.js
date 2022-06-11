function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/NewTriggerPage.js                                                                 //
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
let Button, FieldGroup, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
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

const NewTriggerPage = _ref => {
  let {
    onSave
  } = _ref;
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const router = useRoute('omnichannel-triggers');
  const save = useMethod('livechat:saveTrigger');
  const {
    values,
    handlers
  } = useForm({
    name: '',
    description: '',
    enabled: true,
    runOnce: false,
    conditions: {
      name: 'page-url',
      value: ''
    },
    actions: {
      name: '',
      params: {
        sender: 'queue',
        msg: '',
        name: ''
      }
    }
  });
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

      await save(_objectSpread(_objectSpread({}, restValues), {}, {
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
    name,
    actions: {
      params: {
        msg
      }
    }
  } = values;
  const canSave = useMemo(() => name && msg, [name, msg]);
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

module.exportDefault(NewTriggerPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/8d2a8d9e98128cb6bd669c6186b5804187241b5c.map

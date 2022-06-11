function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersForm.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Field, TextInput, ToggleSwitch, Select, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Select(v) {
    Select = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 4);

const TriggersForm = _ref => {
  let {
    values,
    handlers,
    className
  } = _ref;
  const [nameError, setNameError] = useState('');
  const [msgError, setMsgError] = useState('');
  const t = useTranslation();
  const {
    name,
    description,
    enabled,
    runOnce,
    conditions,
    actions
  } = values;
  const {
    handleName,
    handleDescription,
    handleEnabled,
    handleRunOnce,
    handleConditions,
    handleActions
  } = handlers;
  const {
    name: conditionName,
    value: conditionValue
  } = conditions;
  const {
    params: {
      sender: actionSender,
      msg: actionMsg,
      name: actionAgentName
    }
  } = actions;
  const conditionOptions = useMemo(() => [['page-url', t('Visitor_page_URL')], ['time-on-site', t('Visitor_time_on_site')], ['chat-opened-by-visitor', t('Chat_opened_by_visitor')]], [t]);
  const conditionValuePlaceholders = useMemo(() => ({
    'page-url': t('Enter_a_regex'),
    'time-on-site': t('Time_in_seconds')
  }), [t]);
  const conditionValuePlaceholder = conditionValuePlaceholders[conditionName];
  const senderOptions = useMemo(() => [['queue', t('Impersonate_next_agent_from_queue')], ['custom', t('Custom_agent')]], [t]);
  const handleConditionName = useMutableCallback(name => {
    handleConditions({
      name,
      value: ''
    });
  });
  const handleConditionValue = useMutableCallback(_ref2 => {
    let {
      currentTarget: {
        value
      }
    } = _ref2;
    handleConditions(_objectSpread(_objectSpread({}, conditions), {}, {
      value
    }));
  });
  const handleActionAgentName = useMutableCallback(_ref3 => {
    let {
      currentTarget: {
        value: name
      }
    } = _ref3;
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        name
      })
    }));
  });
  const handleActionSender = useMutableCallback(sender => {
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        sender
      })
    }));
  });
  const handleActionMessage = useMutableCallback(_ref4 => {
    let {
      currentTarget: {
        value: msg
      }
    } = _ref4;
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        msg
      })
    }));
  });
  useComponentDidUpdate(() => {
    setNameError(!name ? t('The_field_is_required', t('Name')) : '');
  }, [t, name]);
  useComponentDidUpdate(() => {
    setMsgError(!actionMsg ? t('The_field_is_required', t('Message')) : '');
  }, [t, actionMsg]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Enabled')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: enabled,
    onChange: handleEnabled
  })))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Run_only_once_for_each_visitor')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: runOnce,
    onChange: handleRunOnce
  })))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    error: nameError,
    onChange: handleName,
    placeholder: t('Name')
  })), /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: description,
    onChange: handleDescription,
    placeholder: t('Description')
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Condition')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: conditionOptions,
    value: conditionName,
    onChange: handleConditionName
  })), conditionValuePlaceholder && /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: conditionValue,
    onChange: handleConditionValue,
    placeholder: conditionValuePlaceholder
  }))), /*#__PURE__*/React.createElement(Field, {
    className: className
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Action')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: t('Send_a_message'),
    disabled: true
  })), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: senderOptions,
    value: actionSender,
    onChange: handleActionSender,
    placeholder: t('Select_an_option')
  })), actionSender === 'custom' && /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: actionAgentName,
    onChange: handleActionAgentName,
    placeholder: t('Name_of_agent')
  })), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 3,
    value: actionMsg,
    onChange: handleActionMessage,
    placeholder: "".concat(t('Message'), "*")
  })), /*#__PURE__*/React.createElement(Field.Error, null, msgError)));
};

module.exportDefault(TriggersForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/5d667a3384ac40cd4499a75d598b335533dee11d.map

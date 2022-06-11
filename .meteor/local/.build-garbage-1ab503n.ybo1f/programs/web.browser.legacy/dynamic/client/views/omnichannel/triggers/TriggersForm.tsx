function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersForm.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Field, TextInput, ToggleSwitch, Select, TextAreaInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Select: function (v) {
    Select = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 4);

var TriggersForm = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      className = _ref.className;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      nameError = _useState2[0],
      setNameError = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      msgError = _useState4[0],
      setMsgError = _useState4[1];

  var t = useTranslation();
  var name = values.name,
      description = values.description,
      enabled = values.enabled,
      runOnce = values.runOnce,
      conditions = values.conditions,
      actions = values.actions;
  var handleName = handlers.handleName,
      handleDescription = handlers.handleDescription,
      handleEnabled = handlers.handleEnabled,
      handleRunOnce = handlers.handleRunOnce,
      handleConditions = handlers.handleConditions,
      handleActions = handlers.handleActions;
  var conditionName = conditions.name,
      conditionValue = conditions.value;
  var _actions$params = actions.params,
      actionSender = _actions$params.sender,
      actionMsg = _actions$params.msg,
      actionAgentName = _actions$params.name;
  var conditionOptions = useMemo(function () {
    return [['page-url', t('Visitor_page_URL')], ['time-on-site', t('Visitor_time_on_site')], ['chat-opened-by-visitor', t('Chat_opened_by_visitor')]];
  }, [t]);
  var conditionValuePlaceholders = useMemo(function () {
    return {
      'page-url': t('Enter_a_regex'),
      'time-on-site': t('Time_in_seconds')
    };
  }, [t]);
  var conditionValuePlaceholder = conditionValuePlaceholders[conditionName];
  var senderOptions = useMemo(function () {
    return [['queue', t('Impersonate_next_agent_from_queue')], ['custom', t('Custom_agent')]];
  }, [t]);
  var handleConditionName = useMutableCallback(function (name) {
    handleConditions({
      name: name,
      value: ''
    });
  });
  var handleConditionValue = useMutableCallback(function (_ref2) {
    var value = _ref2.currentTarget.value;
    handleConditions(_objectSpread(_objectSpread({}, conditions), {}, {
      value: value
    }));
  });
  var handleActionAgentName = useMutableCallback(function (_ref3) {
    var name = _ref3.currentTarget.value;
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        name: name
      })
    }));
  });
  var handleActionSender = useMutableCallback(function (sender) {
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        sender: sender
      })
    }));
  });
  var handleActionMessage = useMutableCallback(function (_ref4) {
    var msg = _ref4.currentTarget.value;
    handleActions(_objectSpread(_objectSpread({}, actions), {}, {
      params: _objectSpread(_objectSpread({}, actions.params), {}, {
        msg: msg
      })
    }));
  });
  useComponentDidUpdate(function () {
    setNameError(!name ? t('The_field_is_required', t('Name')) : '');
  }, [t, name]);
  useComponentDidUpdate(function () {
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
    placeholder: t('Message') + "*"
  })), /*#__PURE__*/React.createElement(Field.Error, null, msgError)));
};

module.exportDefault(TriggersForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/121f7988fe15b14eacba1d851f041e84e8db5a67.map

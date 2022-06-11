function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesGlobalSection.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange", "commitRef"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Accordion, Field, FieldGroup, MultiSelect, ToggleSwitch, Callout;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 3);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 4);

var PreferencesGlobalSection = function (_ref) {
  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var userDontAskAgainList = useUserPreference('dontAskAgainList');
  var userEnableMessageParserEarlyAdoption = useUserPreference('enableMessageParserEarlyAdoption');
  var options = useMemo(function () {
    return (userDontAskAgainList || []).map(function (_ref2) {
      var action = _ref2.action,
          label = _ref2.label;
      return [action, label];
    });
  }, [userDontAskAgainList]);
  var selectedOptions = options.map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        action = _ref4[0];

    return action;
  });

  var _useForm = useForm({
    dontAskAgainList: selectedOptions,
    enableMessageParserEarlyAdoption: userEnableMessageParserEarlyAdoption
  }, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var dontAskAgainList = values.dontAskAgainList,
      enableMessageParserEarlyAdoption = values.enableMessageParserEarlyAdoption;
  var handleDontAskAgainList = handlers.handleDontAskAgainList,
      handleEnableMessageParserEarlyAdoption = handlers.handleEnableMessageParserEarlyAdoption;
  commitRef.current.global = commit;
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Global')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Dont_ask_me_again_list')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelect, {
    placeholder: t('Nothing_found'),
    value: dontAskAgainList.length > 0 && dontAskAgainList || undefined,
    onChange: handleDontAskAgainList,
    options: options
  })))), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Enable_message_parser_early_adoption')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: enableMessageParserEarlyAdoption,
    onChange: handleEnableMessageParserEarlyAdoption
  }))), /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, t('Enable_message_parser_early_adoption_alert'))));
};

module.exportDefault(PreferencesGlobalSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/9a506f672b6895ddf1a4323e7a5ed8fcee37b073.map

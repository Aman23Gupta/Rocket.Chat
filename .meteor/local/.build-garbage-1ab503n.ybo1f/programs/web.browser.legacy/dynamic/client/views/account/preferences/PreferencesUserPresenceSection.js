function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesUserPresenceSection.js                                                  //
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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Accordion, Field, NumberInput, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  NumberInput: function (v) {
    NumberInput = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
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

var PreferencesUserPresenceSection = function (_ref) {
  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var userEnableAutoAway = useUserPreference('enableAutoAway');
  var userIdleTimeLimit = useUserPreference('idleTimeLimit');

  var _useForm = useForm({
    enableAutoAway: userEnableAutoAway,
    idleTimeLimit: userIdleTimeLimit
  }, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var enableAutoAway = values.enableAutoAway,
      idleTimeLimit = values.idleTimeLimit;
  var handleEnableAutoAway = handlers.handleEnableAutoAway,
      handleIdleTimeLimit = handlers.handleIdleTimeLimit;
  commitRef.current.userPreference = commit;
  var onChangeIdleTimeLimit = useCallback(function (e) {
    return handleIdleTimeLimit(Number(e.currentTarget.value));
  }, [handleIdleTimeLimit]);
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('User_Presence')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Enable_Auto_Away')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: enableAutoAway,
    onChange: handleEnableAutoAway
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Idle_Time_Limit')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    value: idleTimeLimit,
    onChange: onChangeIdleTimeLimit
  })))));
};

module.exportDefault(PreferencesUserPresenceSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/5a0b7212761f7ce7ed349189c568b649cc3e02da.map

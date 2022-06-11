function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesUserPresenceSection.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange", "commitRef"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Accordion, Field, NumberInput, FieldGroup, ToggleSwitch;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  NumberInput(v) {
    NumberInput = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 3);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 4);

const PreferencesUserPresenceSection = _ref => {
  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const userEnableAutoAway = useUserPreference('enableAutoAway');
  const userIdleTimeLimit = useUserPreference('idleTimeLimit');
  const {
    values,
    handlers,
    commit
  } = useForm({
    enableAutoAway: userEnableAutoAway,
    idleTimeLimit: userIdleTimeLimit
  }, onChange);
  const {
    enableAutoAway,
    idleTimeLimit
  } = values;
  const {
    handleEnableAutoAway,
    handleIdleTimeLimit
  } = handlers;
  commitRef.current.userPreference = commit;
  const onChangeIdleTimeLimit = useCallback(e => handleIdleTimeLimit(Number(e.currentTarget.value)), [handleIdleTimeLimit]);
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/5b98802a1f706dff062e3d7fd89f73f64ec2849a.map

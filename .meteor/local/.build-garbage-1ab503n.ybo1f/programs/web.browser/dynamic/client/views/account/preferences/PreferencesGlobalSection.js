function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesGlobalSection.js                                                        //
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
let Accordion, Field, FieldGroup, MultiSelect, ToggleSwitch, Callout;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
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

const PreferencesGlobalSection = _ref => {
  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const userDontAskAgainList = useUserPreference('dontAskAgainList');
  const userEnableMessageParserEarlyAdoption = useUserPreference('enableMessageParserEarlyAdoption');
  const options = useMemo(() => (userDontAskAgainList || []).map(_ref2 => {
    let {
      action,
      label
    } = _ref2;
    return [action, label];
  }), [userDontAskAgainList]);
  const selectedOptions = options.map(_ref3 => {
    let [action] = _ref3;
    return action;
  });
  const {
    values,
    handlers,
    commit
  } = useForm({
    dontAskAgainList: selectedOptions,
    enableMessageParserEarlyAdoption: userEnableMessageParserEarlyAdoption
  }, onChange);
  const {
    dontAskAgainList,
    enableMessageParserEarlyAdoption
  } = values;
  const {
    handleDontAskAgainList,
    handleEnableMessageParserEarlyAdoption
  } = handlers;
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/a89a7b7a43efa06430e100596a591cc0172819bb.map

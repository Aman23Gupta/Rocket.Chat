function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/AutoTranslate/AutoTranslate.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FieldGroup, Field, ToggleSwitch, Select;
module.link("@rocket.chat/fuselage", {
  FieldGroup(v) {
    FieldGroup = v;
  },

  Field(v) {
    Field = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const AutoTranslate = _ref => {
  let {
    language,
    languages,
    handleSwitch,
    translateEnable,
    handleChangeLanguage,
    handleClose
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "language"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Auto_Translate')), handleClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(VerticalBar.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "automatic-translation"
  }, t('Automatic_Translation')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    id: "automatic-translation",
    onChange: handleSwitch,
    defaultChecked: translateEnable
  })), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: "language"
  }, t('Language')), /*#__PURE__*/React.createElement(Field.Row, {
    verticalAlign: "middle"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "language",
    value: language,
    disabled: !translateEnable,
    onChange: handleChangeLanguage,
    options: languages
  })))));
};

module.exportDefault(AutoTranslate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/AutoTranslate/1af3cbeb1a91088f22a2d5140bf9d9704e38f755.map

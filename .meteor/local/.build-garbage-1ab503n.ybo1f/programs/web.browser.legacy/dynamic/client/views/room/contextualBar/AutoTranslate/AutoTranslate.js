function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/AutoTranslate/AutoTranslate.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var FieldGroup, Field, ToggleSwitch, Select;
module.link("@rocket.chat/fuselage", {
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var AutoTranslate = function (_ref) {
  var language = _ref.language,
      languages = _ref.languages,
      handleSwitch = _ref.handleSwitch,
      translateEnable = _ref.translateEnable,
      handleChangeLanguage = _ref.handleChangeLanguage,
      handleClose = _ref.handleClose;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/AutoTranslate/60f59c7042aa1c8d7b66fdb6ba1e8462b6132f44.map

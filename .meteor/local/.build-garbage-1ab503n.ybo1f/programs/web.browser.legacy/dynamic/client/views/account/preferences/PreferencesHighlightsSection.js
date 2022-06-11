function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesHighlightsSection.js                                                    //
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
var Accordion, Field, FieldGroup, TextAreaInput;
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
  TextAreaInput: function (v) {
    TextAreaInput = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
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

var PreferencesHighlightsSection = function (_ref) {
  var _useUserPreference$jo, _useUserPreference;

  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var userHighlights = (_useUserPreference$jo = (_useUserPreference = useUserPreference('highlights')) === null || _useUserPreference === void 0 ? void 0 : _useUserPreference.join(',\n')) !== null && _useUserPreference$jo !== void 0 ? _useUserPreference$jo : '';

  var _useForm = useForm({
    highlights: userHighlights
  }, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var highlights = values.highlights;
  var handleHighlights = handlers.handleHighlights;
  commitRef.current.highlights = commit;
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Highlights')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Highlights_List')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    rows: 4,
    value: highlights,
    onChange: handleHighlights
  })), /*#__PURE__*/React.createElement(Field.Hint, null, t('Highlights_How_To')))));
};

module.exportDefault(PreferencesHighlightsSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/de0714cd3722a31a7ff63a375b6838f13e0596ac.map

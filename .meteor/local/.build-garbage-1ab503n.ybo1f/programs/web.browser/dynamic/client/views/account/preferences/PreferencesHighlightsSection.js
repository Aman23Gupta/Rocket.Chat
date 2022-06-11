function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesHighlightsSection.js                                                    //
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
let Accordion, Field, FieldGroup, TextAreaInput;
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

  TextAreaInput(v) {
    TextAreaInput = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
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

const PreferencesHighlightsSection = _ref => {
  var _useUserPreference$jo, _useUserPreference;

  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const userHighlights = (_useUserPreference$jo = (_useUserPreference = useUserPreference('highlights')) === null || _useUserPreference === void 0 ? void 0 : _useUserPreference.join(',\n')) !== null && _useUserPreference$jo !== void 0 ? _useUserPreference$jo : '';
  const {
    values,
    handlers,
    commit
  } = useForm({
    highlights: userHighlights
  }, onChange);
  const {
    highlights
  } = values;
  const {
    handleHighlights
  } = handlers;
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/c5ce98831cab91a1438512d60b7ad2ea33eb8634.map

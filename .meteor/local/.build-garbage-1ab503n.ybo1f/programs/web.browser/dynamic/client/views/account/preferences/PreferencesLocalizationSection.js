function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesLocalizationSection.js                                                  //
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
let Accordion, Field, Select, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
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
let useLanguages, useTranslation;
module.link("../../../contexts/TranslationContext", {
  useLanguages(v) {
    useLanguages = v;
  },

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

const PreferencesLocalizationSection = _ref => {
  let {
    onChange,
    commitRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const userLanguage = useUserPreference('language') || '';
  const languages = useLanguages();
  const languageOptions = useMemo(() => languages.map(_ref2 => {
    let {
      key,
      name
    } = _ref2;
    return [key, name];
  }).sort((_ref3, _ref4) => {
    let [a] = _ref3;
    let [b] = _ref4;
    return a - b;
  }), [languages]);
  const {
    values,
    handlers,
    commit
  } = useForm({
    language: userLanguage
  }, onChange);
  const {
    language
  } = values;
  const {
    handleLanguage
  } = handlers;
  commitRef.current.localization = commit;
  return /*#__PURE__*/React.createElement(Accordion.Item, _extends({
    title: t('Localization')
  }, props), /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Language')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: language,
    onChange: handleLanguage,
    options: languageOptions
  })))));
};

module.exportDefault(PreferencesLocalizationSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/ed1b18da978e29634e6e8055deb39ced18074a2b.map

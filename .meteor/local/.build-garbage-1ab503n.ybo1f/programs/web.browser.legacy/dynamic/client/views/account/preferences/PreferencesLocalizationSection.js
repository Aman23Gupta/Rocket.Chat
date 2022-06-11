function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/PreferencesLocalizationSection.js                                                  //
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
var Accordion, Field, Select, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
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
var useLanguages, useTranslation;
module.link("../../../contexts/TranslationContext", {
  useLanguages: function (v) {
    useLanguages = v;
  },
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

var PreferencesLocalizationSection = function (_ref) {
  var onChange = _ref.onChange,
      commitRef = _ref.commitRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var userLanguage = useUserPreference('language') || '';
  var languages = useLanguages();
  var languageOptions = useMemo(function () {
    return languages.map(function (_ref2) {
      var key = _ref2.key,
          name = _ref2.name;
      return [key, name];
    }).sort(function (_ref3, _ref4) {
      var _ref5 = _slicedToArray(_ref3, 1),
          a = _ref5[0];

      var _ref6 = _slicedToArray(_ref4, 1),
          b = _ref6[0];

      return a - b;
    });
  }, [languages]);

  var _useForm = useForm({
    language: userLanguage
  }, onChange),
      values = _useForm.values,
      handlers = _useForm.handlers,
      commit = _useForm.commit;

  var language = values.language;
  var handleLanguage = handlers.handleLanguage;
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/f1d94f8c466c17b917085acb6d0a1cc9d0020ddc.map

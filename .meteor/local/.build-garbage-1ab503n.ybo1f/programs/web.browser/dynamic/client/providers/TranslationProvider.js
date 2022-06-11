function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/TranslationProvider.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["lng"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);
let TAPi18n, TAPi18next;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n(v) {
    TAPi18n = v;
  },

  TAPi18next(v) {
    TAPi18next = v;
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
let TranslationContext;
module.link("../contexts/TranslationContext", {
  TranslationContext(v) {
    TranslationContext = v;
  }

}, 2);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 3);

const createTranslateFunction = language => {
  const translate = function (key) {
    for (var _len = arguments.length, replaces = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      replaces[_key - 1] = arguments[_key];
    }

    if (typeof replaces[0] === 'object') {
      const [options, lang_tag = language] = replaces;
      return TAPi18next.t(key, _objectSpread({
        ns: 'project',
        lng: lang_tag
      }, options));
    }

    if (replaces.length === 0) {
      return TAPi18next.t(key, {
        ns: 'project',
        lng: language
      });
    }

    return TAPi18next.t(key, {
      postProcess: 'sprintf',
      sprintf: replaces,
      ns: 'project',
      lng: language
    });
  };

  translate.has = function (key) {
    let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    let {
      lng = language
    } = _ref,
        options = _objectWithoutProperties(_ref, _excluded);

    return !!key && TAPi18next.exists(key, _objectSpread({
      ns: 'project',
      lng
    }, options));
  };

  return translate;
};

const getLanguages = () => {
  const result = Object.entries(TAPi18n.getLanguages()).map(_ref2 => {
    let [key, language] = _ref2;
    return _objectSpread(_objectSpread({}, language), {}, {
      key: key.toLowerCase()
    });
  }).sort((a, b) => a.key - b.key);
  result.unshift({
    name: 'Default',
    en: 'Default',
    key: ''
  });
  return result;
};

const getLanguage = () => TAPi18n.getLanguage();

const loadLanguage = language => TAPi18n._loadLanguage(language);

function TranslationProvider(_ref3) {
  let {
    children
  } = _ref3;
  const languages = useReactiveValue(getLanguages);
  const language = useReactiveValue(getLanguage);
  const translate = useMemo(() => createTranslateFunction(language), [language]);
  const value = useMemo(() => ({
    languages,
    language,
    loadLanguage,
    translate
  }), [languages, language, translate]);
  return /*#__PURE__*/React.createElement(TranslationContext.Provider, {
    children: children,
    value: value
  });
}

module.exportDefault(TranslationProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/1c087d0986068a2afc9d50fccef3a2b0395f9436.map

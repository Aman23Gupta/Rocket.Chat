function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/TranslationProvider.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["lng"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 3);
var TAPi18n, TAPi18next;
module.link("meteor/rocketchat:tap-i18n", {
  TAPi18n: function (v) {
    TAPi18n = v;
  },
  TAPi18next: function (v) {
    TAPi18next = v;
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
var TranslationContext;
module.link("../contexts/TranslationContext", {
  TranslationContext: function (v) {
    TranslationContext = v;
  }
}, 2);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 3);

var createTranslateFunction = function (language) {
  var translate = function (key) {
    for (var _len = arguments.length, replaces = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      replaces[_key - 1] = arguments[_key];
    }

    if (_typeof(replaces[0]) === 'object') {
      var options = replaces[0],
          _replaces$ = replaces[1],
          lang_tag = _replaces$ === void 0 ? language : _replaces$;
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
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref$lng = _ref.lng,
        lng = _ref$lng === void 0 ? language : _ref$lng,
        options = _objectWithoutProperties(_ref, _excluded);

    return !!key && TAPi18next.exists(key, _objectSpread({
      ns: 'project',
      lng: lng
    }, options));
  };

  return translate;
};

var getLanguages = function () {
  var result = Object.entries(TAPi18n.getLanguages()).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        language = _ref3[1];

    return _objectSpread(_objectSpread({}, language), {}, {
      key: key.toLowerCase()
    });
  }).sort(function (a, b) {
    return a.key - b.key;
  });
  result.unshift({
    name: 'Default',
    en: 'Default',
    key: ''
  });
  return result;
};

var getLanguage = function () {
  return TAPi18n.getLanguage();
};

var loadLanguage = function (language) {
  return TAPi18n._loadLanguage(language);
};

function TranslationProvider(_ref4) {
  var children = _ref4.children;
  var languages = useReactiveValue(getLanguages);
  var language = useReactiveValue(getLanguage);
  var translate = useMemo(function () {
    return createTranslateFunction(language);
  }, [language]);
  var value = useMemo(function () {
    return {
      languages: languages,
      language: language,
      loadLanguage: loadLanguage,
      translate: translate
    };
  }, [languages, language, translate]);
  return /*#__PURE__*/React.createElement(TranslationContext.Provider, {
    children: children,
    value: value
  });
}

module.exportDefault(TranslationProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/08b6f4719a345091d31ad4510babd9665bcd8a6b.map

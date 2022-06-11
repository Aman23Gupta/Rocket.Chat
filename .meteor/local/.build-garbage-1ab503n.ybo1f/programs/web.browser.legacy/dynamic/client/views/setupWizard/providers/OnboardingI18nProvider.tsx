function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/providers/OnboardingI18nProvider.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var i18next;
module.link("i18next", {
  "default": function (v) {
    i18next = v;
  }
}, 0);
var i18nextHttpBackend;
module.link("i18next-http-backend", {
  "default": function (v) {
    i18nextHttpBackend = v;
  }
}, 1);
var React, Suspense, memo, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Suspense: function (v) {
    Suspense = v;
  },
  memo: function (v) {
    memo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var I18nextProvider, initReactI18next;
module.link("react-i18next", {
  I18nextProvider: function (v) {
    I18nextProvider = v;
  },
  initReactI18next: function (v) {
    initReactI18next = v;
  }
}, 3);
var useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 4);
var useLanguage;
module.link("../../../contexts/TranslationContext", {
  useLanguage: function (v) {
    useLanguage = v;
  }
}, 5);
var PageLoading;
module.link("../../root/PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 6);

var useOnboardingI18n = function () {
  var basePath = useAbsoluteUrl()('/i18n');
  var i18n = useState(function () {
    var i18n = i18next.createInstance().use(i18nextHttpBackend).use(initReactI18next);
    i18n.init({
      fallbackLng: 'en',
      ns: ['onboarding'],
      defaultNS: 'onboarding',
      debug: false,
      backend: {
        loadPath: basePath + "/{{lng}}.json",
        parse: function (data, _languages) {
          var namespaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          var source = JSON.parse(data);
          var result = {};

          var _loop = function (key) {
            var prefix = (Array.isArray(namespaces) ? namespaces : [namespaces]).find(function (namespace) {
              return key.startsWith(namespace + ".");
            });

            if (prefix) {
              result[key.slice(prefix.length + 1)] = source[key];
            }
          };

          for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];

            _loop(key);
          }

          return result;
        }
      }
    });
    return i18n;
  })[0];
  var lng = useLanguage();
  useEffect(function () {
    i18n.changeLanguage(lng);
  }, [i18n, lng]);
  return i18n;
};

var OnboardingI18nProvider = function (_ref) {
  var children = _ref.children;
  var i18n = useOnboardingI18n();
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageLoading, null)
  }, /*#__PURE__*/React.createElement(I18nextProvider, {
    i18n: i18n
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(OnboardingI18nProvider));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/providers/caa98bc154f3ebd98da5e3d4de5f3ea3364b8ac9.map

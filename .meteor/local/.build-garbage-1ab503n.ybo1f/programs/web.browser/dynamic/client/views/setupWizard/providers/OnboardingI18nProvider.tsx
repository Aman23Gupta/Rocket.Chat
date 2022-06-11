function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/providers/OnboardingI18nProvider.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let i18next;
module.link("i18next", {
  default(v) {
    i18next = v;
  }

}, 0);
let i18nextHttpBackend;
module.link("i18next-http-backend", {
  default(v) {
    i18nextHttpBackend = v;
  }

}, 1);
let React, Suspense, memo, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  Suspense(v) {
    Suspense = v;
  },

  memo(v) {
    memo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let I18nextProvider, initReactI18next;
module.link("react-i18next", {
  I18nextProvider(v) {
    I18nextProvider = v;
  },

  initReactI18next(v) {
    initReactI18next = v;
  }

}, 3);
let useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  }

}, 4);
let useLanguage;
module.link("../../../contexts/TranslationContext", {
  useLanguage(v) {
    useLanguage = v;
  }

}, 5);
let PageLoading;
module.link("../../root/PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 6);

const useOnboardingI18n = () => {
  const basePath = useAbsoluteUrl()('/i18n');
  const i18n = useState(() => {
    const i18n = i18next.createInstance().use(i18nextHttpBackend).use(initReactI18next);
    i18n.init({
      fallbackLng: 'en',
      ns: ['onboarding'],
      defaultNS: 'onboarding',
      debug: false,
      backend: {
        loadPath: "".concat(basePath, "/{{lng}}.json"),
        parse: function (data, _languages) {
          let namespaces = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
          const source = JSON.parse(data);
          const result = {};

          for (const key of Object.keys(source)) {
            const prefix = (Array.isArray(namespaces) ? namespaces : [namespaces]).find(namespace => key.startsWith("".concat(namespace, ".")));

            if (prefix) {
              result[key.slice(prefix.length + 1)] = source[key];
            }
          }

          return result;
        }
      }
    });
    return i18n;
  })[0];
  const lng = useLanguage();
  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [i18n, lng]);
  return i18n;
};

const OnboardingI18nProvider = _ref => {
  let {
    children
  } = _ref;
  const i18n = useOnboardingI18n();
  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageLoading, null)
  }, /*#__PURE__*/React.createElement(I18nextProvider, {
    i18n: i18n
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(OnboardingI18nProvider));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/providers/bd9ce78908b45cb1a0b647f90becdd363dafaed4.map

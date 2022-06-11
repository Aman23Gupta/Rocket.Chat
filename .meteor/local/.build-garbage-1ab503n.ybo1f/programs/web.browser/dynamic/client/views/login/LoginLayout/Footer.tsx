function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/Footer.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let React, useCallback, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useLoadLanguage, useTranslation;
module.link("../../../contexts/TranslationContext", {
  useLoadLanguage(v) {
    useLoadLanguage = v;
  },

  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let filterLanguage;
module.link("../../../lib/utils/filterLanguage", {
  filterLanguage(v) {
    filterLanguage = v;
  }

}, 4);

const Footer = () => {
  var _useSetting;

  const t = useTranslation();
  const loadLanguage = useLoadLanguage();
  const serverLanguage = filterLanguage((_useSetting = useSetting('Language')) !== null && _useSetting !== void 0 ? _useSetting : 'en');
  const getSuggestedLanguage = useCallback(loadedLanguage => {
    if (serverLanguage !== loadedLanguage) {
      return serverLanguage;
    }

    if (serverLanguage !== 'en') {
      return 'en';
    }

    return undefined;
  }, [serverLanguage]);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    var _Meteor$_localStorage;

    return filterLanguage((_Meteor$_localStorage = Meteor._localStorage.getItem('userLanguage')) !== null && _Meteor$_localStorage !== void 0 ? _Meteor$_localStorage : 'en');
  });
  useEffect(() => {
    loadLanguage(currentLanguage).then(() => {
      var _window, _window$setLanguage;

      (_window = window) === null || _window === void 0 ? void 0 : (_window$setLanguage = _window.setLanguage) === null || _window$setLanguage === void 0 ? void 0 : _window$setLanguage.call(_window, currentLanguage);
    });
  }, [currentLanguage, loadLanguage]);
  const [suggestedLanguage, setSuggestedLanguage] = useState(() => {
    var _Meteor$_localStorage2;

    const currentLanguage = filterLanguage((_Meteor$_localStorage2 = Meteor._localStorage.getItem('userLanguage')) !== null && _Meteor$_localStorage2 !== void 0 ? _Meteor$_localStorage2 : 'en');
    return getSuggestedLanguage(currentLanguage);
  });

  const handleSwitchLanguageClick = () => {
    const language = suggestedLanguage;

    if (!language) {
      return;
    }

    setCurrentLanguage(language);
    setSuggestedLanguage(getSuggestedLanguage(language));
  };

  return /*#__PURE__*/React.createElement("footer", null, suggestedLanguage ? /*#__PURE__*/React.createElement("div", {
    className: "switch-language",
    onClick: handleSwitchLanguageClick
  }, /*#__PURE__*/React.createElement("button", {
    className: "js-switch-language"
  }, t('Language_Version', {
    lng: suggestedLanguage
  }))) : null);
};

module.exportDefault(Footer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/f0d1bba6b3718b96c5fd04f238520ccc0f036ab6.map

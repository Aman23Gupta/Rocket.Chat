function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/Footer.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React, useCallback, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useLoadLanguage, useTranslation;
module.link("../../../contexts/TranslationContext", {
  useLoadLanguage: function (v) {
    useLoadLanguage = v;
  },
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var filterLanguage;
module.link("../../../lib/utils/filterLanguage", {
  filterLanguage: function (v) {
    filterLanguage = v;
  }
}, 4);

var Footer = function () {
  var _useSetting;

  var t = useTranslation();
  var loadLanguage = useLoadLanguage();
  var serverLanguage = filterLanguage((_useSetting = useSetting('Language')) !== null && _useSetting !== void 0 ? _useSetting : 'en');
  var getSuggestedLanguage = useCallback(function (loadedLanguage) {
    if (serverLanguage !== loadedLanguage) {
      return serverLanguage;
    }

    if (serverLanguage !== 'en') {
      return 'en';
    }

    return undefined;
  }, [serverLanguage]);

  var _useState = useState(function () {
    var _Meteor$_localStorage;

    return filterLanguage((_Meteor$_localStorage = Meteor._localStorage.getItem('userLanguage')) !== null && _Meteor$_localStorage !== void 0 ? _Meteor$_localStorage : 'en');
  }),
      _useState2 = _slicedToArray(_useState, 2),
      currentLanguage = _useState2[0],
      setCurrentLanguage = _useState2[1];

  useEffect(function () {
    loadLanguage(currentLanguage).then(function () {
      var _window, _window$setLanguage;

      (_window = window) === null || _window === void 0 ? void 0 : (_window$setLanguage = _window.setLanguage) === null || _window$setLanguage === void 0 ? void 0 : _window$setLanguage.call(_window, currentLanguage);
    });
  }, [currentLanguage, loadLanguage]);

  var _useState3 = useState(function () {
    var _Meteor$_localStorage2;

    var currentLanguage = filterLanguage((_Meteor$_localStorage2 = Meteor._localStorage.getItem('userLanguage')) !== null && _Meteor$_localStorage2 !== void 0 ? _Meteor$_localStorage2 : 'en');
    return getSuggestedLanguage(currentLanguage);
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestedLanguage = _useState4[0],
      setSuggestedLanguage = _useState4[1];

  var handleSwitchLanguageClick = function () {
    var language = suggestedLanguage;

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
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/6744c6bb5c3f72257a04d5d28759b4a8e7547d21.map

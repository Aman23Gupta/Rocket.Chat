function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/AutoTranslate/AutoTranslateWithData.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useMemo, useEffect, useState, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useLanguage;
module.link("../../../../contexts/TranslationContext", {
  useLanguage(v) {
    useLanguage = v;
  }

}, 2);
let useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 3);
let useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental(v) {
    useEndpointActionExperimental = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 6);
let AutoTranslate;
module.link("./AutoTranslate", {
  default(v) {
    AutoTranslate = v;
  }

}, 7);

const AutoTranslateWithData = _ref => {
  let {
    rid
  } = _ref;
  const close = useTabBarClose();
  const userLanguage = useLanguage();
  const subscription = useUserSubscription(rid);
  const {
    value: data
  } = useEndpointData('autotranslate.getSupportedLanguages', useMemo(() => ({
    targetLanguage: userLanguage
  }), [userLanguage]));
  const [currentLanguage, setCurrentLanguage] = useState(subscription.autoTranslateLanguage);
  const saveSettings = useEndpointActionExperimental('POST', 'autotranslate.saveSettings');
  const handleChangeLanguage = useMutableCallback(value => {
    setCurrentLanguage(value);
    saveSettings({
      roomId: rid,
      field: 'autoTranslateLanguage',
      value
    });
  });
  const handleSwitch = useMutableCallback(event => {
    saveSettings({
      roomId: rid,
      field: 'autoTranslate',
      value: event.target.checked
    });
  });
  useEffect(() => {
    if (!subscription.autoTranslate) {
      return;
    }

    if (!subscription.autoTranslateLanguage) {
      handleChangeLanguage(userLanguage);
    }
  }, [subscription.autoTranslate, subscription.autoTranslateLanguage, handleChangeLanguage, userLanguage]);
  return /*#__PURE__*/React.createElement(AutoTranslate, {
    language: currentLanguage,
    languages: data ? data.languages.map(value => [value.language, value.name]) : [],
    handleSwitch: handleSwitch,
    handleChangeLanguage: handleChangeLanguage,
    translateEnable: !!subscription.autoTranslate,
    handleClose: close
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoTranslateWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/AutoTranslate/07bc811fe9259198237296372ec1cbfe169f2223.map

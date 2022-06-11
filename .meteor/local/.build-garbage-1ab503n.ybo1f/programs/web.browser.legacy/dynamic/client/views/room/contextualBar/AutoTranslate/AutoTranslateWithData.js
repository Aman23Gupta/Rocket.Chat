function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/AutoTranslate/AutoTranslateWithData.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useMemo, useEffect, useState, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useLanguage;
module.link("../../../../contexts/TranslationContext", {
  useLanguage: function (v) {
    useLanguage = v;
  }
}, 2);
var useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserSubscription: function (v) {
    useUserSubscription = v;
  }
}, 3);
var useEndpointActionExperimental;
module.link("../../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 6);
var AutoTranslate;
module.link("./AutoTranslate", {
  "default": function (v) {
    AutoTranslate = v;
  }
}, 7);

var AutoTranslateWithData = function (_ref) {
  var rid = _ref.rid;
  var close = useTabBarClose();
  var userLanguage = useLanguage();
  var subscription = useUserSubscription(rid);

  var _useEndpointData = useEndpointData('autotranslate.getSupportedLanguages', useMemo(function () {
    return {
      targetLanguage: userLanguage
    };
  }, [userLanguage])),
      data = _useEndpointData.value;

  var _useState = useState(subscription.autoTranslateLanguage),
      _useState2 = _slicedToArray(_useState, 2),
      currentLanguage = _useState2[0],
      setCurrentLanguage = _useState2[1];

  var saveSettings = useEndpointActionExperimental('POST', 'autotranslate.saveSettings');
  var handleChangeLanguage = useMutableCallback(function (value) {
    setCurrentLanguage(value);
    saveSettings({
      roomId: rid,
      field: 'autoTranslateLanguage',
      value: value
    });
  });
  var handleSwitch = useMutableCallback(function (event) {
    saveSettings({
      roomId: rid,
      field: 'autoTranslate',
      value: event.target.checked
    });
  });
  useEffect(function () {
    if (!subscription.autoTranslate) {
      return;
    }

    if (!subscription.autoTranslateLanguage) {
      handleChangeLanguage(userLanguage);
    }
  }, [subscription.autoTranslate, subscription.autoTranslateLanguage, handleChangeLanguage, userLanguage]);
  return /*#__PURE__*/React.createElement(AutoTranslate, {
    language: currentLanguage,
    languages: data ? data.languages.map(function (value) {
      return [value.language, value.name];
    }) : [],
    handleSwitch: handleSwitch,
    handleChangeLanguage: handleChangeLanguage,
    translateEnable: !!subscription.autoTranslate,
    handleClose: close
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoTranslateWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/AutoTranslate/61b5c33109e989e0036d3d761f8a0edc3e20cea4.map

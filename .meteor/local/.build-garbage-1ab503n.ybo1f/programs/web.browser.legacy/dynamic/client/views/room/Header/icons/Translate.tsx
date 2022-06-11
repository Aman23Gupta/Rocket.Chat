function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Translate.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var Header;
module.link("../../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

var Translate = function (_ref) {
  var _ref$room = _ref.room,
      autoTranslateLanguage = _ref$room.autoTranslateLanguage,
      autoTranslate = _ref$room.autoTranslate;
  var t = useTranslation();
  var autoTranslateEnabled = useSetting('AutoTranslate_Enabled');
  var encryptedLabel = t('Translated');
  return autoTranslateEnabled && autoTranslate && autoTranslateLanguage ? /*#__PURE__*/React.createElement(Header.State, {
    title: encryptedLabel,
    icon: "language",
    color: colors.b500
  }) : null;
};

module.exportDefault( /*#__PURE__*/memo(Translate));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/4ebcefaa3e99d5f3081bd9eb63f58be0ae67c109.map

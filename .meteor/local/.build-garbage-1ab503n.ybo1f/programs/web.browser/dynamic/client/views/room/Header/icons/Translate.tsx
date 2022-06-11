function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Translate.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let Header;
module.link("../../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const Translate = _ref => {
  let {
    room: {
      autoTranslateLanguage,
      autoTranslate
    }
  } = _ref;
  const t = useTranslation();
  const autoTranslateEnabled = useSetting('AutoTranslate_Enabled');
  const encryptedLabel = t('Translated');
  return autoTranslateEnabled && autoTranslate && autoTranslateLanguage ? /*#__PURE__*/React.createElement(Header.State, {
    title: encryptedLabel,
    icon: "language",
    color: colors.b500
  }) : null;
};

module.exportDefault( /*#__PURE__*/memo(Translate));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/0b78ef2034480f398efabd9026be8fe5151659ac.map

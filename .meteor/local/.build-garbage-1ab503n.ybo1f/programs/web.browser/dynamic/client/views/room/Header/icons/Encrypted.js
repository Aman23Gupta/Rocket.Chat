function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Encrypted.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let Header;
module.link("../../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 3);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);

const Encrypted = _ref => {
  let {
    room
  } = _ref;
  const t = useTranslation();
  const e2eEnabled = useSetting('E2E_Enable');
  const toggleE2E = useMethod('saveRoomSettings');
  const encryptedLabel = t('Encrypted');
  const handleE2EClick = useMutableCallback(() => {
    toggleE2E(room._id, 'encrypted', !(room && room.encrypted));
  });
  return e2eEnabled && room !== null && room !== void 0 && room.encrypted ? /*#__PURE__*/React.createElement(Header.State, {
    title: encryptedLabel,
    icon: "key",
    onClick: handleE2EClick,
    color: colors.g500,
    tiny: true,
    ghost: true
  }) : null;
};

module.exportDefault( /*#__PURE__*/memo(Encrypted));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/7e2c65341d783c6a1e28cfeebe523fd76a14ec1a.map

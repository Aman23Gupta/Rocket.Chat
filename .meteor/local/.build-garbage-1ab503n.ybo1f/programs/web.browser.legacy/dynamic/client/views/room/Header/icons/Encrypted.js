function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Encrypted.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var Header;
module.link("../../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 3);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);

var Encrypted = function (_ref) {
  var room = _ref.room;
  var t = useTranslation();
  var e2eEnabled = useSetting('E2E_Enable');
  var toggleE2E = useMethod('saveRoomSettings');
  var encryptedLabel = t('Encrypted');
  var handleE2EClick = useMutableCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/62423ec52d1b64eeeef73f2855732b67e2816360.map

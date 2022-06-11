function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Favorite.js                                                                          //
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

var Favorite = function (_ref) {
  var _ref$room = _ref.room,
      _id = _ref$room._id,
      _ref$room$f = _ref$room.f,
      favorited = _ref$room$f === void 0 ? false : _ref$room$f;
  var t = useTranslation();
  var isFavoritesEnabled = useSetting('Favorite_Rooms');
  var toggleFavorite = useMethod('toggleFavorite');
  var handleFavoriteClick = useMutableCallback(function () {
    if (!isFavoritesEnabled) {
      return;
    }

    toggleFavorite(_id, !favorited);
  });
  var favoriteLabel = favorited ? t('Unfavorite') : t('Favorite');
  return isFavoritesEnabled && /*#__PURE__*/React.createElement(Header.State, {
    title: favoriteLabel,
    icon: favorited ? 'star-filled' : 'star',
    onClick: handleFavoriteClick,
    color: favorited ? colors.y500 : null,
    tiny: true,
    ghost: true
  });
};

module.exportDefault( /*#__PURE__*/memo(Favorite));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/9eee61450932bad3f7224f36cce839cda152965f.map

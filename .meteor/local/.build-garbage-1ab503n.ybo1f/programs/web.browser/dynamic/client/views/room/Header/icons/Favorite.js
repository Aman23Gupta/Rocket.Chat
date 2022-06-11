function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/icons/Favorite.js                                                                          //
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

const Favorite = _ref => {
  let {
    room: {
      _id,
      f: favorited = false
    }
  } = _ref;
  const t = useTranslation();
  const isFavoritesEnabled = useSetting('Favorite_Rooms');
  const toggleFavorite = useMethod('toggleFavorite');
  const handleFavoriteClick = useMutableCallback(() => {
    if (!isFavoritesEnabled) {
      return;
    }

    toggleFavorite(_id, !favorited);
  });
  const favoriteLabel = favorited ? t('Unfavorite') : t('Favorite');
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
//# sourceMappingURL=/dynamic/client/views/room/Header/icons/4b5226694b58d72e7dd05170b5de56d1e5ac9d91.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/AvatarUrlProvider.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["type"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let roomTypes;
module.link("../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 1);
let getURL;
module.link("../../app/utils/lib/getURL", {
  getURL(v) {
    getURL = v;
  }

}, 2);
let AvatarUrlContext;
module.link("../contexts/AvatarUrlContext", {
  AvatarUrlContext(v) {
    AvatarUrlContext = v;
  }

}, 3);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);

const AvatarUrlProvider = _ref => {
  let {
    children
  } = _ref;
  const cdnAvatarUrl = String(useSetting('CDN_PREFIX') || '');
  const externalProviderUrl = String(useSetting('Accounts_AvatarExternalProviderUrl') || '');
  const contextValue = useMemo(() => ({
    getUserPathAvatar: (() => {
      if (externalProviderUrl) {
        return uid => externalProviderUrl.trim().replace(/\/+$/, '').replace('{username}', uid);
      }

      if (cdnAvatarUrl) {
        return (uid, etag) => "".concat(cdnAvatarUrl, "/avatar/").concat(uid).concat(etag ? "?etag=".concat(etag) : '');
      }

      return (uid, etag) => getURL("/avatar/".concat(uid).concat(etag ? "?etag=".concat(etag) : ''));
    })(),
    getRoomPathAvatar: _ref2 => {
      let {
        type
      } = _ref2,
          room = _objectWithoutProperties(_ref2, _excluded);

      return roomTypes.getConfig(type || room.t).getAvatarPath(_objectSpread({
        username: room._id
      }, room));
    }
  }), [externalProviderUrl, cdnAvatarUrl]);
  return /*#__PURE__*/React.createElement(AvatarUrlContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(AvatarUrlProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/519e088895d88926642db423c7f6cb41402fc166.map

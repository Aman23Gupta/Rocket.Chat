function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/BannerRegion.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let banners;
module.link("../../lib/banners", {
  "*"(v) {
    banners = v;
  }

}, 2);
let LegacyBanner;
module.link("./LegacyBanner", {
  default(v) {
    LegacyBanner = v;
  }

}, 3);
let UiKitBanner;
module.link("./UiKitBanner", {
  default(v) {
    UiKitBanner = v;
  }

}, 4);

const BannerRegion = () => {
  const payload = useSubscription(banners.firstSubscription);

  if (!payload) {
    return null;
  }

  if (banners.isLegacyPayload(payload)) {
    return /*#__PURE__*/React.createElement(LegacyBanner, {
      config: payload
    });
  }

  return /*#__PURE__*/React.createElement(UiKitBanner, {
    payload: payload
  });
};

module.exportDefault(BannerRegion);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/banners/d0fd3dc5a13de2d738fdf22af8e938650372d7bf.map

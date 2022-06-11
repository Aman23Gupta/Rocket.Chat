function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/BannerRegion.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var banners;
module.link("../../lib/banners", {
  "*": function (v) {
    banners = v;
  }
}, 2);
var LegacyBanner;
module.link("./LegacyBanner", {
  "default": function (v) {
    LegacyBanner = v;
  }
}, 3);
var UiKitBanner;
module.link("./UiKitBanner", {
  "default": function (v) {
    UiKitBanner = v;
  }
}, 4);

var BannerRegion = function () {
  var payload = useSubscription(banners.firstSubscription);

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
//# sourceMappingURL=/dynamic/client/views/banners/a980fd7c9d8ed5cd02e6bea14b83208d234d8404.map

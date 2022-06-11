function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapView.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 1);
var MapViewFallback;
module.link("./MapViewFallback", {
  "default": function (v) {
    MapViewFallback = v;
  }
}, 2);
var MapViewImage;
module.link("./MapViewImage", {
  "default": function (v) {
    MapViewImage = v;
  }
}, 3);
var useAsyncImage;
module.link("./useAsyncImage", {
  useAsyncImage: function (v) {
    useAsyncImage = v;
  }
}, 4);

var MapView = function (_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude;
  var googleMapsApiKey = useSetting('MapView_GMapsAPIKey');
  var linkUrl = "https://maps.google.com/maps?daddr=" + latitude + "," + longitude;
  var imageUrl = useAsyncImage(googleMapsApiKey ? "https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=250x250&markers=color:gray%7Clabel:%7C" + latitude + "," + longitude + "&key=" + googleMapsApiKey : undefined);

  if (!linkUrl) {
    return null;
  }

  if (!imageUrl) {
    return /*#__PURE__*/React.createElement(MapViewFallback, {
      linkUrl: linkUrl
    });
  }

  return /*#__PURE__*/React.createElement(MapViewImage, {
    linkUrl: linkUrl,
    imageUrl: imageUrl
  });
};

module.exportDefault( /*#__PURE__*/memo(MapView));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/027afdca47f7b5a7b711a166568e5e8ab4def17a.map

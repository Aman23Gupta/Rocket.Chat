function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapView.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 1);
let MapViewFallback;
module.link("./MapViewFallback", {
  default(v) {
    MapViewFallback = v;
  }

}, 2);
let MapViewImage;
module.link("./MapViewImage", {
  default(v) {
    MapViewImage = v;
  }

}, 3);
let useAsyncImage;
module.link("./useAsyncImage", {
  useAsyncImage(v) {
    useAsyncImage = v;
  }

}, 4);

const MapView = _ref => {
  let {
    latitude,
    longitude
  } = _ref;
  const googleMapsApiKey = useSetting('MapView_GMapsAPIKey');
  const linkUrl = "https://maps.google.com/maps?daddr=".concat(latitude, ",").concat(longitude);
  const imageUrl = useAsyncImage(googleMapsApiKey ? "https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=250x250&markers=color:gray%7Clabel:%7C".concat(latitude, ",").concat(longitude, "&key=").concat(googleMapsApiKey) : undefined);

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
//# sourceMappingURL=/dynamic/client/views/location/42aea644f76367506ab5859fce652214245da17a.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MessageLocation.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let MapView;
module.link("./MapView", {
  default(v) {
    MapView = v;
  }

}, 1);

const MessageLocation = _ref => {
  var _location$coordinates;

  let {
    location
  } = _ref;
  const [longitude, latitude] = (_location$coordinates = location === null || location === void 0 ? void 0 : location.coordinates) !== null && _location$coordinates !== void 0 ? _location$coordinates : [];

  if (!latitude || !longitude) {
    return null;
  }

  return /*#__PURE__*/React.createElement(MapView, {
    latitude: latitude,
    longitude: longitude
  });
};

module.exportDefault(MessageLocation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/6a680bef5c4746ba41f1c807c902cd9e2238b7d0.map

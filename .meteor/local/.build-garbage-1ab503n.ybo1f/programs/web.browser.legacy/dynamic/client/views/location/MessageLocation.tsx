function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MessageLocation.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var MapView;
module.link("./MapView", {
  "default": function (v) {
    MapView = v;
  }
}, 1);

var MessageLocation = function (_ref) {
  var _location$coordinates;

  var location = _ref.location;

  var _ref2 = (_location$coordinates = location === null || location === void 0 ? void 0 : location.coordinates) !== null && _location$coordinates !== void 0 ? _location$coordinates : [],
      _ref3 = _slicedToArray(_ref2, 2),
      longitude = _ref3[0],
      latitude = _ref3[1];

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
//# sourceMappingURL=/dynamic/client/views/location/b1f875f09d20cb956c0060b3a10aa9d39af5fa72.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/DotLeader.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var DotLeader = function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'neutral-300' : _ref$color,
      _ref$dotSize = _ref.dotSize,
      dotSize = _ref$dotSize === void 0 ? 'x2' : _ref$dotSize;
  return /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    h: "full",
    alignSelf: "flex-end",
    borderBlockEndStyle: "dotted",
    borderBlockEndWidth: dotSize,
    m: "x2",
    borderColor: color
  });
};

module.exportDefault(DotLeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/b96d824ab9cda239ae5473e81cd4b1c2ed335bdd.map

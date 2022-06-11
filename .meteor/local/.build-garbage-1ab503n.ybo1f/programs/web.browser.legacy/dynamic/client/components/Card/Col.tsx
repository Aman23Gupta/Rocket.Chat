function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/Col.tsx                                                                                      //
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

var Col = function (_ref) {
  var children = _ref.children,
      _ref$span = _ref.span,
      span = _ref$span === void 0 ? 1 : _ref$span;
  var w = span * 228 + (span - 1) * 2 * 24;
  return /*#__PURE__*/React.createElement(Box, {
    "rcx-card-col": true,
    display: "flex",
    alignSelf: "stretch",
    w: "x" + w,
    flexDirection: "column",
    fontScale: "c1"
  }, children);
};

module.exportDefault(Col);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/dac67264bd958544f475b1f14d5d924549ac2871.map

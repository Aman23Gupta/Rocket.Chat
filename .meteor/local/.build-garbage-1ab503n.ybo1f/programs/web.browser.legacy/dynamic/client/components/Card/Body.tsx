function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/Body.tsx                                                                                     //
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

var Body = function (_ref) {
  var children = _ref.children,
      _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection;
  return /*#__PURE__*/React.createElement(Box, {
    mb: "x8",
    display: "flex",
    flexDirection: flexDirection,
    flexGrow: 1
  }, children);
};

module.exportDefault(Body);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/6f09ec92ed5b534c6fed8faa824236eddf299a75.map

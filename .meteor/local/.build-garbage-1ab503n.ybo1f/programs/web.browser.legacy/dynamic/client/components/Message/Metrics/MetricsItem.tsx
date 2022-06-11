function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/MetricsItem.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
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

var MetricsItem = function (props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontScale: "micro",
    color: "info",
    mi: "x4"
  }, props));
};

module.exportDefault(MetricsItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/383c1a962d6e5abbfe84b0062607671b7ecabcf4.map

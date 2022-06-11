function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/MetricsItem.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const MetricsItem = props => /*#__PURE__*/React.createElement(Box, _extends({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontScale: "micro",
  color: "info",
  mi: "x4"
}, props));

module.exportDefault(MetricsItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/3f2ec9ad93f5f8a621e0fa24e1b1d8d5cf2e49ba.map

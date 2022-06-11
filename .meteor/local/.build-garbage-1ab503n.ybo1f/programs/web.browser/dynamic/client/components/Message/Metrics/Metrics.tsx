function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Metrics.tsx                                                                       //
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
let ContentItem;
module.link("./ContentItem", {
  default(v) {
    ContentItem = v;
  }

}, 2);

const Metrics = props => /*#__PURE__*/React.createElement(ContentItem, null, /*#__PURE__*/React.createElement(Box, _extends({
  display: "flex",
  mi: "neg-x4"
}, props)));

module.exportDefault(Metrics);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/3020bc3d59cd8da4b473e8d5ccd70bf068387863.map

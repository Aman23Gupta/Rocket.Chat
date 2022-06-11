function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/Chart.js                                                         //
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
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
const style = {
  minHeight: '250px'
};
const Chart = /*#__PURE__*/forwardRef(function Chart(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    padding: "x20",
    height: "x300"
  }, props), /*#__PURE__*/React.createElement("canvas", {
    ref: ref,
    style: style
  }));
});
module.exportDefault(Chart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/e726242f517578df617062693d494b8aa494405b.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/Chart.js                                                         //
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
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var style = {
  minHeight: '250px'
};
var Chart = /*#__PURE__*/forwardRef(function () {
  function Chart(props, ref) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      padding: "x20",
      height: "x300"
    }, props), /*#__PURE__*/React.createElement("canvas", {
      ref: ref,
      style: style
    }));
  }

  return Chart;
}());
module.exportDefault(Chart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/eb85c3a6c149c193e2c7b5dfb1e82beaad343243.map

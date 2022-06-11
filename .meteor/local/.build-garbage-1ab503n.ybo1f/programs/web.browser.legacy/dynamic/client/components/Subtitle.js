function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Subtitle.js                                                                                       //
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

function Subtitle(props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    color: "default",
    fontFamily: "sans",
    fontScale: "h4",
    marginBlockEnd: "x8",
    withRichContent: true
  }, props));
}

module.exportDefault(Subtitle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/2f3feb0da32b5063c0f83e1f14e0eabb9ab01acf.map

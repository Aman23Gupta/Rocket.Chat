function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Subtitle.js                                                                                       //
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
//# sourceMappingURL=/dynamic/client/components/94783e03ed9be778c2def56cd03f95d8667459d4.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/installation/Wrapper.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

const Wrapper = text => /*#__PURE__*/React.createElement(Box, {
  fontFamily: "mono",
  alignSelf: "center",
  fontScale: "p2",
  style: {
    wordBreak: 'break-all'
  },
  mie: "x4",
  flexGrow: 1,
  withRichContent: true
}, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, text)));

module.exportDefault(Wrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/installation/30a978f1b0f955b40fda23cc66e2e35a6893c590.map

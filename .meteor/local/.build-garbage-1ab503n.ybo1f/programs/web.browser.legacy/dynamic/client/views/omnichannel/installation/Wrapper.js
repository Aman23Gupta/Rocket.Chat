function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/installation/Wrapper.js                                                                    //
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

var Wrapper = function (text) {
  return /*#__PURE__*/React.createElement(Box, {
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
};

module.exportDefault(Wrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/installation/d21869795a084ae139e135dd4f943c6a6bf66795.map

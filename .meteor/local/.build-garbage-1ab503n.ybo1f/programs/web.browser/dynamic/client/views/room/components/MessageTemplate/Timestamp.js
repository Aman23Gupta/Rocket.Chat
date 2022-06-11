function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Timestamp.js                                                           //
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

function Timestamp(_ref) {
  let {
    ts
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    "rcx-message__time": true,
    fontSize: "c1",
    color: "neutral-600",
    flexShrink: 0,
    withTruncatedText: true
  }, ts.toDateString ? ts.toDateString() : ts);
}

module.exportDefault(Timestamp);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/f1b0b95bc264ce9acd7f3f99492056fa05e7234c.map

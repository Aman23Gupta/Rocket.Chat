function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Username.js                                                            //
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

function Username(props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-message__username": true,
    color: "neutral-800",
    fontSize: "x14",
    fontWeight: "600",
    flexShrink: 1,
    withTruncatedText: true
  }, props));
}

module.exportDefault(Username);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/993bb91ff3f1fef8e40e81fa31633eb40c5da696.map

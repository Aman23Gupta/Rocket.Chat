function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Username.js                                                            //
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
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/dc77198f8b64c01d95e427d50127c7eac796eb5e.map

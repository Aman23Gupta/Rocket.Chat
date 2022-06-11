function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Timestamp.js                                                           //
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

function Timestamp(_ref) {
  var ts = _ref.ts;
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
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/000e3c8c91c873ea2a9813b5fa1acd4522711450.map

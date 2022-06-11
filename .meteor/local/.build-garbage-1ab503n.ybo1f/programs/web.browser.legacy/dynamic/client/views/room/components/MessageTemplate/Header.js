function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Header.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

function Header(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    "rcx-message__header": true,
    display: "flex",
    flexGrow: 0,
    flexShrink: 1,
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    mi: "neg-x2",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    withTruncatedText: true,
    flexGrow: 1,
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, " ", children, " ")));
}

module.exportDefault(Header);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/309f247981eee517cf0a360d8ad771b9be74ad81.map

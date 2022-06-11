function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/Header.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

function Header(_ref) {
  let {
    children
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/34b93664caf22e0670721212bb918896b2675f05.map

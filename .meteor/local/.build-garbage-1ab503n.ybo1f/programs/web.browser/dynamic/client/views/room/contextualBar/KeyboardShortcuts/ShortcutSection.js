function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/ShortcutSection.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const ShortcutSection = _ref => {
  let {
    title,
    command
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    is: "section",
    mb: "x16"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    fontWeight: "700"
  }, title), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2"
  }, command));
};

module.exportDefault(ShortcutSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/1aa5cae7078d8cfc4ba89780e02418f37d9d18a5.map

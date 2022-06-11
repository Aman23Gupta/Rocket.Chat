function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/ShortcutSection.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var ShortcutSection = function (_ref) {
  var title = _ref.title,
      command = _ref.command;
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/82519182cf60b5860a87a7fbe8eecf7d957e40cf.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcutsWithClose.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var KeyboardShortcuts;
module.link("./KeyboardShortcuts", {
  "default": function (v) {
    KeyboardShortcuts = v;
  }
}, 2);

var KeyboardShortcutsWithClose = function (_ref) {
  var tabBar = _ref.tabBar;
  var handleClose = useMutableCallback(function () {
    return tabBar && tabBar.close();
  });
  return /*#__PURE__*/React.createElement(KeyboardShortcuts, {
    handleClose: handleClose
  });
};

module.exportDefault( /*#__PURE__*/memo(KeyboardShortcutsWithClose));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/98cfcc4c3c972de908298b6ba5a2ef4588e74959.map

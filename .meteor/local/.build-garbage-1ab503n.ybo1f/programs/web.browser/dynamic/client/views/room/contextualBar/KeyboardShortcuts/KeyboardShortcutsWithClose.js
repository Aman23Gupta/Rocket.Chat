function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcutsWithClose.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let KeyboardShortcuts;
module.link("./KeyboardShortcuts", {
  default(v) {
    KeyboardShortcuts = v;
  }

}, 2);

const KeyboardShortcutsWithClose = _ref => {
  let {
    tabBar
  } = _ref;
  const handleClose = useMutableCallback(() => tabBar && tabBar.close());
  return /*#__PURE__*/React.createElement(KeyboardShortcuts, {
    handleClose: handleClose
  });
};

module.exportDefault( /*#__PURE__*/memo(KeyboardShortcutsWithClose));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/KeyboardShortcuts/df67fd0c67b4105fe65fb941c4617404a42ecfd1.map

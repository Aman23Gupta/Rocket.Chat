function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Role.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Role = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    m: "x2",
    fontScale: "c2"
  }, /*#__PURE__*/React.createElement(Tag, {
    disabled: true,
    children: children
  }));
};

module.exportDefault(Role);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/2bc2b95b58b8a499da41904a89a20bb4ea023de9.map

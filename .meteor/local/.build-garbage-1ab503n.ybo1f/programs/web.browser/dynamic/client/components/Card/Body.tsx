function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/Body.tsx                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

const Body = _ref => {
  let {
    children,
    flexDirection = 'row'
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    mb: "x8",
    display: "flex",
    flexDirection: flexDirection,
    flexGrow: 1
  }, children);
};

module.exportDefault(Body);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/febc9a1382221e7c5e678e9513cf3660c55a9350.map

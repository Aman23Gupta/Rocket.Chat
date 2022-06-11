function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/Col.tsx                                                                                      //
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

const Col = _ref => {
  let {
    children,
    span = 1
  } = _ref;
  const w = span * 228 + (span - 1) * 2 * 24;
  return /*#__PURE__*/React.createElement(Box, {
    "rcx-card-col": true,
    display: "flex",
    alignSelf: "stretch",
    w: "x".concat(w),
    flexDirection: "column",
    fontScale: "c1"
  }, children);
};

module.exportDefault(Col);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/62626545e132f792d69a60ffabec1419b3fb3245.map

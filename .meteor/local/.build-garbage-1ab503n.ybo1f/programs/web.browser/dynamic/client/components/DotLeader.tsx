function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/DotLeader.tsx                                                                                     //
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

const DotLeader = _ref => {
  let {
    color = 'neutral-300',
    dotSize = 'x2'
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    h: "full",
    alignSelf: "flex-end",
    borderBlockEndStyle: "dotted",
    borderBlockEndWidth: dotSize,
    m: "x2",
    borderColor: color
  });
};

module.exportDefault(DotLeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/26bcaa153cd208581b3789b3530e9abe5e976a21.map

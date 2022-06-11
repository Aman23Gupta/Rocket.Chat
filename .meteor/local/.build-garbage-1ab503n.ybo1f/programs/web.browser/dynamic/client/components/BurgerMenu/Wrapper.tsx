function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/Wrapper.tsx                                                                            //
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

const Wrapper = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    is: "span",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBlock: "x4",
    paddingInline: "x2",
    verticalAlign: "middle",
    children: children,
    height: "x24",
    width: "x24"
  });
};

module.exportDefault(Wrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/1cec1bed7a1e28085d20f8370b8860d7749fcb41.map

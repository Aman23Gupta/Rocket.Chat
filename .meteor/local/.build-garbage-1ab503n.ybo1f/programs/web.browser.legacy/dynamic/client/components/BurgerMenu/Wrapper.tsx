function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/Wrapper.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Wrapper = function (_ref) {
  var children = _ref.children;
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
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/464fb3c03064dd2a9a6c986d1a3c38a655131a0b.map

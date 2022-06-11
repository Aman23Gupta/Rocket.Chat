function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/Line.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject, _templateObject2;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);

const Line = _ref => {
  let {
    animated,
    moved
  } = _ref;
  const animatedStyle = animated ? css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\twill-change: transform;\n\t\t\t\ttransition: transform 0.2s ease-out;\n\t\t  "]))) : '';
  const movedStyle = moved ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t&:nth-child(1),\n\t\t\t\t&:nth-child(3) {\n\t\t\t\t\ttransform-origin: 50%, 50%, 0;\n\t\t\t\t}\n\n\t\t\t\t&:nth-child(1) {\n\t\t\t\t\ttransform: translate(-25%, 3px) rotate(-45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t[dir='rtl'] &:nth-child(1) {\n\t\t\t\t\ttransform: translate(25%, 3px) rotate(45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t&:nth-child(3) {\n\t\t\t\t\ttransform: translate(-25%, -3px) rotate(45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t[dir='rtl'] &:nth-child(3) {\n\t\t\t\t\ttransform: translate(25%, -3px) rotate(-45deg) scale(0.5, 1);\n\t\t\t\t}\n\t\t  "]))) : '';
  return /*#__PURE__*/React.createElement(Box, {
    is: "span",
    width: "x20",
    height: "x2",
    backgroundColor: "currentColor",
    className: [animatedStyle, movedStyle],
    "aria-hidden": "true"
  });
};

module.exportDefault(Line);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/7382ed5bb3fa4a6ccb0ddfea7f5de157e27037ac.map

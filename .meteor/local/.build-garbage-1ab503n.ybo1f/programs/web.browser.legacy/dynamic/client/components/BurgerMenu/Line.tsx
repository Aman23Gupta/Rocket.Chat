function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/Line.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject, _templateObject2;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);

var Line = function (_ref) {
  var animated = _ref.animated,
      moved = _ref.moved;
  var animatedStyle = animated ? css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\twill-change: transform;\n\t\t\t\ttransition: transform 0.2s ease-out;\n\t\t  "]))) : '';
  var movedStyle = moved ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n\t\t\t\t&:nth-child(1),\n\t\t\t\t&:nth-child(3) {\n\t\t\t\t\ttransform-origin: 50%, 50%, 0;\n\t\t\t\t}\n\n\t\t\t\t&:nth-child(1) {\n\t\t\t\t\ttransform: translate(-25%, 3px) rotate(-45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t[dir='rtl'] &:nth-child(1) {\n\t\t\t\t\ttransform: translate(25%, 3px) rotate(45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t&:nth-child(3) {\n\t\t\t\t\ttransform: translate(-25%, -3px) rotate(45deg) scale(0.5, 1);\n\t\t\t\t}\n\n\t\t\t\t[dir='rtl'] &:nth-child(3) {\n\t\t\t\t\ttransform: translate(25%, -3px) rotate(-45deg) scale(0.5, 1);\n\t\t\t\t}\n\t\t  "]))) : '';
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
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/4a4a6544c1b09b00f5bb5b300ec18d736dc743c0.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerBadge.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

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
let Box, Badge;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Badge(v) {
    Badge = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);

const BurgerBadge = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tposition: absolute;\n\t\t\tzindex: 3;\n\t\t\ttop: -5px;\n\t\t\tright: -5px;\n\t\t"])))
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "danger",
    children: children
  }));
};

module.exportDefault(BurgerBadge);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/86c56f45362073a7106e94f75dc475cff587a719.map

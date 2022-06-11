function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerBadge.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

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
var Box, Badge;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Badge: function (v) {
    Badge = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);

var BurgerBadge = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\tposition: absolute;\n\t\t\tzindex: 3;\n\t\t\ttop: -5px;\n\t\t\tright: -5px;\n\t\t"])))
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "danger",
    children: children
  }));
};

module.exportDefault(BurgerBadge);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/120e1d76194b3ad3b2f966ed3cfd96ee0767868b.map

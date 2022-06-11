function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/GenericItem.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _excluded = ["href", "active", "children"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
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
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);

var GenericItem = function (_ref) {
  var href = _ref.href,
      active = _ref.active,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "a",
    color: "default",
    pb: "x8",
    pi: "x24",
    href: href,
    className: [active && 'active', css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&.active:focus,\n\t\t\t\t&.active:hover {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-hover);\n\t\t\t\t}\n\n\t\t\t\t&.active {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-active);\n\t\t\t\t}\n\t\t\t"])))].filter(Boolean)
  }, props), /*#__PURE__*/React.createElement(Box, {
    mi: "neg-x4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(GenericItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/056b5b7e77609d132d3e4ee791f04be774bf0cf6.map

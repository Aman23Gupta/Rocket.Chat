function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/GenericItem.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

const _excluded = ["href", "active", "children"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);

const GenericItem = _ref => {
  let {
    href,
    active,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "a",
    color: "default",
    pb: "x8",
    pi: "x24",
    href: href,
    className: [active && 'active', css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t&:hover,\n\t\t\t\t&:focus,\n\t\t\t\t&.active:focus,\n\t\t\t\t&.active:hover {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-hover);\n\t\t\t\t}\n\n\t\t\t\t&.active {\n\t\t\t\t\tbackground-color: var(--sidebar-background-light-active);\n\t\t\t\t}\n\t\t\t"])))].filter(Boolean)
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
//# sourceMappingURL=/dynamic/client/components/Sidebar/978ab682c0eb495062f3a60e337b31e68f472ad8.map

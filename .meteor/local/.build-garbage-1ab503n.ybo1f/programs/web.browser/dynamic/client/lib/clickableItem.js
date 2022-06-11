function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/clickableItem.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

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
module.export({
  clickableItem: () => clickableItem
});
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tcursor: pointer;\n\tborder-bottom: 2px solid ", " !important;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: ", ";\n\t}\n"])), colors.n300, colors.n100); // TODO remove border from here

function clickableItem(Component) {
  var _ref, _Component$displayNam;

  const WrappedComponent = props => /*#__PURE__*/React.createElement(Component, _extends({
    className: clickable,
    tabIndex: 0
  }, props));

  WrappedComponent.displayName = "clickableItem(".concat((_ref = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref !== void 0 ? _ref : 'Component', ")");
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/b4a335f5e445f58336827d65f6bc8b5f228fdd73.map

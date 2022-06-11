function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/clickableItem.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

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
module.export({
  clickableItem: function () {
    return clickableItem;
  }
});
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\tcursor: pointer;\n\tborder-bottom: 2px solid ", " !important;\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: ", ";\n\t}\n"])), colors.n300, colors.n100); // TODO remove border from here

function clickableItem(Component) {
  var _ref, _Component$displayNam;

  var WrappedComponent = function (props) {
    return /*#__PURE__*/React.createElement(Component, _extends({
      className: clickable,
      tabIndex: 0
    }, props));
  };

  WrappedComponent.displayName = "clickableItem(" + ((_ref = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref !== void 0 ? _ref : 'Component') + ")";
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/00921bb09945002373b11409cdc8fb5b2cb19248.map

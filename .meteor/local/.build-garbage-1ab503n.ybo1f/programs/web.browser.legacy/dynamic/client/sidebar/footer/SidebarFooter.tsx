function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/footer/SidebarFooter.tsx                                                                             //
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
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var settings;
module.link("../../../app/settings/client", {
  settings: function (v) {
    settings = v;
  }
}, 4);

var SidebarFooter = function () {
  var sidebarFooterStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t& img {\n\t\t\tmax-width: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t& a:any-link {\n\t\t\tcolor: ", ";\n\t\t\tcolor: var(--rc-color-primary-light, ", ");\n\t\t}\n\t"])), colors.n600, colors.n600);
  return /*#__PURE__*/React.createElement(Box, {
    is: "footer",
    pb: "x12",
    pi: "x16",
    height: "x48",
    width: "auto",
    className: sidebarFooterStyle,
    dangerouslySetInnerHTML: {
      __html: String(settings.get('Layout_Sidenav_Footer')).trim()
    }
  });
};

module.exportDefault(SidebarFooter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/footer/a364d2eac4d8230e03f1298285cb7d2402f33199.map

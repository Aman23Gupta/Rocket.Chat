function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/footer/SidebarFooter.tsx                                                                             //
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
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  default(v) {
    colors = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);
let settings;
module.link("../../../app/settings/client", {
  settings(v) {
    settings = v;
  }

}, 4);

const SidebarFooter = () => {
  const sidebarFooterStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t& img {\n\t\t\tmax-width: 100%;\n\t\t\theight: 100%;\n\t\t}\n\n\t\t& a:any-link {\n\t\t\tcolor: ", ";\n\t\t\tcolor: var(--rc-color-primary-light, ", ");\n\t\t}\n\t"])), colors.n600, colors.n600);
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
//# sourceMappingURL=/dynamic/client/sidebar/footer/069927c4087c5b081248eade9a91145c16099b35.map

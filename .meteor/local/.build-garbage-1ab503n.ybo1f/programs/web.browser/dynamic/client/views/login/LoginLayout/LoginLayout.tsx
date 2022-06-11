function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/LoginLayout.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Footer;
module.link("./Footer", {
  default(v) {
    Footer = v;
  }

}, 1);
let Header;
module.link("./Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useAssetPath;
module.link("./useAssetPath", {
  useAssetPath(v) {
    useAssetPath = v;
  }

}, 3);

const LoginLayout = _ref => {
  let {
    children
  } = _ref;
  const backgroundUrl = useAssetPath('Assets_background');
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color",
    style: backgroundUrl ? {
      backgroundImage: "url('".concat(encodeURI(backgroundUrl), "')")
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement(Header, null), children, /*#__PURE__*/React.createElement(Footer, null)));
};

module.exportDefault(LoginLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/4c3311e9a24d0fd87ac98a4c63165454e38dea43.map

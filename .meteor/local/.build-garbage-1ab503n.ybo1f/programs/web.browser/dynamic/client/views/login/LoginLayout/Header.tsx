function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/Header.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useAssetPath;
module.link("./useAssetPath", {
  useAssetPath(v) {
    useAssetPath = v;
  }

}, 1);

const Header = () => {
  const logoUrl = useAssetPath('Assets_logo');
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: logoUrl
  })));
};

module.exportDefault(Header);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/a71542f77ae55282dc99120dcb9f37ee30e9121a.map

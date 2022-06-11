function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/LoginLayout.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Footer;
module.link("./Footer", {
  "default": function (v) {
    Footer = v;
  }
}, 1);
var Header;
module.link("./Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useAssetPath;
module.link("./useAssetPath", {
  useAssetPath: function (v) {
    useAssetPath = v;
  }
}, 3);

var LoginLayout = function (_ref) {
  var children = _ref.children;
  var backgroundUrl = useAssetPath('Assets_background');
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color",
    style: backgroundUrl ? {
      backgroundImage: "url('" + encodeURI(backgroundUrl) + "')"
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement(Header, null), children, /*#__PURE__*/React.createElement(Footer, null)));
};

module.exportDefault(LoginLayout);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/f776da906e3da8222c9dbdffc73327d4b9dd308f.map

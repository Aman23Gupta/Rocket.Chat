function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/login/LoginLayout/Header.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useAssetPath;
module.link("./useAssetPath", {
  useAssetPath: function (v) {
    useAssetPath = v;
  }
}, 1);

var Header = function () {
  var logoUrl = useAssetPath('Assets_logo');
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
//# sourceMappingURL=/dynamic/client/views/login/LoginLayout/382b70888398f6b8b7264b681fe4e0493a2eb55f.map

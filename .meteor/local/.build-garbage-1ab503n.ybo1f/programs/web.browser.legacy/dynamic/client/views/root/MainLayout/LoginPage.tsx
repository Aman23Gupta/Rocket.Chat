function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/LoginPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var BlazeTemplate;
module.link("../BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 1);
var useIframeLogin;
module.link("./useIframeLogin", {
  useIframeLogin: function (v) {
    useIframeLogin = v;
  }
}, 2);

var LoginPage = function () {
  var iframeLoginUrl = useIframeLogin();

  if (iframeLoginUrl) {
    return /*#__PURE__*/React.createElement("iframe", {
      src: iframeLoginUrl,
      style: {
        height: '100%',
        width: '100%'
      }
    });
  }

  return /*#__PURE__*/React.createElement(BlazeTemplate, {
    template: "loginLayout"
  });
};

module.exportDefault(LoginPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/da1365f3ed9809b481e730dbf8f53c60f52703cc.map

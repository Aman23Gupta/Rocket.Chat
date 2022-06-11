function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/LoginPage.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let BlazeTemplate;
module.link("../BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 1);
let useIframeLogin;
module.link("./useIframeLogin", {
  useIframeLogin(v) {
    useIframeLogin = v;
  }

}, 2);

const LoginPage = () => {
  const iframeLoginUrl = useIframeLogin();

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
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/b627bd95d0605b881d39427a4d58d9b82696e6cd.map

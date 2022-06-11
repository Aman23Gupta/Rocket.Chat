function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useIframeLogin.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useIframeLogin: () => useIframeLogin
});
let iframeLogin;
module.link("../../../../app/ui-utils/client", {
  iframeLogin(v) {
    iframeLogin = v;
  }

}, 0);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 1);

const pollIframeLoginUrl = () => {
  if (!iframeLogin.reactiveEnabled.get()) {
    return undefined;
  }

  return iframeLogin.reactiveIframeUrl.get();
};

const useIframeLogin = () => useReactiveValue(pollIframeLoginUrl);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/5cb1944831089d33246f6ab64d57ca04a1485c84.map

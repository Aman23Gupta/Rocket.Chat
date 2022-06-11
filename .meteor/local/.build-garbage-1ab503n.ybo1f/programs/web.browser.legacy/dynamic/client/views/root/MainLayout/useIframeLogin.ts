function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useIframeLogin.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useIframeLogin: function () {
    return useIframeLogin;
  }
});
var iframeLogin;
module.link("../../../../app/ui-utils/client", {
  iframeLogin: function (v) {
    iframeLogin = v;
  }
}, 0);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 1);

var pollIframeLoginUrl = function () {
  if (!iframeLogin.reactiveEnabled.get()) {
    return undefined;
  }

  return iframeLogin.reactiveIframeUrl.get();
};

var useIframeLogin = function () {
  return useReactiveValue(pollIframeLoginUrl);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/62ed01a287cea657e2805383e9b40094257e1dff.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useClipboardWithToast.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  "default": function () {
    return useClipboardWithToast;
  }
});
var useClipboard, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useClipboard: function (v) {
    useClipboard = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 1);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

function useClipboardWithToast(text) {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  return useClipboard(text, {
    onCopySuccess: useMutableCallback(function () {
      return dispatchToastMessage({
        type: 'success',
        message: t('Copied')
      });
    }),
    onCopyError: useMutableCallback(function (e) {
      return dispatchToastMessage({
        type: 'error',
        message: e
      });
    })
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/0e9e5e78f6a4c8b9b353c49203e5ab223053f0a1.map

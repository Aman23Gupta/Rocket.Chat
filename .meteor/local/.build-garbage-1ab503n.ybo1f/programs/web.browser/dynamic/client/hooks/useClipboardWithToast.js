function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useClipboardWithToast.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  default: () => useClipboardWithToast
});
let useClipboard, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useClipboard(v) {
    useClipboard = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 1);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

function useClipboardWithToast(text) {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  return useClipboard(text, {
    onCopySuccess: useMutableCallback(() => dispatchToastMessage({
      type: 'success',
      message: t('Copied')
    })),
    onCopyError: useMutableCallback(e => dispatchToastMessage({
      type: 'error',
      message: e
    }))
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/1eb0665ff51bce1aa6414aa23817a7aa8b43060a.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/useErrorHandler.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useErrorHandler: () => useErrorHandler
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const useErrorHandler = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback((error, defaultMessage) => {
    var _error$xhr, _error$xhr$responseJS;

    console.error(error);

    if (typeof error === 'string') {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      return;
    }

    const errorType = error === null || error === void 0 ? void 0 : (_error$xhr = error.xhr) === null || _error$xhr === void 0 ? void 0 : (_error$xhr$responseJS = _error$xhr.responseJSON) === null || _error$xhr$responseJS === void 0 ? void 0 : _error$xhr$responseJS.errorType;

    if (typeof errorType === 'string' && t.has(errorType)) {
      dispatchToastMessage({
        type: 'error',
        message: t(errorType)
      });
      return;
    }

    if (typeof (errorType === null || errorType === void 0 ? void 0 : errorType.error) === 'string' && t.has(errorType.error)) {
      dispatchToastMessage({
        type: 'error',
        message: t(errorType === null || errorType === void 0 ? void 0 : errorType.error)
      });
      return;
    }

    if (defaultMessage) {
      dispatchToastMessage({
        type: 'error',
        message: defaultMessage
      });
    }
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/5c8a121e2a0e7a89dfa1932e72ed20c4472387ff.map

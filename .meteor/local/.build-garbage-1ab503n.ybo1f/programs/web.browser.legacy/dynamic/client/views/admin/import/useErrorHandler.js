function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/useErrorHandler.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useErrorHandler: function () {
    return useErrorHandler;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var useErrorHandler = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  return useMutableCallback(function (error, defaultMessage) {
    var _error$xhr, _error$xhr$responseJS;

    console.error(error);

    if (typeof error === 'string') {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      return;
    }

    var errorType = error === null || error === void 0 ? void 0 : (_error$xhr = error.xhr) === null || _error$xhr === void 0 ? void 0 : (_error$xhr$responseJS = _error$xhr.responseJSON) === null || _error$xhr$responseJS === void 0 ? void 0 : _error$xhr$responseJS.errorType;

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
//# sourceMappingURL=/dynamic/client/views/admin/import/b669f4b7fda1c7a9b7bac81dc14c1536d49a73b5.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEndpointUpload.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useEndpointUpload: () => useEndpointUpload
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useUpload;
module.link("../contexts/ServerContext", {
  useUpload(v) {
    useUpload = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);

const useEndpointUpload = function (endpoint) {
  let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let successMessage = arguments.length > 2 ? arguments[2] : undefined;
  const sendData = useUpload(endpoint);
  const dispatchToastMessage = useToastMessageDispatch();
  return useCallback(async function () {
    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      let data = sendData(params, ...args);
      const promise = data instanceof Promise ? data : data.promise;
      data = await promise;

      if (!data.success) {
        throw new Error(data.status);
      }

      successMessage && dispatchToastMessage({
        type: 'success',
        message: successMessage
      });
      return data;
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      return {
        success: false
      };
    }
  }, [dispatchToastMessage, params, sendData, successMessage]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/308b3fd43ea85d9de09ddbea891ee71c83acbfa7.map

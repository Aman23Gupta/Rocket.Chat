function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useEndpointAction.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useEndpointAction: () => useEndpointAction
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useEndpoint;
module.link("../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useToastMessageDispatch;
module.link("../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 2);

const useEndpointAction = function (method, path) {
  let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let successMessage = arguments.length > 3 ? arguments[3] : undefined;
  const sendData = useEndpoint(method, path);
  const dispatchToastMessage = useToastMessageDispatch();
  return useCallback(async () => {
    try {
      const data = await sendData(params);

      if (successMessage) {
        dispatchToastMessage({
          type: 'success',
          message: successMessage
        });
      }

      return data;
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
      throw error;
    }
  }, [dispatchToastMessage, params, sendData, successMessage]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/dc538e810eaa0767e3fd8dc45edd92cf1b2ec40b.map

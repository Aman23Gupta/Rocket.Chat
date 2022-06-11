function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/ConnectionStatusContext.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ConnectionStatusContext: () => ConnectionStatusContext,
  useConnectionStatus: () => useConnectionStatus
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
const ConnectionStatusContext = /*#__PURE__*/createContext({
  connected: true,
  status: 'connected',
  reconnect: () => undefined
});

const useConnectionStatus = () => useContext(ConnectionStatusContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/575d6ba1347c14e50e072c0409656af0f6d41878.map

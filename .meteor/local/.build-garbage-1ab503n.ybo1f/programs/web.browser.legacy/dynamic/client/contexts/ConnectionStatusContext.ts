function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/ConnectionStatusContext.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ConnectionStatusContext: function () {
    return ConnectionStatusContext;
  },
  useConnectionStatus: function () {
    return useConnectionStatus;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var ConnectionStatusContext = /*#__PURE__*/createContext({
  connected: true,
  status: 'connected',
  reconnect: function () {
    return undefined;
  }
});

var useConnectionStatus = function () {
  return useContext(ConnectionStatusContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/ae7c5d7aead38d668bfe30a4074ab4400df28a31.map

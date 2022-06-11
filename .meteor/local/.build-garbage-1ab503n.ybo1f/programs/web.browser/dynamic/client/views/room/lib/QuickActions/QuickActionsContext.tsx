function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/QuickActions/QuickActionsContext.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  QuickActionsContext: () => QuickActionsContext,
  useQuickActionsContext: () => useQuickActionsContext
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
let actions, listen;
module.link(".", {
  actions(v) {
    actions = v;
  },

  listen(v) {
    listen = v;
  }

}, 1);
module.link("./defaultActions");
const QuickActionsContext = /*#__PURE__*/createContext({
  actions,
  listen
});

const useQuickActionsContext = () => useContext(QuickActionsContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/QuickActions/e5659a584573ecc9b4c416ae8add63c5ba23ea0c.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/QuickActions/QuickActionsContext.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  QuickActionsContext: function () {
    return QuickActionsContext;
  },
  useQuickActionsContext: function () {
    return useQuickActionsContext;
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
var actions, listen;
module.link(".", {
  actions: function (v) {
    actions = v;
  },
  listen: function (v) {
    listen = v;
  }
}, 1);
module.link("./defaultActions");
var QuickActionsContext = /*#__PURE__*/createContext({
  actions: actions,
  listen: listen
});

var useQuickActionsContext = function () {
  return useContext(QuickActionsContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/QuickActions/4582ef09c45e7f36dea167c45611118cae5057e1.map

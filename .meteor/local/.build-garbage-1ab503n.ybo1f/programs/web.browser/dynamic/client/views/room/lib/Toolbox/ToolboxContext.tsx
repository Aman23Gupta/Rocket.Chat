function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/Toolbox/ToolboxContext.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ToolboxContext: () => ToolboxContext,
  useToolboxContext: () => useToolboxContext
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
const ToolboxContext = /*#__PURE__*/createContext({
  actions,
  listen,
  open: () => null,
  openUserInfo: () => null,
  close: () => null
});

const useToolboxContext = () => useContext(ToolboxContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/Toolbox/22b00dad97395edc6d38e48d3c1ddd47a1b4690e.map

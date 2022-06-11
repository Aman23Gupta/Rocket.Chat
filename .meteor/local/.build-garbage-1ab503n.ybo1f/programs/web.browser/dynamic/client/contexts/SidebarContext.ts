function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/SidebarContext.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SidebarContext: () => SidebarContext,
  useSidebar: () => useSidebar
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
const SidebarContext = /*#__PURE__*/createContext([false, () => undefined]);

const useSidebar = () => useContext(SidebarContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/a6d180fe28c1bab95a425dc3fa45d0516b1d33f3.map

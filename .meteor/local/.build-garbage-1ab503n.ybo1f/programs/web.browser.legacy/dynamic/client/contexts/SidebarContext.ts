function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/SidebarContext.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SidebarContext: function () {
    return SidebarContext;
  },
  useSidebar: function () {
    return useSidebar;
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
var SidebarContext = /*#__PURE__*/createContext([false, function () {
  return undefined;
}]);

var useSidebar = function () {
  return useContext(SidebarContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/2222dd56cb11c80e74faaafe0c6f565565314458.map

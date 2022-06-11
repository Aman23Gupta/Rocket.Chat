function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/lib/Toolbox/ToolboxContext.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ToolboxContext: function () {
    return ToolboxContext;
  },
  useToolboxContext: function () {
    return useToolboxContext;
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
var ToolboxContext = /*#__PURE__*/createContext({
  actions: actions,
  listen: listen,
  open: function () {
    return null;
  },
  openUserInfo: function () {
    return null;
  },
  close: function () {
    return null;
  }
});

var useToolboxContext = function () {
  return useContext(ToolboxContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/lib/Toolbox/60ae638d6f43102d590ea59892d8f84e5e68ad54.map

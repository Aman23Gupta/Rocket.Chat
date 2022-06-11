function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsContext.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AppsContext: function () {
    return AppsContext;
  },
  useAppsReload: function () {
    return useAppsReload;
  },
  useAppsResult: function () {
    return useAppsResult;
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
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 1);
var AppsContext = /*#__PURE__*/createContext({
  installedApps: {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined
  },
  marketplaceApps: {
    phase: AsyncStatePhase.LOADING,
    value: undefined,
    error: undefined
  },
  reload: function () {
    return Promise.resolve();
  }
});

var useAppsReload = function () {
  var _useContext = useContext(AppsContext),
      reload = _useContext.reload;

  return reload;
};

var useAppsResult = function () {
  return useContext(AppsContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/fdda157829ac94b630937c0f40650bd9c8647824.map

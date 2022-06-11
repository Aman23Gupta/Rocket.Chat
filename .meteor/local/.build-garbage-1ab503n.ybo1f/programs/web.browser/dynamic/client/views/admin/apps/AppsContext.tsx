function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppsContext.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AppsContext: () => AppsContext,
  useAppsReload: () => useAppsReload,
  useAppsResult: () => useAppsResult
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
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 1);
const AppsContext = /*#__PURE__*/createContext({
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
  reload: () => Promise.resolve()
});

const useAppsReload = () => {
  const {
    reload
  } = useContext(AppsContext);
  return reload;
};

const useAppsResult = () => useContext(AppsContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/133e0f9b58084bd359c7fc349576d151f9746ebb.map

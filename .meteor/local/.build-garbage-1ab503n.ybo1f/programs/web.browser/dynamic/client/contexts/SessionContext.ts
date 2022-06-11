function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/SessionContext.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SessionContext: () => SessionContext,
  useSession: () => useSession,
  useSessionDispatch: () => useSessionDispatch
});
let createContext, useCallback, useContext, useMemo;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useContext(v) {
    useContext = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
const SessionContext = /*#__PURE__*/createContext({
  query: () => ({
    getCurrentValue: () => undefined,
    subscribe: () => () => undefined
  }),
  dispatch: () => undefined
});

const useSession = name => {
  const {
    query
  } = useContext(SessionContext);
  const subscription = useMemo(() => query(name), [query, name]);
  return useSubscription(subscription);
};

const useSessionDispatch = name => {
  const {
    dispatch
  } = useContext(SessionContext);
  return useCallback(value => dispatch(name, value), [dispatch, name]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/befc00ff27b2338aa97056d30923f366a0146537.map

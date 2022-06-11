function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/SessionContext.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SessionContext: function () {
    return SessionContext;
  },
  useSession: function () {
    return useSession;
  },
  useSessionDispatch: function () {
    return useSessionDispatch;
  }
});
var createContext, useCallback, useContext, useMemo;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useContext: function (v) {
    useContext = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var SessionContext = /*#__PURE__*/createContext({
  query: function () {
    return {
      getCurrentValue: function () {
        return undefined;
      },
      subscribe: function () {
        return function () {
          return undefined;
        };
      }
    };
  },
  dispatch: function () {
    return undefined;
  }
});

var useSession = function (name) {
  var _useContext = useContext(SessionContext),
      query = _useContext.query;

  var subscription = useMemo(function () {
    return query(name);
  }, [query, name]);
  return useSubscription(subscription);
};

var useSessionDispatch = function (name) {
  var _useContext2 = useContext(SessionContext),
      dispatch = _useContext2.dispatch;

  return useCallback(function (value) {
    return dispatch(name, value);
  }, [dispatch, name]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/d8a37e520e7ff06145f623c9f2533d7c9f6a1e8c.map

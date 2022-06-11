function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/ToolboxProvider.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useTabContext: () => useTabContext,
  useTab: () => useTab,
  useTabBarOpen: () => useTabBarOpen,
  useTabBarClose: () => useTabBarClose,
  useTabBarOpenUserInfo: () => useTabBarOpenUserInfo
});
let useDebouncedState, useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState(v) {
    useDebouncedState = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useSafely(v) {
    useSafely = v;
  }

}, 0);
let React, useContext, useMemo, useState, useLayoutEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useContext(v) {
    useContext = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useLayoutEffect(v) {
    useLayoutEffect = v;
  }

}, 1);
let useCurrentRoute, useRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 2);
let useSession;
module.link("../../../contexts/SessionContext", {
  useSession(v) {
    useSession = v;
  }

}, 3);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 5);
let ToolboxContext;
module.link("../lib/Toolbox/ToolboxContext", {
  ToolboxContext(v) {
    ToolboxContext = v;
  }

}, 6);
let VirtualAction;
module.link("./VirtualAction", {
  default(v) {
    VirtualAction = v;
  }

}, 7);

const useToolboxActions = room => {
  const {
    listen,
    actions
  } = useContext(ToolboxContext);
  const [state, setState] = useState(Array.from(actions.entries()));
  useLayoutEffect(() => {
    const stop = listen(actions => {
      setState(Array.from(actions.entries()));
    });
    return () => {
      stop();
    };
  }, [listen, room, setState]);
  return {
    listen,
    actions: state
  };
};

const ToolboxProvider = _ref => {
  let {
    children,
    room
  } = _ref;
  const allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  const uid = useUserId();
  const [activeTabBar, setActiveTabBar] = useState([undefined]);
  const [list, setList] = useSafely(useDebouncedState(new Map(), 5));
  const handleChange = useMutableCallback(fn => {
    fn(list);
    setList(list => new Map(list));
  });
  const {
    listen,
    actions
  } = useToolboxActions(room);
  const [routeName, params] = useCurrentRoute();
  const router = useRoute(routeName || '');
  const currentRoom = useSession('openedRoom');
  const tab = params === null || params === void 0 ? void 0 : params.tab;
  const context = params === null || params === void 0 ? void 0 : params.context;
  const close = useMutableCallback(() => {
    router.push(_objectSpread(_objectSpread({}, params), {}, {
      tab: '',
      context: ''
    }));
  });
  const open = useMutableCallback((actionId, context) => {
    var _activeTabBar$;

    if (actionId === ((_activeTabBar$ = activeTabBar[0]) === null || _activeTabBar$ === void 0 ? void 0 : _activeTabBar$.id) && context === undefined) {
      return close();
    }

    router.push(_objectSpread(_objectSpread({}, params), {}, {
      tab: actionId,
      context
    }));
  });
  const openUserInfo = useMutableCallback(username => {
    var _room$uids;

    switch (room.t) {
      case 'l':
        open('room-info', username);
        break;

      case 'd':
        ((_room$uids = room.uids) === null || _room$uids === void 0 ? void 0 : _room$uids.length) > 2 ? open('user-info-group', username) : open('user-info', username);
        break;

      default:
        open('members-list', username);
        break;
    }
  });
  useLayoutEffect(() => {
    if (!tab) {
      setActiveTabBar([undefined, undefined]);
    }

    setActiveTabBar([list.get(tab), context]);
  }, [tab, list, currentRoom, context]);
  const contextValue = useMemo(() => ({
    listen,
    actions: new Map(list),
    activeTabBar: activeTabBar[0],
    context: activeTabBar[1],
    open,
    close,
    openUserInfo
  }), [listen, list, activeTabBar, open, close, openUserInfo]);
  return /*#__PURE__*/React.createElement(ToolboxContext.Provider, {
    value: contextValue
  }, actions.filter(_ref2 => {
    let [, action] = _ref2;
    return uid || allowAnonymousRead && action.hasOwnProperty('anonymous') && action.anonymous;
  }).map(_ref3 => {
    let [id, item] = _ref3;
    return /*#__PURE__*/React.createElement(VirtualAction, {
      action: item,
      room: room,
      id: id,
      key: id + room._id,
      handleChange: handleChange
    });
  }), children);
};

const useTabContext = () => useContext(ToolboxContext).context;

const useTab = () => useContext(ToolboxContext).activeTabBar;

const useTabBarOpen = () => useContext(ToolboxContext).open;

const useTabBarClose = () => useContext(ToolboxContext).close;

const useTabBarOpenUserInfo = () => useContext(ToolboxContext).openUserInfo;

module.exportDefault(ToolboxProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/providers/074e48373ca020e28499bb652c2038fe4f1fefdd.map

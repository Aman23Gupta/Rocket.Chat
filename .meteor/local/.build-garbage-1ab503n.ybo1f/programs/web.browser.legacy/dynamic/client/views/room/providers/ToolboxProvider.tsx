function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/providers/ToolboxProvider.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useTabContext: function () {
    return useTabContext;
  },
  useTab: function () {
    return useTab;
  },
  useTabBarOpen: function () {
    return useTabBarOpen;
  },
  useTabBarClose: function () {
    return useTabBarClose;
  },
  useTabBarOpenUserInfo: function () {
    return useTabBarOpenUserInfo;
  }
});
var useDebouncedState, useMutableCallback, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedState: function (v) {
    useDebouncedState = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useSafely: function (v) {
    useSafely = v;
  }
}, 0);
var React, useContext, useMemo, useState, useLayoutEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useContext: function (v) {
    useContext = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  }
}, 1);
var useCurrentRoute, useRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useSession;
module.link("../../../contexts/SessionContext", {
  useSession: function (v) {
    useSession = v;
  }
}, 3);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 5);
var ToolboxContext;
module.link("../lib/Toolbox/ToolboxContext", {
  ToolboxContext: function (v) {
    ToolboxContext = v;
  }
}, 6);
var VirtualAction;
module.link("./VirtualAction", {
  "default": function (v) {
    VirtualAction = v;
  }
}, 7);

var useToolboxActions = function (room) {
  var _useContext = useContext(ToolboxContext),
      listen = _useContext.listen,
      actions = _useContext.actions;

  var _useState = useState(Array.from(actions.entries())),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  useLayoutEffect(function () {
    var stop = listen(function (actions) {
      setState(Array.from(actions.entries()));
    });
    return function () {
      stop();
    };
  }, [listen, room, setState]);
  return {
    listen: listen,
    actions: state
  };
};

var ToolboxProvider = function (_ref) {
  var children = _ref.children,
      room = _ref.room;
  var allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');
  var uid = useUserId();

  var _useState3 = useState([undefined]),
      _useState4 = _slicedToArray(_useState3, 2),
      activeTabBar = _useState4[0],
      setActiveTabBar = _useState4[1];

  var _useSafely = useSafely(useDebouncedState(new Map(), 5)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      list = _useSafely2[0],
      setList = _useSafely2[1];

  var handleChange = useMutableCallback(function (fn) {
    fn(list);
    setList(function (list) {
      return new Map(list);
    });
  });

  var _useToolboxActions = useToolboxActions(room),
      listen = _useToolboxActions.listen,
      actions = _useToolboxActions.actions;

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 2),
      routeName = _useCurrentRoute2[0],
      params = _useCurrentRoute2[1];

  var router = useRoute(routeName || '');
  var currentRoom = useSession('openedRoom');
  var tab = params === null || params === void 0 ? void 0 : params.tab;
  var context = params === null || params === void 0 ? void 0 : params.context;
  var close = useMutableCallback(function () {
    router.push(_objectSpread(_objectSpread({}, params), {}, {
      tab: '',
      context: ''
    }));
  });
  var open = useMutableCallback(function (actionId, context) {
    var _activeTabBar$;

    if (actionId === ((_activeTabBar$ = activeTabBar[0]) === null || _activeTabBar$ === void 0 ? void 0 : _activeTabBar$.id) && context === undefined) {
      return close();
    }

    router.push(_objectSpread(_objectSpread({}, params), {}, {
      tab: actionId,
      context: context
    }));
  });
  var openUserInfo = useMutableCallback(function (username) {
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
  useLayoutEffect(function () {
    if (!tab) {
      setActiveTabBar([undefined, undefined]);
    }

    setActiveTabBar([list.get(tab), context]);
  }, [tab, list, currentRoom, context]);
  var contextValue = useMemo(function () {
    return {
      listen: listen,
      actions: new Map(list),
      activeTabBar: activeTabBar[0],
      context: activeTabBar[1],
      open: open,
      close: close,
      openUserInfo: openUserInfo
    };
  }, [listen, list, activeTabBar, open, close, openUserInfo]);
  return /*#__PURE__*/React.createElement(ToolboxContext.Provider, {
    value: contextValue
  }, actions.filter(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        action = _ref3[1];

    return uid || allowAnonymousRead && action.hasOwnProperty('anonymous') && action.anonymous;
  }).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        id = _ref5[0],
        item = _ref5[1];

    return /*#__PURE__*/React.createElement(VirtualAction, {
      action: item,
      room: room,
      id: id,
      key: id + room._id,
      handleChange: handleChange
    });
  }), children);
};

var useTabContext = function () {
  return useContext(ToolboxContext).context;
};

var useTab = function () {
  return useContext(ToolboxContext).activeTabBar;
};

var useTabBarOpen = function () {
  return useContext(ToolboxContext).open;
};

var useTabBarClose = function () {
  return useContext(ToolboxContext).close;
};

var useTabBarOpenUserInfo = function () {
  return useContext(ToolboxContext).openUserInfo;
};

module.exportDefault(ToolboxProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/providers/1d884e5595a323e95648472a111d5092a68b6489.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/Room.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useDebugValue, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useDebugValue: function (v) {
    useDebugValue = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var ErrorBoundary;
module.link("../../../components/ErrorBoundary", {
  ErrorBoundary: function (v) {
    ErrorBoundary = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 4);
var Header;
module.link("../Header", {
  "default": function (v) {
    Header = v;
  }
}, 5);
var BlazeTemplate;
module.link("../components/BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 6);
var RoomTemplate;
module.link("../components/RoomTemplate/RoomTemplate", {
  RoomTemplate: function (v) {
    RoomTemplate = v;
  }
}, 7);
var VerticalBarOldActions;
module.link("../components/VerticalBarOldActions", {
  "default": function (v) {
    VerticalBarOldActions = v;
  }
}, 8);
var useRoom;
module.link("../contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 9);
var AppsContextualBar;
module.link("../contextualBar/Apps", {
  "default": function (v) {
    AppsContextualBar = v;
  }
}, 10);
var useAppsContextualBar;
module.link("../hooks/useAppsContextualBar", {
  useAppsContextualBar: function (v) {
    useAppsContextualBar = v;
  }
}, 11);
var useTab, useTabBarOpen, useTabBarClose, useTabBarOpenUserInfo;
module.link("../providers/ToolboxProvider", {
  useTab: function (v) {
    useTab = v;
  },
  useTabBarOpen: function (v) {
    useTabBarOpen = v;
  },
  useTabBarClose: function (v) {
    useTabBarClose = v;
  },
  useTabBarOpenUserInfo: function (v) {
    useTabBarOpenUserInfo = v;
  }
}, 12);
var Aside;
module.link("./Aside", {
  "default": function (v) {
    Aside = v;
  }
}, 13);
var Body;
module.link("./Body", {
  "default": function (v) {
    Body = v;
  }
}, 14);
var Footer;
module.link("./Footer", {
  "default": function (v) {
    Footer = v;
  }
}, 15);
var LazyComponent;
module.link("./LazyComponent", {
  "default": function (v) {
    LazyComponent = v;
  }
}, 16);

var Room = function () {
  var t = useTranslation();
  var room = useRoom();
  var tab = useTab();
  var open = useTabBarOpen();
  var close = useTabBarClose();
  var openUserInfo = useTabBarOpenUserInfo();
  var hideFlexTab = useUserPreference('hideFlexTab');
  var isOpen = useMutableCallback(function () {
    return !!(tab && tab.template);
  });
  var appsContextualBarContext = useAppsContextualBar();
  var tabBar = useMemo(function () {
    return {
      open: open,
      close: close,
      isOpen: isOpen,
      openUserInfo: openUserInfo
    };
  }, [open, close, isOpen, openUserInfo]);
  useDebugValue(room);
  useDebugValue(tab);
  return /*#__PURE__*/React.createElement(RoomTemplate, {
    "aria-label": t('Channel'),
    "data-qa-rc-room": room._id
  }, /*#__PURE__*/React.createElement(RoomTemplate.Header, null, /*#__PURE__*/React.createElement(Header, {
    room: room,
    rid: room._id
  })), /*#__PURE__*/React.createElement(RoomTemplate.Body, null, /*#__PURE__*/React.createElement(BlazeTemplate, {
    onClick: hideFlexTab ? close : undefined,
    name: "roomOld",
    tabBar: tabBar,
    rid: room._id,
    _id: room._id
  })), tab && /*#__PURE__*/React.createElement(RoomTemplate.Aside, {
    "data-qa-tabbar-name": tab.id
  }, /*#__PURE__*/React.createElement(ErrorBoundary, null, typeof tab.template === 'string' && /*#__PURE__*/React.createElement(VerticalBarOldActions, _extends({}, tab, {
    name: tab.template,
    tabBar: tabBar,
    rid: room._id,
    _id: room._id
  })), typeof tab.template !== 'string' && /*#__PURE__*/React.createElement(LazyComponent, {
    template: tab.template,
    tabBar: tabBar,
    rid: room._id,
    teamId: room.teamId,
    _id: room._id
  }))), appsContextualBarContext && /*#__PURE__*/React.createElement(RoomTemplate.Aside, {
    "data-qa-tabbar-name": appsContextualBarContext.viewId
  }, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(LazyComponent, {
    template: AppsContextualBar,
    viewId: appsContextualBarContext.viewId,
    roomId: appsContextualBarContext.roomId,
    payload: appsContextualBarContext.payload,
    appInfo: appsContextualBarContext.appInfo
  }))));
};

module.exportDefault(Object.assign(Room, {
  Header: Header,
  Body: Body,
  Footer: Footer,
  Aside: Aside
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/a8ba8656d0b7f70ee0f12812badae8fe19051c79.map

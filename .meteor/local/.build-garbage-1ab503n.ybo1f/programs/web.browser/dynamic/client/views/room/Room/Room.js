function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/Room.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useDebugValue, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useDebugValue(v) {
    useDebugValue = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let ErrorBoundary;
module.link("../../../components/ErrorBoundary", {
  ErrorBoundary(v) {
    ErrorBoundary = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useUserPreference;
module.link("../../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 4);
let Header;
module.link("../Header", {
  default(v) {
    Header = v;
  }

}, 5);
let BlazeTemplate;
module.link("../components/BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 6);
let RoomTemplate;
module.link("../components/RoomTemplate/RoomTemplate", {
  RoomTemplate(v) {
    RoomTemplate = v;
  }

}, 7);
let VerticalBarOldActions;
module.link("../components/VerticalBarOldActions", {
  default(v) {
    VerticalBarOldActions = v;
  }

}, 8);
let useRoom;
module.link("../contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 9);
let AppsContextualBar;
module.link("../contextualBar/Apps", {
  default(v) {
    AppsContextualBar = v;
  }

}, 10);
let useAppsContextualBar;
module.link("../hooks/useAppsContextualBar", {
  useAppsContextualBar(v) {
    useAppsContextualBar = v;
  }

}, 11);
let useTab, useTabBarOpen, useTabBarClose, useTabBarOpenUserInfo;
module.link("../providers/ToolboxProvider", {
  useTab(v) {
    useTab = v;
  },

  useTabBarOpen(v) {
    useTabBarOpen = v;
  },

  useTabBarClose(v) {
    useTabBarClose = v;
  },

  useTabBarOpenUserInfo(v) {
    useTabBarOpenUserInfo = v;
  }

}, 12);
let Aside;
module.link("./Aside", {
  default(v) {
    Aside = v;
  }

}, 13);
let Body;
module.link("./Body", {
  default(v) {
    Body = v;
  }

}, 14);
let Footer;
module.link("./Footer", {
  default(v) {
    Footer = v;
  }

}, 15);
let LazyComponent;
module.link("./LazyComponent", {
  default(v) {
    LazyComponent = v;
  }

}, 16);

const Room = () => {
  const t = useTranslation();
  const room = useRoom();
  const tab = useTab();
  const open = useTabBarOpen();
  const close = useTabBarClose();
  const openUserInfo = useTabBarOpenUserInfo();
  const hideFlexTab = useUserPreference('hideFlexTab');
  const isOpen = useMutableCallback(() => !!(tab && tab.template));
  const appsContextualBarContext = useAppsContextualBar();
  const tabBar = useMemo(() => ({
    open,
    close,
    isOpen,
    openUserInfo
  }), [open, close, isOpen, openUserInfo]);
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
  Header,
  Body,
  Footer,
  Aside
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/51461ee4ef1f2bb17449b84d654237ce231c2228.map

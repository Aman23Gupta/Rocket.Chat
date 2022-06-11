function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/SideBarItemTemplateWithData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Badge, Sidebar;
module.link("@rocket.chat/fuselage", {
  Badge(v) {
    Badge = v;
  },

  Sidebar(v) {
    Sidebar = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let roomTypes;
module.link("../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 2);
let RoomIcon;
module.link("../../components/RoomIcon", {
  RoomIcon(v) {
    RoomIcon = v;
  }

}, 3);
let useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 4);
let RoomMenu;
module.link("../RoomMenu", {
  default(v) {
    RoomMenu = v;
  }

}, 5);
let normalizeSidebarMessage;
module.link("./normalizeSidebarMessage", {
  normalizeSidebarMessage(v) {
    normalizeSidebarMessage = v;
  }

}, 6);

const getMessage = (room, lastMessage, t) => {
  var _lastMessage$u, _room$u;

  if (!lastMessage) {
    return t('No_messages_yet');
  }

  if (!lastMessage.u) {
    return normalizeSidebarMessage(lastMessage, t);
  }

  if (((_lastMessage$u = lastMessage.u) === null || _lastMessage$u === void 0 ? void 0 : _lastMessage$u.username) === ((_room$u = room.u) === null || _room$u === void 0 ? void 0 : _room$u.username)) {
    return "".concat(t('You'), ": ").concat(normalizeSidebarMessage(lastMessage, t));
  }

  if (room.t === 'd' && room.uids && room.uids.length <= 2) {
    return normalizeSidebarMessage(lastMessage, t);
  }

  return "".concat(lastMessage.u.name || lastMessage.u.username, ": ").concat(normalizeSidebarMessage(lastMessage, t));
};

function SideBarItemTemplateWithData(_ref) {
  let {
    room,
    id,
    extended,
    selected,
    SideBarItemTemplate,
    AvatarTemplate,
    t,
    style,
    // sidebarViewMode,
    isAnonymous
  } = _ref;
  const {
    sidebar
  } = useLayout();
  const href = roomTypes.getRouteLink(room.t, room);
  const title = roomTypes.getRoomName(room.t, room);
  const {
    lastMessage,
    hideUnreadStatus,
    unread = 0,
    alert,
    userMentions,
    groupMentions,
    tunread = [],
    tunreadUser = [],
    rid,
    t: type,
    cl
  } = room;
  const highlighted = !hideUnreadStatus && (alert || unread);
  const icon = /*#__PURE__*/React.createElement(Sidebar.Item.Icon, {
    highlighted: highlighted
  }, /*#__PURE__*/React.createElement(RoomIcon, {
    highlighted: highlighted,
    room: room,
    placement: "sidebar"
  }));
  const isQueued = room.status === 'queued';
  const threadUnread = tunread.length > 0;
  const message = extended && getMessage(room, lastMessage, t);
  const subtitle = message ? /*#__PURE__*/React.createElement("span", {
    className: "message-body--unstyled",
    dangerouslySetInnerHTML: {
      __html: message
    }
  }) : null;
  const variant = (userMentions || tunreadUser.length) && 'danger' || threadUnread && 'primary' || groupMentions && 'warning' || 'ghost';
  const isUnread = unread > 0 || threadUnread;
  const badges = !hideUnreadStatus && isUnread ? /*#__PURE__*/React.createElement(Badge, {
    style: {
      flexShrink: 0
    },
    variant: variant
  }, unread + (tunread === null || tunread === void 0 ? void 0 : tunread.length)) : null;
  return /*#__PURE__*/React.createElement(SideBarItemTemplate, {
    is: "a",
    id: id,
    "data-qa": "sidebar-item",
    "aria-level": "2",
    unread: highlighted,
    threadUnread: threadUnread,
    selected: selected,
    href: href,
    onClick: () => !selected && sidebar.toggle(),
    "aria-label": title,
    title: title,
    time: lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.ts,
    subtitle: subtitle,
    icon: icon,
    style: style,
    badges: badges,
    avatar: AvatarTemplate && /*#__PURE__*/React.createElement(AvatarTemplate, room),
    menu: !isAnonymous && !isQueued && (() => /*#__PURE__*/React.createElement(RoomMenu, {
      alert: alert,
      threadUnread: threadUnread,
      rid: rid,
      unread: !!unread,
      roomOpen: false,
      type: type,
      cl: cl,
      name: title,
      status: room.status
    }))
  });
}

const propsAreEqual = (prevProps, nextProps) => {
  var _prevProps$room$_upda, _nextProps$room$_upda, _prevProps$room$lastM, _prevProps$room$lastM2, _nextProps$room$lastM, _nextProps$room$lastM2, _prevProps$room$v, _nextProps$room$v;

  if (['id', 'style', 'extended', 'selected', 'SideBarItemTemplate', 'AvatarTemplate', 't', 'sidebarViewMode'].some(key => prevProps[key] !== nextProps[key])) {
    return false;
  }

  if (prevProps.room === nextProps.room) {
    return true;
  }

  if (prevProps.room._id !== nextProps.room._id) {
    return false;
  }

  if (((_prevProps$room$_upda = prevProps.room._updatedAt) === null || _prevProps$room$_upda === void 0 ? void 0 : _prevProps$room$_upda.toISOString()) !== ((_nextProps$room$_upda = nextProps.room._updatedAt) === null || _nextProps$room$_upda === void 0 ? void 0 : _nextProps$room$_upda.toISOString())) {
    return false;
  }

  if (((_prevProps$room$lastM = prevProps.room.lastMessage) === null || _prevProps$room$lastM === void 0 ? void 0 : (_prevProps$room$lastM2 = _prevProps$room$lastM._updatedAt) === null || _prevProps$room$lastM2 === void 0 ? void 0 : _prevProps$room$lastM2.toISOString()) !== ((_nextProps$room$lastM = nextProps.room.lastMessage) === null || _nextProps$room$lastM === void 0 ? void 0 : (_nextProps$room$lastM2 = _nextProps$room$lastM._updatedAt) === null || _nextProps$room$lastM2 === void 0 ? void 0 : _nextProps$room$lastM2.toISOString())) {
    return false;
  }

  if (prevProps.room.alert !== nextProps.room.alert) {
    return false;
  }

  if (((_prevProps$room$v = prevProps.room.v) === null || _prevProps$room$v === void 0 ? void 0 : _prevProps$room$v.status) !== ((_nextProps$room$v = nextProps.room.v) === null || _nextProps$room$v === void 0 ? void 0 : _nextProps$room$v.status)) {
    return false;
  }

  if (prevProps.room.teamMain !== nextProps.room.teamMain) {
    return false;
  }

  return true;
};

module.exportDefault( /*#__PURE__*/memo(SideBarItemTemplateWithData, propsAreEqual));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/7c5ae3824687d1263950182f46a717cbcdf55bf4.map

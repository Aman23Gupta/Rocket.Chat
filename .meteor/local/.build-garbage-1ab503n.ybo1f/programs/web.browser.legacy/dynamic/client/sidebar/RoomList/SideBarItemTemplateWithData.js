function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/SideBarItemTemplateWithData.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Badge, Sidebar;
module.link("@rocket.chat/fuselage", {
  Badge: function (v) {
    Badge = v;
  },
  Sidebar: function (v) {
    Sidebar = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var roomTypes;
module.link("../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 2);
var RoomIcon;
module.link("../../components/RoomIcon", {
  RoomIcon: function (v) {
    RoomIcon = v;
  }
}, 3);
var useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 4);
var RoomMenu;
module.link("../RoomMenu", {
  "default": function (v) {
    RoomMenu = v;
  }
}, 5);
var normalizeSidebarMessage;
module.link("./normalizeSidebarMessage", {
  normalizeSidebarMessage: function (v) {
    normalizeSidebarMessage = v;
  }
}, 6);

var getMessage = function (room, lastMessage, t) {
  var _lastMessage$u, _room$u;

  if (!lastMessage) {
    return t('No_messages_yet');
  }

  if (!lastMessage.u) {
    return normalizeSidebarMessage(lastMessage, t);
  }

  if (((_lastMessage$u = lastMessage.u) === null || _lastMessage$u === void 0 ? void 0 : _lastMessage$u.username) === ((_room$u = room.u) === null || _room$u === void 0 ? void 0 : _room$u.username)) {
    return t('You') + ": " + normalizeSidebarMessage(lastMessage, t);
  }

  if (room.t === 'd' && room.uids && room.uids.length <= 2) {
    return normalizeSidebarMessage(lastMessage, t);
  }

  return (lastMessage.u.name || lastMessage.u.username) + ": " + normalizeSidebarMessage(lastMessage, t);
};

function SideBarItemTemplateWithData(_ref) {
  var room = _ref.room,
      id = _ref.id,
      extended = _ref.extended,
      selected = _ref.selected,
      SideBarItemTemplate = _ref.SideBarItemTemplate,
      AvatarTemplate = _ref.AvatarTemplate,
      t = _ref.t,
      style = _ref.style,
      isAnonymous = _ref.isAnonymous;

  var _useLayout = useLayout(),
      sidebar = _useLayout.sidebar;

  var href = roomTypes.getRouteLink(room.t, room);
  var title = roomTypes.getRoomName(room.t, room);
  var lastMessage = room.lastMessage,
      hideUnreadStatus = room.hideUnreadStatus,
      _room$unread = room.unread,
      unread = _room$unread === void 0 ? 0 : _room$unread,
      alert = room.alert,
      userMentions = room.userMentions,
      groupMentions = room.groupMentions,
      _room$tunread = room.tunread,
      tunread = _room$tunread === void 0 ? [] : _room$tunread,
      _room$tunreadUser = room.tunreadUser,
      tunreadUser = _room$tunreadUser === void 0 ? [] : _room$tunreadUser,
      rid = room.rid,
      type = room.t,
      cl = room.cl;
  var highlighted = !hideUnreadStatus && (alert || unread);
  var icon = /*#__PURE__*/React.createElement(Sidebar.Item.Icon, {
    highlighted: highlighted
  }, /*#__PURE__*/React.createElement(RoomIcon, {
    highlighted: highlighted,
    room: room,
    placement: "sidebar"
  }));
  var isQueued = room.status === 'queued';
  var threadUnread = tunread.length > 0;
  var message = extended && getMessage(room, lastMessage, t);
  var subtitle = message ? /*#__PURE__*/React.createElement("span", {
    className: "message-body--unstyled",
    dangerouslySetInnerHTML: {
      __html: message
    }
  }) : null;
  var variant = (userMentions || tunreadUser.length) && 'danger' || threadUnread && 'primary' || groupMentions && 'warning' || 'ghost';
  var isUnread = unread > 0 || threadUnread;
  var badges = !hideUnreadStatus && isUnread ? /*#__PURE__*/React.createElement(Badge, {
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
    onClick: function () {
      return !selected && sidebar.toggle();
    },
    "aria-label": title,
    title: title,
    time: lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.ts,
    subtitle: subtitle,
    icon: icon,
    style: style,
    badges: badges,
    avatar: AvatarTemplate && /*#__PURE__*/React.createElement(AvatarTemplate, room),
    menu: !isAnonymous && !isQueued && function () {
      return /*#__PURE__*/React.createElement(RoomMenu, {
        alert: alert,
        threadUnread: threadUnread,
        rid: rid,
        unread: !!unread,
        roomOpen: false,
        type: type,
        cl: cl,
        name: title,
        status: room.status
      });
    }
  });
}

var propsAreEqual = function (prevProps, nextProps) {
  var _prevProps$room$_upda, _nextProps$room$_upda, _prevProps$room$lastM, _prevProps$room$lastM2, _nextProps$room$lastM, _nextProps$room$lastM2, _prevProps$room$v, _nextProps$room$v;

  if (['id', 'style', 'extended', 'selected', 'SideBarItemTemplate', 'AvatarTemplate', 't', 'sidebarViewMode'].some(function (key) {
    return prevProps[key] !== nextProps[key];
  })) {
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
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/68b281e98a3c041fe370115888308160c0a7fd03.map

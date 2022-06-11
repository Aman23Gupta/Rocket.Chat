function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/UserItem.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Sidebar;
module.link("@rocket.chat/fuselage", {
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
var ReactiveUserStatus;
module.link("../../components/UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 3);

var UserItem = function (_ref) {
  var item = _ref.item,
      id = _ref.id,
      style = _ref.style,
      t = _ref.t,
      SideBarItemTemplate = _ref.SideBarItemTemplate,
      AvatarTemplate = _ref.AvatarTemplate,
      useRealName = _ref.useRealName;
  var title = useRealName ? item.fname || item.name : item.name || item.fname;
  var icon = /*#__PURE__*/React.createElement(Sidebar.Item.Icon, null, /*#__PURE__*/React.createElement(ReactiveUserStatus, {
    uid: item._id
  }));
  var href = roomTypes.getRouteLink(item.t, item);
  return /*#__PURE__*/React.createElement(SideBarItemTemplate, {
    is: "a",
    style: {
      height: '100%'
    },
    id: id,
    href: href,
    title: title,
    subtitle: t('No_messages_yet'),
    avatar: AvatarTemplate && /*#__PURE__*/React.createElement(AvatarTemplate, item),
    icon: icon,
    style: style
  });
};

module.exportDefault( /*#__PURE__*/memo(UserItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/search/f85f170afa1caa3b57ed836a712d89e48f6ff59a.map

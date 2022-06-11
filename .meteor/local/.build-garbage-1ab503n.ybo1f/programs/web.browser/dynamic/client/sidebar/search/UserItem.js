function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/UserItem.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Sidebar;
module.link("@rocket.chat/fuselage", {
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
let ReactiveUserStatus;
module.link("../../components/UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 3);

const UserItem = _ref => {
  let {
    item,
    id,
    style,
    t,
    SideBarItemTemplate,
    AvatarTemplate,
    useRealName
  } = _ref;
  const title = useRealName ? item.fname || item.name : item.name || item.fname;
  const icon = /*#__PURE__*/React.createElement(Sidebar.Item.Icon, null, /*#__PURE__*/React.createElement(ReactiveUserStatus, {
    uid: item._id
  }));
  const href = roomTypes.getRouteLink(item.t, item);
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
//# sourceMappingURL=/dynamic/client/sidebar/search/7ab386d5d946e49730105093dd655655627deec4.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/Row.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let SideBarItemTemplateWithData;
module.link("../RoomList/SideBarItemTemplateWithData", {
  default(v) {
    SideBarItemTemplateWithData = v;
  }

}, 1);
let UserItem;
module.link("./UserItem", {
  default(v) {
    UserItem = v;
  }

}, 2);

const Row = _ref => {
  let {
    item,
    data
  } = _ref;
  const {
    t,
    SideBarItemTemplate,
    avatarTemplate: AvatarTemplate,
    useRealName,
    extended
  } = data;

  if (item.t === 'd' && !item.u) {
    return /*#__PURE__*/React.createElement(UserItem, {
      id: "search-".concat(item._id),
      useRealName: useRealName,
      t: t,
      item: item,
      SideBarItemTemplate: SideBarItemTemplate,
      AvatarTemplate: AvatarTemplate
    });
  }

  return /*#__PURE__*/React.createElement(SideBarItemTemplateWithData, {
    id: "search-".concat(item._id),
    tabIndex: -1,
    extended: extended,
    t: t,
    room: item,
    SideBarItemTemplate: SideBarItemTemplate,
    AvatarTemplate: AvatarTemplate
  });
};

module.exportDefault( /*#__PURE__*/memo(Row));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/search/bcc634b74d1f2c3c874ac45b0c8dae9ceb116cb6.map

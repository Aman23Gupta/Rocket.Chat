function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/search/Row.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var SideBarItemTemplateWithData;
module.link("../RoomList/SideBarItemTemplateWithData", {
  "default": function (v) {
    SideBarItemTemplateWithData = v;
  }
}, 1);
var UserItem;
module.link("./UserItem", {
  "default": function (v) {
    UserItem = v;
  }
}, 2);

var Row = function (_ref) {
  var item = _ref.item,
      data = _ref.data;
  var t = data.t,
      SideBarItemTemplate = data.SideBarItemTemplate,
      AvatarTemplate = data.avatarTemplate,
      useRealName = data.useRealName,
      extended = data.extended;

  if (item.t === 'd' && !item.u) {
    return /*#__PURE__*/React.createElement(UserItem, {
      id: "search-" + item._id,
      useRealName: useRealName,
      t: t,
      item: item,
      SideBarItemTemplate: SideBarItemTemplate,
      AvatarTemplate: AvatarTemplate
    });
  }

  return /*#__PURE__*/React.createElement(SideBarItemTemplateWithData, {
    id: "search-" + item._id,
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
//# sourceMappingURL=/dynamic/client/sidebar/search/3661cbe7bed8ea93eb6d2f59be40b9dde2012515.map

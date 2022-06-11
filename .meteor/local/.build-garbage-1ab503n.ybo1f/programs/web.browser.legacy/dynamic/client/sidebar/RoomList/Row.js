function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/Row.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var SidebarSection;
module.link("@rocket.chat/fuselage", {
  SidebarSection: function (v) {
    SidebarSection = v;
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
var Omnichannel;
module.link("../sections/Omnichannel", {
  "default": function (v) {
    Omnichannel = v;
  }
}, 2);
var SideBarItemTemplateWithData;
module.link("./SideBarItemTemplateWithData", {
  "default": function (v) {
    SideBarItemTemplateWithData = v;
  }
}, 3);
var sections = {
  Omnichannel: Omnichannel
};

var Row = function (_ref) {
  var data = _ref.data,
      item = _ref.item;
  var extended = data.extended,
      t = data.t,
      SideBarItemTemplate = data.SideBarItemTemplate,
      AvatarTemplate = data.AvatarTemplate,
      openedRoom = data.openedRoom,
      sidebarViewMode = data.sidebarViewMode;

  if (typeof item === 'string') {
    var Section = sections[item];
    return Section ? /*#__PURE__*/React.createElement(Section, {
      "aria-level": "1"
    }) : /*#__PURE__*/React.createElement(SidebarSection, {
      "aria-level": "1"
    }, /*#__PURE__*/React.createElement(SidebarSection.Title, null, t(item)));
  }

  return /*#__PURE__*/React.createElement(SideBarItemTemplateWithData, {
    sidebarViewMode: sidebarViewMode,
    selected: item.rid === openedRoom,
    t: t,
    room: item,
    extended: extended,
    SideBarItemTemplate: SideBarItemTemplate,
    AvatarTemplate: AvatarTemplate
  });
};

module.exportDefault( /*#__PURE__*/memo(Row));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/7e0117f9b3a53effc5c847ac0ed0f8666293f487.map

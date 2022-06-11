function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/Row.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let SidebarSection;
module.link("@rocket.chat/fuselage", {
  SidebarSection(v) {
    SidebarSection = v;
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
let Omnichannel;
module.link("../sections/Omnichannel", {
  default(v) {
    Omnichannel = v;
  }

}, 2);
let SideBarItemTemplateWithData;
module.link("./SideBarItemTemplateWithData", {
  default(v) {
    SideBarItemTemplateWithData = v;
  }

}, 3);
const sections = {
  Omnichannel
};

const Row = _ref => {
  let {
    data,
    item
  } = _ref;
  const {
    extended,
    t,
    SideBarItemTemplate,
    AvatarTemplate,
    openedRoom,
    sidebarViewMode
  } = data;

  if (typeof item === 'string') {
    const Section = sections[item];
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
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/a9ac03491911f5ae686c78109e282fa3b7f9805e.map

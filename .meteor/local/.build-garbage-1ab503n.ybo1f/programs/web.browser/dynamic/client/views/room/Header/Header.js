function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Header.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let BurgerMenu;
module.link("../../../components/BurgerMenu", {
  default(v) {
    BurgerMenu = v;
  }

}, 1);
let TemplateHeader;
module.link("../../../components/Header", {
  default(v) {
    TemplateHeader = v;
  }

}, 2);
let useLayout;
module.link("../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 3);
let DirectRoomHeader;
module.link("./DirectRoomHeader", {
  default(v) {
    DirectRoomHeader = v;
  }

}, 4);
let OmnichannelRoomHeader;
module.link("./Omnichannel/OmnichannelRoomHeader", {
  default(v) {
    OmnichannelRoomHeader = v;
  }

}, 5);
let RoomHeader;
module.link("./RoomHeader", {
  default(v) {
    RoomHeader = v;
  }

}, 6);

const Header = _ref => {
  let {
    room
  } = _ref;
  const {
    isMobile,
    isEmbedded,
    showTopNavbarEmbeddedLayout
  } = useLayout();
  const slots = useMemo(() => ({
    start: isMobile && /*#__PURE__*/React.createElement(TemplateHeader.ToolBox, null, /*#__PURE__*/React.createElement(BurgerMenu, null))
  }), [isMobile]);

  if (isEmbedded && !showTopNavbarEmbeddedLayout) {
    return null;
  }

  if (room.t === 'd' && room.uids.length < 3) {
    return /*#__PURE__*/React.createElement(DirectRoomHeader, {
      slots: slots,
      room: room
    });
  }

  if (room.t === 'l') {
    return /*#__PURE__*/React.createElement(OmnichannelRoomHeader, {
      slots: slots
    });
  }

  return /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room,
    topic: room.topic
  });
};

module.exportDefault( /*#__PURE__*/memo(Header));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/f8309ba4adce4c6cd541fbc9bf3aaf698141c774.map

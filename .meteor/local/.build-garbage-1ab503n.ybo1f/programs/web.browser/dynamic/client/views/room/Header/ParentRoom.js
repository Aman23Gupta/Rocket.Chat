function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoom.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 1);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useRoomIcon;
module.link("../../../hooks/useRoomIcon", {
  useRoomIcon(v) {
    useRoomIcon = v;
  }

}, 3);

const ParentRoom = _ref => {
  let {
    room
  } = _ref;
  const href = roomTypes.getRouteLink(room.t, room);
  const icon = useRoomIcon(room);
  return /*#__PURE__*/React.createElement(Header.Tag, null, /*#__PURE__*/React.createElement(Header.Tag.Icon, {
    icon: icon
  }), /*#__PURE__*/React.createElement(Header.Link, {
    href: href
  }, roomTypes.getRoomName(room.t, room)));
};

module.exportDefault(ParentRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/62ae76e90be466d39738e87447781d39a90506a2.map

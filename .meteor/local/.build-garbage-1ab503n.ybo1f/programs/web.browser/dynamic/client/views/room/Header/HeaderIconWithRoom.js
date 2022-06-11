function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/HeaderIconWithRoom.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let isOmnichannelRoom;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoom(v) {
    isOmnichannelRoom = v;
  }

}, 1);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let OmnichannelRoomIcon;
module.link("../../../components/RoomIcon/OmnichannelRoomIcon", {
  OmnichannelRoomIcon(v) {
    OmnichannelRoomIcon = v;
  }

}, 3);
let useRoomIcon;
module.link("../../../hooks/useRoomIcon", {
  useRoomIcon(v) {
    useRoomIcon = v;
  }

}, 4);

const HeaderIconWithRoom = _ref => {
  let {
    room
  } = _ref;
  const icon = useRoomIcon(room);

  if (isOmnichannelRoom(room)) {
    return /*#__PURE__*/React.createElement(OmnichannelRoomIcon, {
      room: room,
      size: "x20",
      placement: "default"
    });
  }

  return /*#__PURE__*/React.createElement(Header.Icon, {
    icon: icon
  });
};

module.exportDefault(HeaderIconWithRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/99d2c22cefbd730d4841aef473ee73c4d4e6b0a8.map

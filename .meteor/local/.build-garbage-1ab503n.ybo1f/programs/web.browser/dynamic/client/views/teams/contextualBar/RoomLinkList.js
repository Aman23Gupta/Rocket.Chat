function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/RoomLinkList.js                                                                    //
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

const RoomLinkList = _ref => {
  let {
    rooms
  } = _ref;
  const roomsArray = Object.values(rooms);
  return roomsArray.map((room, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: roomTypes.getRouteLink(room.t, room)
  }, "#", roomTypes.getRoomName(room.t, room)), i === roomsArray.length - 1 ? '.' : ', '));
};

module.exportDefault(RoomLinkList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/ae8e5bc9709349e187b9b5204c1bf10aea1126f6.map

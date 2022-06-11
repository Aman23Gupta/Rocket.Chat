function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/DirectRoomHeader.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 1);
let usePresence;
module.link("../../../hooks/usePresence", {
  usePresence(v) {
    usePresence = v;
  }

}, 2);
let RoomHeader;
module.link("./RoomHeader", {
  default(v) {
    RoomHeader = v;
  }

}, 3);

const DirectRoomHeader = _ref => {
  let {
    room,
    slots
  } = _ref;
  const userId = useUserId();
  const directUserId = room.uids.filter(uid => uid !== userId).shift();
  const directUserData = usePresence(directUserId);
  return /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room,
    topic: directUserData === null || directUserData === void 0 ? void 0 : directUserData.statusText
  });
};

module.exportDefault(DirectRoomHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/f5bc8268fc6a14cebd3370ff18821e4cb26cc4bc.map

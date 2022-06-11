function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/RoomWithData.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useOpenedRoom;
module.link("../../../lib/RoomManager", {
  useOpenedRoom(v) {
    useOpenedRoom = v;
  }

}, 1);
let RoomProvider;
module.link("../providers/RoomProvider", {
  default(v) {
    RoomProvider = v;
  }

}, 2);
let Room;
module.link("./Room", {
  default(v) {
    Room = v;
  }

}, 3);

const RoomWithData = () => {
  const rid = useOpenedRoom();
  return rid ? /*#__PURE__*/React.createElement(RoomProvider, {
    rid: rid
  }, /*#__PURE__*/React.createElement(Room, null)) : null;
};

module.exportDefault(RoomWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/b649842ee21a3b157c362052944c14dfc963d875.map

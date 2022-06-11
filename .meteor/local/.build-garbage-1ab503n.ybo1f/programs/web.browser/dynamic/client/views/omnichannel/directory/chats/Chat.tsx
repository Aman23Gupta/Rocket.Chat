function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/Chat.tsx                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let openRoom;
module.link("../../../../../app/ui-utils/client/lib/openRoom", {
  openRoom(v) {
    openRoom = v;
  }

}, 2);
let RoomWithData;
module.link("../../../room/Room", {
  default(v) {
    RoomWithData = v;
  }

}, 3);

const Chat = _ref => {
  let {
    rid
  } = _ref;
  useEffect(() => {
    // NewRoomManager.open(rid);
    // RoomManager.open(`l${rid}`);
    openRoom('l', rid, false);
  }, [rid]);
  return /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    backgroundColor: "surface",
    width: "full",
    height: "full"
  }, /*#__PURE__*/React.createElement(RoomWithData, null));
};

module.exportDefault(Chat);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/5016833d934bf9a57cd487e5718bca3331b397d6.map

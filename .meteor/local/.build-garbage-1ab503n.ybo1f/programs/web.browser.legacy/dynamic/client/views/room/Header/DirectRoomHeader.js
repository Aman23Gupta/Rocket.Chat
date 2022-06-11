function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/DirectRoomHeader.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 1);
var usePresence;
module.link("../../../hooks/usePresence", {
  usePresence: function (v) {
    usePresence = v;
  }
}, 2);
var RoomHeader;
module.link("./RoomHeader", {
  "default": function (v) {
    RoomHeader = v;
  }
}, 3);

var DirectRoomHeader = function (_ref) {
  var room = _ref.room,
      slots = _ref.slots;
  var userId = useUserId();
  var directUserId = room.uids.filter(function (uid) {
    return uid !== userId;
  }).shift();
  var directUserData = usePresence(directUserId);
  return /*#__PURE__*/React.createElement(RoomHeader, {
    slots: slots,
    room: room,
    topic: directUserData === null || directUserData === void 0 ? void 0 : directUserData.statusText
  });
};

module.exportDefault(DirectRoomHeader);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/f512508fef4653989713fa6123d303ff97e80feb.map

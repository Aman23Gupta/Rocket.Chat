function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/RoomWithData.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useOpenedRoom;
module.link("../../../lib/RoomManager", {
  useOpenedRoom: function (v) {
    useOpenedRoom = v;
  }
}, 1);
var RoomProvider;
module.link("../providers/RoomProvider", {
  "default": function (v) {
    RoomProvider = v;
  }
}, 2);
var Room;
module.link("./Room", {
  "default": function (v) {
    Room = v;
  }
}, 3);

var RoomWithData = function () {
  var rid = useOpenedRoom();
  return rid ? /*#__PURE__*/React.createElement(RoomProvider, {
    rid: rid
  }, /*#__PURE__*/React.createElement(Room, null)) : null;
};

module.exportDefault(RoomWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/ac3b7b957e56cc563deaa22444d2092d88859a9a.map

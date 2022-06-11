function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/HeaderIconWithRoom.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var isOmnichannelRoom;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoom: function (v) {
    isOmnichannelRoom = v;
  }
}, 1);
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var OmnichannelRoomIcon;
module.link("../../../components/RoomIcon/OmnichannelRoomIcon", {
  OmnichannelRoomIcon: function (v) {
    OmnichannelRoomIcon = v;
  }
}, 3);
var useRoomIcon;
module.link("../../../hooks/useRoomIcon", {
  useRoomIcon: function (v) {
    useRoomIcon = v;
  }
}, 4);

var HeaderIconWithRoom = function (_ref) {
  var room = _ref.room;
  var icon = useRoomIcon(room);

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
//# sourceMappingURL=/dynamic/client/views/room/Header/e9e70fe08b4d5691bca9ad3f0a5c1e6440133262.map

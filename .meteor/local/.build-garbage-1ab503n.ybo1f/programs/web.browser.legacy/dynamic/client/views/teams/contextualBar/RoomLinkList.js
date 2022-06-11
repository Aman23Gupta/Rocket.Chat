function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/RoomLinkList.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 1);

var RoomLinkList = function (_ref) {
  var rooms = _ref.rooms;
  var roomsArray = Object.values(rooms);
  return roomsArray.map(function (room, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: roomTypes.getRouteLink(room.t, room)
    }, "#", roomTypes.getRoomName(room.t, room)), i === roomsArray.length - 1 ? '.' : ', ');
  });
};

module.exportDefault(RoomLinkList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/5496c7f218873f608a7ea36d1f3a8b5136d02586.map

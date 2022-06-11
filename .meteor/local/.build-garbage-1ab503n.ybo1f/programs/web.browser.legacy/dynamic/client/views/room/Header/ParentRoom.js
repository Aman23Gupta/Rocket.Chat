function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/ParentRoom.js                                                                              //
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
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useRoomIcon;
module.link("../../../hooks/useRoomIcon", {
  useRoomIcon: function (v) {
    useRoomIcon = v;
  }
}, 3);

var ParentRoom = function (_ref) {
  var room = _ref.room;
  var href = roomTypes.getRouteLink(room.t, room);
  var icon = useRoomIcon(room);
  return /*#__PURE__*/React.createElement(Header.Tag, null, /*#__PURE__*/React.createElement(Header.Tag.Icon, {
    icon: icon
  }), /*#__PURE__*/React.createElement(Header.Link, {
    href: href
  }, roomTypes.getRoomName(room.t, room)));
};

module.exportDefault(ParentRoom);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/9a05c1840f08920423e1a8f696d6e1ee997cab03.map

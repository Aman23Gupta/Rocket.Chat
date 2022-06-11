function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/RoomTitle.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 1);
var HeaderIconWithRoom;
module.link("./HeaderIconWithRoom", {
  "default": function (v) {
    HeaderIconWithRoom = v;
  }
}, 2);

var RoomTitle = function (_ref) {
  var room = _ref.room;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderIconWithRoom, {
    room: room
  }), /*#__PURE__*/React.createElement(Header.Title, null, room.name));
};

module.exportDefault(RoomTitle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/6e8302909b98856e69a13a229273be3c17e43e01.map

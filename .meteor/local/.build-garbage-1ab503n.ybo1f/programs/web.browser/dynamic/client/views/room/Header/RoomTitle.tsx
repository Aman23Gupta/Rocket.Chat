function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/RoomTitle.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 1);
let HeaderIconWithRoom;
module.link("./HeaderIconWithRoom", {
  default(v) {
    HeaderIconWithRoom = v;
  }

}, 2);

const RoomTitle = _ref => {
  let {
    room
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderIconWithRoom, {
    room: room
  }), /*#__PURE__*/React.createElement(Header.Title, null, room.name));
};

module.exportDefault(RoomTitle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/fb6670c2bfe25d7174e2a8494b7a49f7d9805754.map

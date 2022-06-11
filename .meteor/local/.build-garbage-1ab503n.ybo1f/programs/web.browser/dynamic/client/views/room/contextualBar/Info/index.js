function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/index.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let EditRoomInfoWithData;
module.link("./EditRoomInfo", {
  default(v) {
    EditRoomInfoWithData = v;
  }

}, 2);
let RoomInfoWithData;
module.link("./RoomInfo", {
  default(v) {
    RoomInfoWithData = v;
  }

}, 3);

const RoomInfo = _ref => {
  let {
    rid,
    onClickBack,
    onEnterRoom,
    resetState
  } = _ref;
  const [editing, setEditing] = useState(false);
  const backToView = useMutableCallback(() => setEditing(false));
  return editing ? /*#__PURE__*/React.createElement(EditRoomInfoWithData, {
    onClickBack: backToView,
    rid: rid
  }) : /*#__PURE__*/React.createElement(RoomInfoWithData, {
    onClickBack: onClickBack,
    openEditing: setEditing,
    rid: rid,
    onEnterRoom: onEnterRoom,
    resetState: resetState
  });
};

module.exportDefault(RoomInfo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/8bde3123662c946e4f7361205738285d217bd1eb.map

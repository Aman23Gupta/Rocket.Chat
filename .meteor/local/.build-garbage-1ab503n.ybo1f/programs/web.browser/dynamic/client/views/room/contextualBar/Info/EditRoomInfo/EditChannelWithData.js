function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/EditRoomInfo/EditChannelWithData.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useUserRoom;
module.link("../../../hooks/useUserRoom", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 1);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 2);
let EditChannel;
module.link("./EditChannel", {
  default(v) {
    EditChannel = v;
  }

}, 3);

function EditChannelWithData(_ref) {
  let {
    rid,
    onClickBack
  } = _ref;
  const room = useUserRoom(rid);
  const onClickClose = useTabBarClose();
  return /*#__PURE__*/React.createElement(EditChannel, {
    onClickClose: onClickClose,
    onClickBack: onClickBack,
    room: _objectSpread({
      type: room === null || room === void 0 ? void 0 : room.t
    }, room)
  });
}

module.exportDefault(EditChannelWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/EditRoomInfo/232cbaaacc99f024aa06b8df9da40c2c5be29437.map

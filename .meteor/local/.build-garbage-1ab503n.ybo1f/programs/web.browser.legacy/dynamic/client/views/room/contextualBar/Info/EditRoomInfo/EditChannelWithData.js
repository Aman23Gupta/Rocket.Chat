function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Info/EditRoomInfo/EditChannelWithData.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useUserRoom;
module.link("../../../hooks/useUserRoom", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 1);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 2);
var EditChannel;
module.link("./EditChannel", {
  "default": function (v) {
    EditChannel = v;
  }
}, 3);

function EditChannelWithData(_ref) {
  var rid = _ref.rid,
      onClickBack = _ref.onClickBack;
  var room = useUserRoom(rid);
  var onClickClose = useTabBarClose();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Info/EditRoomInfo/2b0148f3bcb5267d5ad08da307f0641c60a74619.map

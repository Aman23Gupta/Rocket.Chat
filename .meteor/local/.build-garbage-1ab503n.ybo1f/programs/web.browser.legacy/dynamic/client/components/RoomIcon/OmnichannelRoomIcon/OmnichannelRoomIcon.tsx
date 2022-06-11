function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelRoomIcon.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelRoomIcon: function () {
    return OmnichannelRoomIcon;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var isOmnichannelRoomFromAppSource;
module.link("../../../../definition/IRoom", {
  isOmnichannelRoomFromAppSource: function (v) {
    isOmnichannelRoomFromAppSource = v;
  }
}, 1);
var OmnichannelAppSourceRoomIcon;
module.link("./OmnichannelAppSourceRoomIcon", {
  OmnichannelAppSourceRoomIcon: function (v) {
    OmnichannelAppSourceRoomIcon = v;
  }
}, 2);
var OmnichannelCoreSourceRoomIcon;
module.link("./OmnichannelCoreSourceRoomIcon", {
  OmnichannelCoreSourceRoomIcon: function (v) {
    OmnichannelCoreSourceRoomIcon = v;
  }
}, 3);

var OmnichannelRoomIcon = function (_ref) {
  var room = _ref.room,
      size = _ref.size,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'default' : _ref$placement;

  if (isOmnichannelRoomFromAppSource(room)) {
    return /*#__PURE__*/React.createElement(OmnichannelAppSourceRoomIcon, {
      placement: placement,
      room: room,
      size: size
    });
  }

  return /*#__PURE__*/React.createElement(OmnichannelCoreSourceRoomIcon, {
    room: room,
    size: size
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/0b49e2e42f5df4b9740b28b085f6b60fb88e0c25.map

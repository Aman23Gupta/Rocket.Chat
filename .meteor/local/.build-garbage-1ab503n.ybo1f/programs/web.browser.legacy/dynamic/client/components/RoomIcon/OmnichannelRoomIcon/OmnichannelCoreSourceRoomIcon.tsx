function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelCoreSourceRoomIcon.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelCoreSourceRoomIcon: function () {
    return OmnichannelCoreSourceRoomIcon;
  }
});
var Icon;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};
var iconMap = {
  widget: 'livechat',
  email: 'mail',
  sms: 'sms',
  app: 'headset',
  api: 'headset',
  other: 'headset'
};

var OmnichannelCoreSourceRoomIcon = function (_ref) {
  var _room$source, _room$v;

  var room = _ref.room,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'x16' : _ref$size;
  var icon = iconMap[((_room$source = room.source) === null || _room$source === void 0 ? void 0 : _room$source.type) || 'other'] || 'headset';
  return /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size,
    color: colors[((_room$v = room.v) === null || _room$v === void 0 ? void 0 : _room$v.status) || 'offline']
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/5d793bccfcb5c266f3a09f5243e8afc9afbbff47.map

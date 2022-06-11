function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelCoreSourceRoomIcon.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OmnichannelCoreSourceRoomIcon: () => OmnichannelCoreSourceRoomIcon
});
let Icon;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
const colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};
const iconMap = {
  widget: 'livechat',
  email: 'mail',
  sms: 'sms',
  app: 'headset',
  api: 'headset',
  other: 'headset'
};

const OmnichannelCoreSourceRoomIcon = _ref => {
  var _room$source, _room$v;

  let {
    room,
    size = 'x16'
  } = _ref;
  const icon = iconMap[((_room$source = room.source) === null || _room$source === void 0 ? void 0 : _room$source.type) || 'other'] || 'headset';
  return /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size,
    color: colors[((_room$v = room.v) === null || _room$v === void 0 ? void 0 : _room$v.status) || 'offline']
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/c9726cfe6574115969c447d6ad6b08690db039b9.map

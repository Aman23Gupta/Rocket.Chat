function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelAppSourceRoomIcon.tsx                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  colors: () => colors,
  OmnichannelAppSourceRoomIcon: () => OmnichannelAppSourceRoomIcon
});
let Icon, Box;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  },

  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let AsyncStatePhase;
module.link("../../../lib/asyncState/AsyncStatePhase", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 2);
let useOmnichannelRoomIcon;
module.link("./context/OmnichannelRoomIconContext", {
  useOmnichannelRoomIcon(v) {
    useOmnichannelRoomIcon = v;
  }

}, 3);
const colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};

const convertBoxSizeToNumber = boxSize => {
  switch (boxSize) {
    case 'x20':
      {
        return 20;
      }

    case 'x24':
      {
        return 24;
      }

    case 'x16':
    default:
      {
        return 16;
      }
  }
};

const OmnichannelAppSourceRoomIcon = _ref => {
  let {
    room,
    size = 16,
    placement = 'default'
  } = _ref;
  const color = colors[room.v.status || 'offline'];
  const icon = placement === 'sidebar' && room.source.sidebarIcon || room.source.defaultIcon;
  const {
    phase,
    value
  } = useOmnichannelRoomIcon(room.source.id, icon || '');
  const fontSize = convertBoxSizeToNumber(size);

  if ([AsyncStatePhase.REJECTED, AsyncStatePhase.LOADING].includes(phase)) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: "headset",
      size: size,
      color: color
    });
  }

  return /*#__PURE__*/React.createElement(Box, {
    size: fontSize,
    color: color
  }, /*#__PURE__*/React.createElement(Box, {
    is: "svg",
    size: fontSize,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "use",
    href: "#".concat(value)
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/828fbe2458d9f3707de31ac6e4177293eb2d8ede.map

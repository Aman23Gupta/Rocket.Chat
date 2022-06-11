function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/OmnichannelRoomIcon/OmnichannelAppSourceRoomIcon.tsx                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  colors: function () {
    return colors;
  },
  OmnichannelAppSourceRoomIcon: function () {
    return OmnichannelAppSourceRoomIcon;
  }
});
var Icon, Box;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var AsyncStatePhase;
module.link("../../../lib/asyncState/AsyncStatePhase", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 2);
var useOmnichannelRoomIcon;
module.link("./context/OmnichannelRoomIconContext", {
  useOmnichannelRoomIcon: function (v) {
    useOmnichannelRoomIcon = v;
  }
}, 3);
var colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};

var convertBoxSizeToNumber = function (boxSize) {
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

var OmnichannelAppSourceRoomIcon = function (_ref) {
  var room = _ref.room,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 16 : _ref$size,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'default' : _ref$placement;
  var color = colors[room.v.status || 'offline'];
  var icon = placement === 'sidebar' && room.source.sidebarIcon || room.source.defaultIcon;

  var _useOmnichannelRoomIc = useOmnichannelRoomIcon(room.source.id, icon || ''),
      phase = _useOmnichannelRoomIc.phase,
      value = _useOmnichannelRoomIc.value;

  var fontSize = convertBoxSizeToNumber(size);

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
    href: "#" + value
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/OmnichannelRoomIcon/a7f12dc384a122d0879f17d392f034aee5c2518d.map

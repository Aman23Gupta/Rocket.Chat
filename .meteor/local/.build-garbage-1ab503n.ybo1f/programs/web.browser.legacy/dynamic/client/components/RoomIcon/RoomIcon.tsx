function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/RoomIcon.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomIcon: function () {
    return RoomIcon;
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
var isDirectMessageRoom, isOmnichannelRoom;
module.link("../../../definition/IRoom", {
  isDirectMessageRoom: function (v) {
    isDirectMessageRoom = v;
  },
  isOmnichannelRoom: function (v) {
    isOmnichannelRoom = v;
  }
}, 2);
var ReactiveUserStatus;
module.link("../UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 3);
var OmnichannelRoomIcon;
module.link("./OmnichannelRoomIcon", {
  OmnichannelRoomIcon: function (v) {
    OmnichannelRoomIcon = v;
  }
}, 4);

var RoomIcon = function (_ref) {
  var room = _ref.room,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'x16' : _ref$size,
      placement = _ref.placement;

  if (room.prid) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: "baloons",
      size: size
    });
  }

  if (room.teamMain) {
    return /*#__PURE__*/React.createElement(Icon, {
      name: room.t === 'p' ? 'team-lock' : 'team',
      size: size
    });
  }

  if (isOmnichannelRoom(room)) {
    return /*#__PURE__*/React.createElement(OmnichannelRoomIcon, {
      placement: placement,
      room: room,
      size: size
    });
  }

  if (isDirectMessageRoom(room)) {
    if (room.uids && room.uids.length > 2) {
      return /*#__PURE__*/React.createElement(Icon, {
        name: "balloon",
        size: size
      });
    }

    if (room.uids && room.uids.length > 0) {
      return /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: room.uids.filter(function (uid) {
          return uid !== room.u._id;
        })[0] || room.u._id
      });
    }

    return /*#__PURE__*/React.createElement(Icon, {
      name: "at",
      size: size
    });
  }

  switch (room.t) {
    case 'p':
      return /*#__PURE__*/React.createElement(Icon, {
        name: "hashtag-lock",
        size: size
      });

    case 'c':
      return /*#__PURE__*/React.createElement(Icon, {
        name: "hash",
        size: size
      });

    default:
      return null;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/RoomIcon/cfe20dd57546b15e9f0b5c5177d65e1370b0371e.map

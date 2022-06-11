function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomIcon/RoomIcon.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomIcon: () => RoomIcon
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
let isDirectMessageRoom, isOmnichannelRoom;
module.link("../../../definition/IRoom", {
  isDirectMessageRoom(v) {
    isDirectMessageRoom = v;
  },

  isOmnichannelRoom(v) {
    isOmnichannelRoom = v;
  }

}, 2);
let ReactiveUserStatus;
module.link("../UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 3);
let OmnichannelRoomIcon;
module.link("./OmnichannelRoomIcon", {
  OmnichannelRoomIcon(v) {
    OmnichannelRoomIcon = v;
  }

}, 4);

const RoomIcon = _ref => {
  let {
    room,
    size = 'x16',
    placement
  } = _ref;

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
        uid: room.uids.filter(uid => uid !== room.u._id)[0] || room.u._id
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
//# sourceMappingURL=/dynamic/client/components/RoomIcon/eccb1743cf446eb17908c46d32d155abb22bc7b3.map

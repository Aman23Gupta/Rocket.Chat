function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useRoomIcon.tsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  colors: function () {
    return colors;
  },
  useRoomIcon: function () {
    return useRoomIcon;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var isDirectMessageRoom;
module.link("../../definition/IRoom", {
  isDirectMessageRoom: function (v) {
    isDirectMessageRoom = v;
  }
}, 1);
var ReactiveUserStatus;
module.link("../components/UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 2);
var colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};

var useRoomIcon = function (room) {
  if (room.prid) {
    return {
      name: 'baloons'
    };
  }

  if (room.teamMain) {
    return {
      name: room.t === 'p' ? 'team-lock' : 'team'
    };
  }

  if (isDirectMessageRoom(room)) {
    if (room.uids && room.uids.length > 2) {
      return {
        name: 'balloon'
      };
    }

    if (room.uids && room.uids.length > 0) {
      return /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: room.uids.find(function (uid) {
          return uid !== room.u._id;
        }) || room.u._id
      });
    }

    return {
      name: 'at'
    };
  }

  switch (room.t) {
    case 'p':
      return {
        name: 'hashtag-lock'
      };

    case 'c':
      return {
        name: 'hash'
      };

    default:
      return null;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/4139dc07684c8e997b26b7049069df5c7626fa3d.map

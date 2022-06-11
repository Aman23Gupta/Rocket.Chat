function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useRoomIcon.tsx                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  colors: () => colors,
  useRoomIcon: () => useRoomIcon
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let isDirectMessageRoom;
module.link("../../definition/IRoom", {
  isDirectMessageRoom(v) {
    isDirectMessageRoom = v;
  }

}, 1);
let ReactiveUserStatus;
module.link("../components/UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 2);
const colors = {
  busy: 'danger-500',
  away: 'warning-600',
  online: 'success-500',
  offline: 'neutral-600'
};

const useRoomIcon = room => {
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
        uid: room.uids.find(uid => uid !== room.u._id) || room.u._id
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
//# sourceMappingURL=/dynamic/client/hooks/9c57113dbdef0726a1bf66d8a93bd66f51d67820.map

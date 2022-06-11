function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/MemberListRouter.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useUserId;
module.link("../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 1);
let useRoom;
module.link("./contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 2);
let RoomMembers;
module.link("./contextualBar/RoomMembers", {
  default(v) {
    RoomMembers = v;
  }

}, 3);
let UserInfo;
module.link("./contextualBar/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 4);
let useTab, useTabBarClose, useTabContext;
module.link("./providers/ToolboxProvider", {
  useTab(v) {
    useTab = v;
  },

  useTabBarClose(v) {
    useTabBarClose = v;
  },

  useTabContext(v) {
    useTabContext = v;
  }

}, 5);

const getUid = (room, ownUserId) => {
  var _room$uids, _room$uids2;

  if (((_room$uids = room.uids) === null || _room$uids === void 0 ? void 0 : _room$uids.length) === 1) {
    return room.uids[0];
  }

  const uid = (_room$uids2 = room.uids) === null || _room$uids2 === void 0 ? void 0 : _room$uids2.filter(uid => uid !== ownUserId).shift(); // Self DMs used to be created with the userId duplicated.
  // Sometimes rooms can have 2 equal uids, but it's a self DM.

  return uid || room.uids[0];
};

const MemberListRouter = _ref => {
  let {
    rid
  } = _ref;
  const username = useTabContext();
  const room = useRoom();
  const onClickClose = useTabBarClose();
  const ownUserId = useUserId();
  const tab = useTab();
  const isMembersList = tab.id === 'members-list' || tab.id === 'user-info-group';

  if (isMembersList && !username) {
    return /*#__PURE__*/React.createElement(RoomMembers, {
      rid: rid
    });
  }

  return /*#__PURE__*/React.createElement(UserInfo, _extends({
    width: "100%"
  }, username ? {
    username
  } : {
    uid: getUid(room, ownUserId)
  }, {
    onClose: onClickClose,
    rid: rid
  }));
};

module.exportDefault(MemberListRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/1d7a0fdb4b385744691caf4220007e3e3963b2d8.map

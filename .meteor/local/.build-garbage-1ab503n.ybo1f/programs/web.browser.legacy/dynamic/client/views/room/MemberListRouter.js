function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/MemberListRouter.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useUserId;
module.link("../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 1);
var useRoom;
module.link("./contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 2);
var RoomMembers;
module.link("./contextualBar/RoomMembers", {
  "default": function (v) {
    RoomMembers = v;
  }
}, 3);
var UserInfo;
module.link("./contextualBar/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 4);
var useTab, useTabBarClose, useTabContext;
module.link("./providers/ToolboxProvider", {
  useTab: function (v) {
    useTab = v;
  },
  useTabBarClose: function (v) {
    useTabBarClose = v;
  },
  useTabContext: function (v) {
    useTabContext = v;
  }
}, 5);

var getUid = function (room, ownUserId) {
  var _room$uids, _room$uids2;

  if (((_room$uids = room.uids) === null || _room$uids === void 0 ? void 0 : _room$uids.length) === 1) {
    return room.uids[0];
  }

  var uid = (_room$uids2 = room.uids) === null || _room$uids2 === void 0 ? void 0 : _room$uids2.filter(function (uid) {
    return uid !== ownUserId;
  }).shift(); // Self DMs used to be created with the userId duplicated.
  // Sometimes rooms can have 2 equal uids, but it's a self DM.

  return uid || room.uids[0];
};

var MemberListRouter = function (_ref) {
  var rid = _ref.rid;
  var username = useTabContext();
  var room = useRoom();
  var onClickClose = useTabBarClose();
  var ownUserId = useUserId();
  var tab = useTab();
  var isMembersList = tab.id === 'members-list' || tab.id === 'user-info-group';

  if (isMembersList && !username) {
    return /*#__PURE__*/React.createElement(RoomMembers, {
      rid: rid
    });
  }

  return /*#__PURE__*/React.createElement(UserInfo, _extends({
    width: "100%"
  }, username ? {
    username: username
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
//# sourceMappingURL=/dynamic/client/views/room/9909f682667b898c45d02978115e8810504db8b0.map

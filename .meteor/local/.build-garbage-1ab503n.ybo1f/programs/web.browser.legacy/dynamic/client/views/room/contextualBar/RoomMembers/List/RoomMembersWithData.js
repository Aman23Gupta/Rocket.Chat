function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/RoomMembersWithData.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var useMutableCallback, useDebouncedValue, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 0);
var React, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useAtLeastOnePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 2);
var useUserRoom;
module.link("../../../../../contexts/UserContext", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 3);
var useRecordList;
module.link("../../../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var useMembersList;
module.link("../../../../hooks/useMembersList", {
  useMembersList: function (v) {
    useMembersList = v;
  }
}, 6);
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 7);
var UserInfoWithData;
module.link("../../UserInfo", {
  "default": function (v) {
    UserInfoWithData = v;
  }
}, 8);
var AddUsers;
module.link("../AddUsers", {
  "default": function (v) {
    AddUsers = v;
  }
}, 9);
var InviteUsers;
module.link("../InviteUsers", {
  "default": function (v) {
    InviteUsers = v;
  }
}, 10);
var RoomMembers;
module.link("./RoomMembers", {
  "default": function (v) {
    RoomMembers = v;
  }
}, 11);

var RoomMembersWithData = function (_ref) {
  var rid = _ref.rid;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClickClose = useTabBarClose();
  var room = useUserRoom(rid);
  var isTeam = room.teamMain;
  var isDirect = room.t === 'd';
  room.type = room.t;
  room.rid = rid;

  var _useLocalStorage = useLocalStorage('members-list-type', 'online'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      type = _useLocalStorage2[0],
      setType = _useLocalStorage2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1];

  var debouncedText = useDebouncedValue(text, 800);

  var _useMembersList = useMembersList(useMemo(function () {
    return {
      rid: rid,
      type: type,
      limit: 50,
      debouncedText: debouncedText,
      roomType: room.t
    };
  }, [rid, type, debouncedText, room.t])),
      membersList = _useMembersList.membersList,
      loadMoreItems = _useMembersList.loadMoreItems,
      reload = _useMembersList.reload;

  var _useRecordList = useRecordList(membersList),
      phase = _useRecordList.phase,
      items = _useRecordList.items,
      total = _useRecordList.itemCount;

  var canAddUsers = useAtLeastOnePermission(useMemo(function () {
    return [room.t === 'p' ? 'add-user-to-any-p-room' : 'add-user-to-any-c-room', 'add-user-to-joined-room'];
  }, [room.t]), rid);
  var handleTextChange = useCallback(function (event) {
    setText(event.currentTarget.value);
  }, []);
  var viewUser = useMutableCallback(function (e) {
    var username = e.currentTarget.dataset.username;
    setState({
      tab: 'UserInfo',
      username: username
    });
  });
  var createInvite = useMutableCallback(function () {
    setState({
      tab: 'InviteUsers'
    });
  });
  var addUser = useMutableCallback(function () {
    setState({
      tab: 'AddUsers'
    });
  });
  var handleBack = useCallback(function () {
    setState({});
    reload();
  }, [setState, reload]);

  if (state.tab === 'UserInfo') {
    return /*#__PURE__*/React.createElement(UserInfoWithData, {
      rid: rid,
      onClickClose: onClickClose,
      onClickBack: handleBack,
      username: state.username
    });
  }

  if (state.tab === 'InviteUsers') {
    return /*#__PURE__*/React.createElement(InviteUsers, {
      onClickClose: onClickClose,
      rid: rid,
      onClickBack: handleBack
    });
  }

  if (state.tab === 'AddUsers') {
    return /*#__PURE__*/React.createElement(AddUsers, {
      onClickClose: onClickClose,
      rid: rid,
      onClickBack: handleBack,
      reload: reload
    });
  }

  return /*#__PURE__*/React.createElement(RoomMembers, {
    rid: rid,
    isTeam: isTeam,
    isDirect: isDirect,
    loading: phase === AsyncStatePhase.LOADING,
    type: type,
    text: text,
    setType: setType,
    setText: handleTextChange,
    members: items,
    total: total,
    onClickClose: onClickClose,
    onClickView: viewUser,
    onClickAdd: canAddUsers && addUser,
    onClickInvite: canAddUsers && createInvite,
    loadMoreItems: loadMoreItems,
    reload: reload
  });
};

module.exportDefault(RoomMembersWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/2f2bc4b417f5823f1ba6d9593ae2859ac24f2f5a.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/List/RoomMembersWithData.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useMutableCallback, useDebouncedValue, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  }

}, 0);
let React, useCallback, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useAtLeastOnePermission;
module.link("../../../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 2);
let useUserRoom;
module.link("../../../../../contexts/UserContext", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 3);
let useRecordList;
module.link("../../../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let useMembersList;
module.link("../../../../hooks/useMembersList", {
  useMembersList(v) {
    useMembersList = v;
  }

}, 6);
let useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 7);
let UserInfoWithData;
module.link("../../UserInfo", {
  default(v) {
    UserInfoWithData = v;
  }

}, 8);
let AddUsers;
module.link("../AddUsers", {
  default(v) {
    AddUsers = v;
  }

}, 9);
let InviteUsers;
module.link("../InviteUsers", {
  default(v) {
    InviteUsers = v;
  }

}, 10);
let RoomMembers;
module.link("./RoomMembers", {
  default(v) {
    RoomMembers = v;
  }

}, 11);

const RoomMembersWithData = _ref => {
  let {
    rid
  } = _ref;
  const [state, setState] = useState({});
  const onClickClose = useTabBarClose();
  const room = useUserRoom(rid);
  const isTeam = room.teamMain;
  const isDirect = room.t === 'd';
  room.type = room.t;
  room.rid = rid;
  const [type, setType] = useLocalStorage('members-list-type', 'online');
  const [text, setText] = useState('');
  const debouncedText = useDebouncedValue(text, 800);
  const {
    membersList,
    loadMoreItems,
    reload
  } = useMembersList(useMemo(() => ({
    rid,
    type,
    limit: 50,
    debouncedText,
    roomType: room.t
  }), [rid, type, debouncedText, room.t]));
  const {
    phase,
    items,
    itemCount: total
  } = useRecordList(membersList);
  const canAddUsers = useAtLeastOnePermission(useMemo(() => [room.t === 'p' ? 'add-user-to-any-p-room' : 'add-user-to-any-c-room', 'add-user-to-joined-room'], [room.t]), rid);
  const handleTextChange = useCallback(event => {
    setText(event.currentTarget.value);
  }, []);
  const viewUser = useMutableCallback(e => {
    const {
      username
    } = e.currentTarget.dataset;
    setState({
      tab: 'UserInfo',
      username
    });
  });
  const createInvite = useMutableCallback(() => {
    setState({
      tab: 'InviteUsers'
    });
  });
  const addUser = useMutableCallback(() => {
    setState({
      tab: 'AddUsers'
    });
  });
  const handleBack = useCallback(() => {
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/List/aa7c6b6ba2b743687d868724196cf5dca2e1f3f0.map

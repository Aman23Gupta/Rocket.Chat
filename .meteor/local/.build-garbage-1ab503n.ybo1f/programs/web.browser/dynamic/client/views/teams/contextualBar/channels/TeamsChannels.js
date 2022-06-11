function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/TeamsChannels.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let useMutableCallback, useLocalStorage, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
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
let roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 2);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 3);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let CreateChannelWithData;
module.link("../../../../sidebar/header/CreateChannelWithData", {
  default(v) {
    CreateChannelWithData = v;
  }

}, 7);
let RoomInfo;
module.link("../../../room/contextualBar/Info", {
  default(v) {
    RoomInfo = v;
  }

}, 8);
let useTabBarClose;
module.link("../../../room/providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 9);
let AddExistingModal;
module.link("./AddExistingModal", {
  default(v) {
    AddExistingModal = v;
  }

}, 10);
let BaseTeamsChannels;
module.link("./BaseTeamsChannels", {
  default(v) {
    BaseTeamsChannels = v;
  }

}, 11);
let useTeamsChannelList;
module.link("./hooks/useTeamsChannelList", {
  useTeamsChannelList(v) {
    useTeamsChannelList = v;
  }

}, 12);

const useReactModal = (Component, props) => {
  const setModal = useSetModal();
  return useMutableCallback(e => {
    e.preventDefault();

    const handleClose = () => {
      setModal(null);
    };

    setModal(() => /*#__PURE__*/React.createElement(Component, _extends({
      onClose: handleClose
    }, props)));
  });
};

const TeamsChannels = _ref => {
  let {
    teamId,
    rid
  } = _ref;
  const [state, setState] = useState({});
  const onClickClose = useTabBarClose();
  const [type, setType] = useLocalStorage('channels-list-type', 'all');
  const [text, setText] = useState('');
  const debouncedText = useDebouncedValue(text, 800);
  const {
    teamsChannelList,
    loadMoreItems,
    reload
  } = useTeamsChannelList(useMemo(() => ({
    teamId,
    text: debouncedText,
    type
  }), [teamId, debouncedText, type]));
  const {
    phase,
    items,
    itemCount: total
  } = useRecordList(teamsChannelList);
  const handleTextChange = useCallback(event => {
    setText(event.currentTarget.value);
  }, []);
  const canAddExistingTeam = usePermission('add-team-channel', rid);
  const addExisting = useReactModal(AddExistingModal, {
    teamId,
    reload
  });
  const createNew = useReactModal(CreateChannelWithData, {
    teamId,
    reload
  });
  const goToRoom = useCallback(room => roomTypes.openRouteLink(room.t, room), []);
  const handleBack = useCallback(() => setState({}), [setState]);
  const viewRoom = useMutableCallback(room => {
    goToRoom(room);
  });

  if (state.tab === 'RoomInfo') {
    return /*#__PURE__*/React.createElement(RoomInfo, {
      rid: state.rid,
      onClickClose: onClickClose,
      onClickBack: handleBack,
      onEnterRoom: goToRoom,
      resetState: setState
    });
  }

  return /*#__PURE__*/React.createElement(BaseTeamsChannels, {
    loading: phase === AsyncStatePhase.LOADING,
    type: type,
    text: text,
    setType: setType,
    setText: handleTextChange,
    channels: items,
    total: total,
    onClickClose: onClickClose,
    onClickAddExisting: canAddExistingTeam && addExisting,
    onClickCreateNew: canAddExistingTeam && createNew,
    onClickView: viewRoom,
    loadMoreItems: loadMoreItems,
    reload: reload
  });
};

module.exportDefault(TeamsChannels);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/d2276665edcd62bae5aaabeeee37753198c86e1e.map

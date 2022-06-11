function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/TeamsChannels.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);
var useMutableCallback, useLocalStorage, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
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
var roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 2);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 3);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var CreateChannelWithData;
module.link("../../../../sidebar/header/CreateChannelWithData", {
  "default": function (v) {
    CreateChannelWithData = v;
  }
}, 7);
var RoomInfo;
module.link("../../../room/contextualBar/Info", {
  "default": function (v) {
    RoomInfo = v;
  }
}, 8);
var useTabBarClose;
module.link("../../../room/providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 9);
var AddExistingModal;
module.link("./AddExistingModal", {
  "default": function (v) {
    AddExistingModal = v;
  }
}, 10);
var BaseTeamsChannels;
module.link("./BaseTeamsChannels", {
  "default": function (v) {
    BaseTeamsChannels = v;
  }
}, 11);
var useTeamsChannelList;
module.link("./hooks/useTeamsChannelList", {
  useTeamsChannelList: function (v) {
    useTeamsChannelList = v;
  }
}, 12);

var useReactModal = function (Component, props) {
  var setModal = useSetModal();
  return useMutableCallback(function (e) {
    e.preventDefault();

    var handleClose = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(Component, _extends({
        onClose: handleClose
      }, props));
    });
  });
};

var TeamsChannels = function (_ref) {
  var teamId = _ref.teamId,
      rid = _ref.rid;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var onClickClose = useTabBarClose();

  var _useLocalStorage = useLocalStorage('channels-list-type', 'all'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      type = _useLocalStorage2[0],
      setType = _useLocalStorage2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1];

  var debouncedText = useDebouncedValue(text, 800);

  var _useTeamsChannelList = useTeamsChannelList(useMemo(function () {
    return {
      teamId: teamId,
      text: debouncedText,
      type: type
    };
  }, [teamId, debouncedText, type])),
      teamsChannelList = _useTeamsChannelList.teamsChannelList,
      loadMoreItems = _useTeamsChannelList.loadMoreItems,
      reload = _useTeamsChannelList.reload;

  var _useRecordList = useRecordList(teamsChannelList),
      phase = _useRecordList.phase,
      items = _useRecordList.items,
      total = _useRecordList.itemCount;

  var handleTextChange = useCallback(function (event) {
    setText(event.currentTarget.value);
  }, []);
  var canAddExistingTeam = usePermission('add-team-channel', rid);
  var addExisting = useReactModal(AddExistingModal, {
    teamId: teamId,
    reload: reload
  });
  var createNew = useReactModal(CreateChannelWithData, {
    teamId: teamId,
    reload: reload
  });
  var goToRoom = useCallback(function (room) {
    return roomTypes.openRouteLink(room.t, room);
  }, []);
  var handleBack = useCallback(function () {
    return setState({});
  }, [setState]);
  var viewRoom = useMutableCallback(function (room) {
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/93f67c83f2794826e03fa3ae0eb45792b2a7ac0c.map

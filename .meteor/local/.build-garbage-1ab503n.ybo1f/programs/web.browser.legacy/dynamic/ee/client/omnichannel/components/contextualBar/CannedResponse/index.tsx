function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/index.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  WrapCannedResponseList: function () {
    return WrapCannedResponseList;
  }
});
var useDebouncedValue, useLocalStorage, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, memo, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
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
var chatMessages;
module.link("../../../../../../app/ui", {
  chatMessages: function (v) {
    chatMessages = v;
  }
}, 2);
var useSetModal;
module.link("../../../../../../client/contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useCurrentRoute, useRoute;
module.link("../../../../../../client/contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useRecordList;
module.link("../../../../../../client/hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../../../../client/lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useRoom;
module.link("../../../../../../client/views/room/contexts/RoomContext", {
  useRoom: function (v) {
    useRoom = v;
  }
}, 7);
var useCannedResponseFilterOptions;
module.link("../../../hooks/useCannedResponseFilterOptions", {
  useCannedResponseFilterOptions: function (v) {
    useCannedResponseFilterOptions = v;
  }
}, 8);
var useCannedResponseList;
module.link("../../../hooks/useCannedResponseList", {
  useCannedResponseList: function (v) {
    useCannedResponseList = v;
  }
}, 9);
var CreateCannedResponse;
module.link("../../CannedResponse/modals", {
  "default": function (v) {
    CreateCannedResponse = v;
  }
}, 10);
var CannedResponseList;
module.link("./CannedResponseList", {
  "default": function (v) {
    CannedResponseList = v;
  }
}, 11);

var WrapCannedResponseList = function (_ref) {
  var tabBar = _ref.tabBar;
  var room = useRoom();

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      name = _useCurrentRoute2[0];

  var channelRoute = useRoute(name || '');
  var setModal = useSetModal();
  var options = useCannedResponseFilterOptions();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useLocalStorage = useLocalStorage('canned-response-list-type', 'all'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      type = _useLocalStorage2[0],
      setType = _useLocalStorage2[1];

  var handleTextChange = useCallback(function (event) {
    setText(event.currentTarget.value);
  }, []);
  var debouncedText = useDebouncedValue(text, 400);

  var _useCannedResponseLis = useCannedResponseList(useMemo(function () {
    return {
      filter: debouncedText,
      type: type
    };
  }, [debouncedText, type])),
      cannedList = _useCannedResponseLis.cannedList,
      loadMoreItems = _useCannedResponseLis.loadMoreItems,
      reload = _useCannedResponseLis.reload;

  var _useRecordList = useRecordList(cannedList),
      phase = _useRecordList.phase,
      items = _useRecordList.items,
      itemCount = _useRecordList.itemCount;

  var onClickItem = useMutableCallback(function (data) {
    var context = data._id;
    channelRoute === null || channelRoute === void 0 ? void 0 : channelRoute.push({
      id: room._id,
      tab: 'canned-responses',
      context: context
    });
  });

  var onClickUse = function (e, text) {
    e.preventDefault();
    e.stopPropagation();
    var input = chatMessages[room._id].input;
    input.value = text;
    input.focus();
  };

  var onClickCreate = function () {
    setModal( /*#__PURE__*/React.createElement(CreateCannedResponse, {
      reloadCannedList: reload
    }));
  };

  return /*#__PURE__*/React.createElement(CannedResponseList, {
    loadMoreItems: loadMoreItems,
    cannedItems: items,
    itemCount: itemCount,
    onClose: tabBar.close,
    loading: phase === AsyncStatePhase.LOADING,
    options: options,
    text: text,
    setText: handleTextChange,
    type: type,
    setType: setType,
    onClickUse: onClickUse,
    onClickItem: onClickItem,
    onClickCreate: onClickCreate,
    reload: reload
  });
};

module.exportDefault( /*#__PURE__*/memo(WrapCannedResponseList));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/e2963a0282c0e81aca877d047053804c57f8cec7.map

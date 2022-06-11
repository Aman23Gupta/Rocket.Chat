function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/index.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  WrapCannedResponseList: () => WrapCannedResponseList
});
let useDebouncedValue, useLocalStorage, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, memo, useCallback, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
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
let chatMessages;
module.link("../../../../../../app/ui", {
  chatMessages(v) {
    chatMessages = v;
  }

}, 2);
let useSetModal;
module.link("../../../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useCurrentRoute, useRoute;
module.link("../../../../../../client/contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useRecordList;
module.link("../../../../../../client/hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../../../../client/lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useRoom;
module.link("../../../../../../client/views/room/contexts/RoomContext", {
  useRoom(v) {
    useRoom = v;
  }

}, 7);
let useCannedResponseFilterOptions;
module.link("../../../hooks/useCannedResponseFilterOptions", {
  useCannedResponseFilterOptions(v) {
    useCannedResponseFilterOptions = v;
  }

}, 8);
let useCannedResponseList;
module.link("../../../hooks/useCannedResponseList", {
  useCannedResponseList(v) {
    useCannedResponseList = v;
  }

}, 9);
let CreateCannedResponse;
module.link("../../CannedResponse/modals", {
  default(v) {
    CreateCannedResponse = v;
  }

}, 10);
let CannedResponseList;
module.link("./CannedResponseList", {
  default(v) {
    CannedResponseList = v;
  }

}, 11);

const WrapCannedResponseList = _ref => {
  let {
    tabBar
  } = _ref;
  const room = useRoom();
  const [name] = useCurrentRoute();
  const channelRoute = useRoute(name || '');
  const setModal = useSetModal();
  const options = useCannedResponseFilterOptions();
  const [text, setText] = useState('');
  const [type, setType] = useLocalStorage('canned-response-list-type', 'all');
  const handleTextChange = useCallback(event => {
    setText(event.currentTarget.value);
  }, []);
  const debouncedText = useDebouncedValue(text, 400);
  const {
    cannedList,
    loadMoreItems,
    reload
  } = useCannedResponseList(useMemo(() => ({
    filter: debouncedText,
    type
  }), [debouncedText, type]));
  const {
    phase,
    items,
    itemCount
  } = useRecordList(cannedList);
  const onClickItem = useMutableCallback(data => {
    const {
      _id: context
    } = data;
    channelRoute === null || channelRoute === void 0 ? void 0 : channelRoute.push({
      id: room._id,
      tab: 'canned-responses',
      context
    });
  });

  const onClickUse = (e, text) => {
    e.preventDefault();
    e.stopPropagation();
    const {
      input
    } = chatMessages[room._id];
    input.value = text;
    input.focus();
  };

  const onClickCreate = () => {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/da557ff7f78ad613cda71f1c88665b029e729d3e.map

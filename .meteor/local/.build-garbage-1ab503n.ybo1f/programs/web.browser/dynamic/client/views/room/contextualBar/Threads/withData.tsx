function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/withData.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["rid"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  withData: () => withData
});
let useDebouncedValue, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
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
let useUserId, useUserSubscription;
module.link("../../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  },

  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 2);
let useRecordList;
module.link("../../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useUserRoom;
module.link("../../hooks/useUserRoom", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 5);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 6);
let useThreadsList;
module.link("./useThreadsList", {
  useThreadsList(v) {
    useThreadsList = v;
  }

}, 7);
const subscriptionFields = {
  tunread: true,
  tunreadUser: true,
  tunreadGroup: true
};
const roomFields = {
  t: 1,
  name: 1
};

function withData(Component) {
  var _ref2, _Component$displayNam;

  const WrappedComponent = _ref => {
    var _subscription$tunread;

    let {
      rid
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const userId = useUserId();
    const onClose = useTabBarClose();
    const room = useUserRoom(rid, roomFields);
    const subscription = useUserSubscription(rid, subscriptionFields);
    const [type, setType] = useLocalStorage('thread-list-type', 'all');
    const [text, setText] = useState('');
    const debouncedText = useDebouncedValue(text, 400);
    const options = useDebouncedValue(useMemo(() => {
      if (type === 'all' || !subscription || !userId) {
        return {
          rid,
          text: debouncedText,
          type: 'all'
        };
      }

      switch (type) {
        case 'following':
          return {
            rid,
            text: debouncedText,
            type,
            uid: userId
          };

        case 'unread':
          return {
            rid,
            text: debouncedText,
            type,
            tunread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread
          };
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [rid, debouncedText, type, subscription === null || subscription === void 0 ? void 0 : (_subscription$tunread = subscription.tunread) === null || _subscription$tunread === void 0 ? void 0 : _subscription$tunread.sort().join(), userId]), 300);
    const {
      threadsList,
      loadMoreItems
    } = useThreadsList(options, userId);
    const {
      phase,
      error,
      items: threads,
      itemCount: totalItemCount
    } = useRecordList(threadsList);
    const handleTextChange = useCallback(event => {
      setText(event.currentTarget.value);
    }, []);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      unread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread,
      unreadUser: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadUser,
      unreadGroup: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadGroup,
      userId: userId,
      error: error,
      threads: threads,
      total: totalItemCount,
      loading: phase === AsyncStatePhase.LOADING,
      loadMoreItems: loadMoreItems,
      room: room,
      text: text,
      setText: handleTextChange,
      type: type,
      setType: setType,
      onClose: onClose
    }));
  };

  WrappedComponent.displayName = "withData(".concat((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component', ")");
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/73f53ea96382bf79d67d45c1b9fba2d1f855924e.map

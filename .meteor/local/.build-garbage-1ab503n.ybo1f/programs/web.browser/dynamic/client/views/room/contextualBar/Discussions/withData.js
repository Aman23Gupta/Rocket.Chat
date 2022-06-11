function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/withData.js                                                             //
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
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
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
let useDiscussionsList;
module.link("./useDiscussionsList", {
  useDiscussionsList(v) {
    useDiscussionsList = v;
  }

}, 7);
const subscriptionFields = {
  tunread: 1,
  tunreadUser: 1,
  tunreadGroup: 1
};
const roomFields = {
  t: 1,
  name: 1
};

function withData(Component) {
  var _ref2, _Component$displayNam;

  const WrappedComponent = _ref => {
    let {
      rid
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const room = useUserRoom(rid, roomFields);
    const subscription = useUserSubscription(rid, subscriptionFields);
    const userId = useUserId();
    const onClose = useTabBarClose();
    const [text, setText] = useState('');
    const debouncedText = useDebouncedValue(text, 400);
    const options = useMemo(() => ({
      rid,
      text: debouncedText
    }), [rid, debouncedText]);
    const {
      discussionsList,
      initialItemCount,
      loadMoreItems
    } = useDiscussionsList(options, userId);
    const {
      phase,
      error,
      items: discussions,
      itemCount: totalItemCount
    } = useRecordList(discussionsList);
    const handleTextChange = useCallback(e => {
      setText(e.currentTarget.value);
    }, []);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      onClose: onClose,
      unread: subscription === null || subscription === void 0 ? void 0 : subscription.tunread,
      unreadUser: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadUser,
      unreadGroup: subscription === null || subscription === void 0 ? void 0 : subscription.tunreadGroup,
      userId: userId,
      error: error,
      discussions: discussions,
      total: totalItemCount,
      initial: initialItemCount,
      loading: phase === AsyncStatePhase.LOADING,
      loadMoreItems: loadMoreItems,
      room: room,
      text: text,
      setText: handleTextChange
    }));
  };

  WrappedComponent.displayName = "withData(".concat((_ref2 = (_Component$displayNam = Component.displayName) !== null && _Component$displayNam !== void 0 ? _Component$displayNam : Component.name) !== null && _ref2 !== void 0 ? _ref2 : 'Component', ")");
  return WrappedComponent;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/80a9d99d442a32cbe7214c4528e7287c73fa2e02.map

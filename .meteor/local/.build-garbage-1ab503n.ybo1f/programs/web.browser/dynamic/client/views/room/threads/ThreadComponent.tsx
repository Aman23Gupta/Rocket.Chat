function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/threads/ThreadComponent.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useLocalStorage(v) {
    useLocalStorage = v;
  }

}, 0);
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 1);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 3);
let React, useEffect, useRef, useState, useCallback, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 4);
let ChatMessage;
module.link("../../../../app/models/client", {
  ChatMessage(v) {
    ChatMessage = v;
  }

}, 5);
let normalizeThreadTitle;
module.link("../../../../app/threads/client/lib/normalizeThreadTitle", {
  normalizeThreadTitle(v) {
    normalizeThreadTitle = v;
  }

}, 6);
let roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 7);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useEndpoint, useMethod;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  },

  useMethod(v) {
    useMethod = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useUserId, useUserSubscription;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  },

  useUserSubscription(v) {
    useUserSubscription = v;
  }

}, 11);
let mapMessageFromApi;
module.link("../../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi(v) {
    mapMessageFromApi = v;
  }

}, 12);
let useTabBarOpenUserInfo;
module.link("../providers/ToolboxProvider", {
  useTabBarOpenUserInfo(v) {
    useTabBarOpenUserInfo = v;
  }

}, 13);
let ThreadSkeleton;
module.link("./ThreadSkeleton", {
  default(v) {
    ThreadSkeleton = v;
  }

}, 14);
let ThreadView;
module.link("./ThreadView", {
  default(v) {
    ThreadView = v;
  }

}, 15);
const subscriptionFields = {};

const useThreadMessage = tmid => {
  const [message, setMessage] = useState(() => Tracker.nonreactive(() => ChatMessage.findOne({
    _id: tmid
  })));
  const getMessage = useEndpoint('GET', 'chat.getMessage');
  const getMessageParsed = useCallback(async params => {
    const {
      message
    } = await getMessage(params);
    return mapMessageFromApi(message);
  }, [getMessage]);
  useEffect(() => {
    const computation = Tracker.autorun(async computation => {
      const msg = ChatMessage.findOne({
        _id: tmid
      }) || (await getMessageParsed({
        msgId: tmid
      }));

      if (!msg || computation.stopped) {
        return;
      }

      setMessage(prevMsg => {
        var _prevMsg$_updatedAt, _msg$_updatedAt;

        if (!prevMsg || prevMsg._id !== msg._id || ((_prevMsg$_updatedAt = prevMsg._updatedAt) === null || _prevMsg$_updatedAt === void 0 ? void 0 : _prevMsg$_updatedAt.getTime()) !== ((_msg$_updatedAt = msg._updatedAt) === null || _msg$_updatedAt === void 0 ? void 0 : _msg$_updatedAt.getTime())) {
          return msg;
        }

        return prevMsg;
      });
    });
    return () => {
      computation.stop();
    };
  }, [getMessageParsed, tmid]);
  return message;
};

const ThreadComponent = _ref => {
  var _threadMessage$replie, _threadMessage$replie2;

  let {
    mid,
    jump,
    room,
    onClickBack
  } = _ref;
  const subscription = useUserSubscription(room._id, subscriptionFields);
  const channelRoute = useRoute(roomTypes.getConfig(room.t).route.name);
  const threadMessage = useThreadMessage(mid);
  const openUserInfo = useTabBarOpenUserInfo();
  const ref = useRef(null);
  const uid = useUserId();
  const headerTitle = useMemo(() => threadMessage ? normalizeThreadTitle(threadMessage) : null, [threadMessage]);
  const [expanded, setExpand] = useLocalStorage('expand-threads', false);
  const following = !uid ? false : (_threadMessage$replie = threadMessage === null || threadMessage === void 0 ? void 0 : (_threadMessage$replie2 = threadMessage.replies) === null || _threadMessage$replie2 === void 0 ? void 0 : _threadMessage$replie2.includes(uid)) !== null && _threadMessage$replie !== void 0 ? _threadMessage$replie : false;
  const dispatchToastMessage = useToastMessageDispatch();
  const followMessage = useMethod('followMessage');
  const unfollowMessage = useMethod('unfollowMessage');
  const setFollowing = useCallback(async following => {
    try {
      if (following) {
        await followMessage({
          mid
        });
        return;
      }

      await unfollowMessage({
        mid
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, followMessage, unfollowMessage, mid]);
  const handleClose = useCallback(() => {
    channelRoute.push(room.t === 'd' ? {
      rid: room._id
    } : {
      name: room.name || room._id
    });
  }, [channelRoute, room._id, room.t, room.name]);
  const [viewData, setViewData] = useState(() => ({
    mainMessage: threadMessage,
    jump,
    following,
    subscription,
    rid: room._id,
    tabBar: {
      openUserInfo
    }
  }));
  useEffect(() => {
    setViewData(viewData => {
      var _viewData$mainMessage;

      if (!threadMessage || ((_viewData$mainMessage = viewData.mainMessage) === null || _viewData$mainMessage === void 0 ? void 0 : _viewData$mainMessage._id) === threadMessage._id) {
        return viewData;
      }

      return {
        mainMessage: threadMessage,
        jump,
        following,
        subscription,
        rid: room._id,
        tabBar: {
          openUserInfo
        }
      };
    });
  }, [following, jump, openUserInfo, room._id, subscription, threadMessage]);
  useEffect(() => {
    if (!ref.current || !viewData.mainMessage) {
      return;
    }

    const view = Blaze.renderWithData(Template.thread, viewData, ref.current);
    return () => {
      Blaze.remove(view);
    };
  }, [viewData]);

  if (!threadMessage) {
    return /*#__PURE__*/React.createElement(ThreadSkeleton, {
      expanded: expanded,
      onClose: handleClose
    });
  }

  return /*#__PURE__*/React.createElement(ThreadView, {
    ref: ref,
    title: headerTitle,
    expanded: expanded,
    following: following,
    onToggleExpand: expanded => setExpand(!expanded),
    onToggleFollow: following => setFollowing(!following),
    onClose: handleClose,
    onClickBack: onClickBack
  });
};

module.exportDefault(ThreadComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/threads/19941cb4ac37efaf79ef1fdb0204c2c3275d4141.map

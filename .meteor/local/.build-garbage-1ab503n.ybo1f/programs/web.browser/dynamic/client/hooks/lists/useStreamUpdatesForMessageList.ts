function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useStreamUpdatesForMessageList.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useStreamUpdatesForMessageList: () => useStreamUpdatesForMessageList
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useStream;
module.link("../../contexts/ServerContext", {
  useStream(v) {
    useStream = v;
  }

}, 1);
let createFilterFromQuery;
module.link("../../lib/minimongo", {
  createFilterFromQuery(v) {
    createFilterFromQuery = v;
  }

}, 2);

const createDeleteCriteria = params => {
  const query = {
    ts: params.ts
  };

  if (params.excludePinned) {
    query.pinned = {
      $ne: true
    };
  }

  if (params.ignoreDiscussion) {
    query.drid = {
      $exists: false
    };
  }

  if (params.users && params.users.length) {
    query['u.username'] = {
      $in: params.users
    };
  }

  return createFilterFromQuery(query);
};

const useStreamUpdatesForMessageList = (messageList, uid, rid) => {
  const subscribeToRoomMessages = useStream('room-messages');
  const subscribeToNotifyRoom = useStream('notify-room');
  useEffect(() => {
    if (!uid || !rid) {
      messageList.clear();
      return;
    }

    const unsubscribeFromRoomMessages = subscribeToRoomMessages(rid, message => {
      messageList.handle(message);
    });
    const unsubscribeFromDeleteMessage = subscribeToNotifyRoom("".concat(rid, "/deleteMessage"), _ref => {
      let {
        _id: mid
      } = _ref;
      messageList.remove(mid);
    });
    const unsubscribeFromDeleteMessageBulk = subscribeToNotifyRoom("".concat(rid, "/deleteMessageBulk"), params => {
      const matchDeleteCriteria = createDeleteCriteria(params);
      messageList.prune(matchDeleteCriteria);
    });
    return () => {
      unsubscribeFromRoomMessages();
      unsubscribeFromDeleteMessage();
      unsubscribeFromDeleteMessageBulk();
    };
  }, [subscribeToRoomMessages, subscribeToNotifyRoom, uid, rid, messageList]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/4001fc157cea3ec1fb02c3223af373b9f5ab8113.map

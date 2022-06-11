function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useStreamUpdatesForMessageList.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useStreamUpdatesForMessageList: function () {
    return useStreamUpdatesForMessageList;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useStream;
module.link("../../contexts/ServerContext", {
  useStream: function (v) {
    useStream = v;
  }
}, 1);
var createFilterFromQuery;
module.link("../../lib/minimongo", {
  createFilterFromQuery: function (v) {
    createFilterFromQuery = v;
  }
}, 2);

var createDeleteCriteria = function (params) {
  var query = {
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

var useStreamUpdatesForMessageList = function (messageList, uid, rid) {
  var subscribeToRoomMessages = useStream('room-messages');
  var subscribeToNotifyRoom = useStream('notify-room');
  useEffect(function () {
    if (!uid || !rid) {
      messageList.clear();
      return;
    }

    var unsubscribeFromRoomMessages = subscribeToRoomMessages(rid, function (message) {
      messageList.handle(message);
    });
    var unsubscribeFromDeleteMessage = subscribeToNotifyRoom(rid + "/deleteMessage", function (_ref) {
      var mid = _ref._id;
      messageList.remove(mid);
    });
    var unsubscribeFromDeleteMessageBulk = subscribeToNotifyRoom(rid + "/deleteMessageBulk", function (params) {
      var matchDeleteCriteria = createDeleteCriteria(params);
      messageList.prune(matchDeleteCriteria);
    });
    return function () {
      unsubscribeFromRoomMessages();
      unsubscribeFromDeleteMessage();
      unsubscribeFromDeleteMessageBulk();
    };
  }, [subscribeToRoomMessages, subscribeToNotifyRoom, uid, rid, messageList]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/77c3fb5c066060a3dda1e5eb344889cd39bc4fd9.map

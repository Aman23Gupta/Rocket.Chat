function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/useDiscussionsList.ts                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  useDiscussionsList: function () {
    return useDiscussionsList;
  }
});
var useCallback, useMemo;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useScrollableMessageList;
module.link("../../../../hooks/lists/useScrollableMessageList", {
  useScrollableMessageList: function (v) {
    useScrollableMessageList = v;
  }
}, 2);
var useStreamUpdatesForMessageList;
module.link("../../../../hooks/lists/useStreamUpdatesForMessageList", {
  useStreamUpdatesForMessageList: function (v) {
    useStreamUpdatesForMessageList = v;
  }
}, 3);
var DiscussionsList;
module.link("../../../../lib/lists/DiscussionsList", {
  DiscussionsList: function (v) {
    DiscussionsList = v;
  }
}, 4);
var getConfig;
module.link("../../../../lib/utils/getConfig", {
  getConfig: function (v) {
    getConfig = v;
  }
}, 5);

var useDiscussionsList = function (options, uid) {
  var discussionsList = useMemo(function () {
    return new DiscussionsList(options);
  }, [options]);
  var getDiscussions = useEndpoint('GET', 'chat.getDiscussions');
  var fetchMessages = useCallback(function () {
    function _callee(start, end) {
      var _await$getDiscussions, messages, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getDiscussions({
                  roomId: options.rid,
                  text: options.text,
                  offset: start,
                  count: end
                }));

              case 2:
                _await$getDiscussions = _context.sent;
                messages = _await$getDiscussions.messages;
                total = _await$getDiscussions.total;
                return _context.abrupt("return", {
                  items: messages,
                  itemCount: total
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getDiscussions, options.rid, options.text]);

  var _useScrollableMessage = useScrollableMessageList(discussionsList, fetchMessages, useMemo(function () {
    var discussionListSize = getConfig('discussionListSize');
    return discussionListSize ? parseInt(discussionListSize, 10) : undefined;
  }, [])),
      loadMoreItems = _useScrollableMessage.loadMoreItems,
      initialItemCount = _useScrollableMessage.initialItemCount;

  useStreamUpdatesForMessageList(discussionsList, uid, options.rid);
  return {
    discussionsList: discussionsList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/c11df3e4fce0d7ccb4fa784889d71f68b6c871bd.map

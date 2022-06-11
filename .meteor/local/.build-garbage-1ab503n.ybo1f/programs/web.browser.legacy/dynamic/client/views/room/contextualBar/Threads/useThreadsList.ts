function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/useThreadsList.ts                                                           //
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
  useThreadsList: function () {
    return useThreadsList;
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
var ThreadsList;
module.link("../../../../lib/lists/ThreadsList", {
  ThreadsList: function (v) {
    ThreadsList = v;
  }
}, 4);
var getConfig;
module.link("../../../../lib/utils/getConfig", {
  getConfig: function (v) {
    getConfig = v;
  }
}, 5);

var useThreadsList = function (options, uid) {
  var threadsList = useMemo(function () {
    return new ThreadsList(options);
  }, [options]);
  var getThreadsList = useEndpoint('GET', 'chat.getThreadsList');
  var fetchMessages = useCallback(function () {
    function _callee(start, end) {
      var _await$getThreadsList, threads, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getThreadsList({
                  rid: options.rid,
                  type: options.type,
                  text: options.text,
                  offset: start,
                  count: end
                }));

              case 2:
                _await$getThreadsList = _context.sent;
                threads = _await$getThreadsList.threads;
                total = _await$getThreadsList.total;
                return _context.abrupt("return", {
                  items: threads,
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
  }(), [getThreadsList, options.rid, options.text, options.type]);

  var _useScrollableMessage = useScrollableMessageList(threadsList, fetchMessages, useMemo(function () {
    var threadsListSize = getConfig('threadsListSize');
    return threadsListSize ? parseInt(threadsListSize, 10) : undefined;
  }, [])),
      loadMoreItems = _useScrollableMessage.loadMoreItems,
      initialItemCount = _useScrollableMessage.initialItemCount;

  useStreamUpdatesForMessageList(threadsList, uid, options.rid);
  return {
    threadsList: threadsList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/b6b43e61adfcc4ee652fc872a35594d3aff29c7f.map

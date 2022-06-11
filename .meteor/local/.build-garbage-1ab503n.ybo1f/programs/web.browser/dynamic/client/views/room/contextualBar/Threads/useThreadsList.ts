function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/useThreadsList.ts                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useThreadsList: () => useThreadsList
});
let useCallback, useMemo;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableMessageList;
module.link("../../../../hooks/lists/useScrollableMessageList", {
  useScrollableMessageList(v) {
    useScrollableMessageList = v;
  }

}, 2);
let useStreamUpdatesForMessageList;
module.link("../../../../hooks/lists/useStreamUpdatesForMessageList", {
  useStreamUpdatesForMessageList(v) {
    useStreamUpdatesForMessageList = v;
  }

}, 3);
let ThreadsList;
module.link("../../../../lib/lists/ThreadsList", {
  ThreadsList(v) {
    ThreadsList = v;
  }

}, 4);
let getConfig;
module.link("../../../../lib/utils/getConfig", {
  getConfig(v) {
    getConfig = v;
  }

}, 5);

const useThreadsList = (options, uid) => {
  const threadsList = useMemo(() => new ThreadsList(options), [options]);
  const getThreadsList = useEndpoint('GET', 'chat.getThreadsList');
  const fetchMessages = useCallback(async (start, end) => {
    const {
      threads,
      total
    } = await getThreadsList({
      rid: options.rid,
      type: options.type,
      text: options.text,
      offset: start,
      count: end
    });
    return {
      items: threads,
      itemCount: total
    };
  }, [getThreadsList, options.rid, options.text, options.type]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableMessageList(threadsList, fetchMessages, useMemo(() => {
    const threadsListSize = getConfig('threadsListSize');
    return threadsListSize ? parseInt(threadsListSize, 10) : undefined;
  }, []));
  useStreamUpdatesForMessageList(threadsList, uid, options.rid);
  return {
    threadsList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/d13f70bb36bba86262a393bcef99b3b969753478.map

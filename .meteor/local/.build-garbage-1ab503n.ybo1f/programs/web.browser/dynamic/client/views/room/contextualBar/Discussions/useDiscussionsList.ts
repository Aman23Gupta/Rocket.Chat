function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/useDiscussionsList.ts                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDiscussionsList: () => useDiscussionsList
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
let DiscussionsList;
module.link("../../../../lib/lists/DiscussionsList", {
  DiscussionsList(v) {
    DiscussionsList = v;
  }

}, 4);
let getConfig;
module.link("../../../../lib/utils/getConfig", {
  getConfig(v) {
    getConfig = v;
  }

}, 5);

const useDiscussionsList = (options, uid) => {
  const discussionsList = useMemo(() => new DiscussionsList(options), [options]);
  const getDiscussions = useEndpoint('GET', 'chat.getDiscussions');
  const fetchMessages = useCallback(async (start, end) => {
    const {
      messages,
      total
    } = await getDiscussions({
      roomId: options.rid,
      text: options.text,
      offset: start,
      count: end
    });
    return {
      items: messages,
      itemCount: total
    };
  }, [getDiscussions, options.rid, options.text]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableMessageList(discussionsList, fetchMessages, useMemo(() => {
    const discussionListSize = getConfig('discussionListSize');
    return discussionListSize ? parseInt(discussionListSize, 10) : undefined;
  }, []));
  useStreamUpdatesForMessageList(discussionsList, uid, options.rid);
  return {
    discussionsList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/2215b14b18f95d02193659433c0cebe83c4b790d.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useMonitorsList.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useMonitorsList: () => useMonitorsList
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);

const useMonitorsList = options => {
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const endpoint = 'livechat/monitors.list';
  const getMonitors = useEndpoint('GET', endpoint);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      monitors,
      total
    } = await getMonitors({
      text: options.filter,
      offset: start,
      count: end + start
    });
    return {
      items: monitors.map(members => {
        members._updatedAt = new Date(members._updatedAt);
        members.label = members.username;
        members.value = {
          value: members._id,
          label: members.username
        };
        return members;
      }),
      itemCount: total
    };
  }, [getMonitors, options.filter]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(itemsList, fetchData, 25);
  return {
    reload,
    itemsList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/87c8a28b1dcd223a1169bb51372b834b4a94d67c.map

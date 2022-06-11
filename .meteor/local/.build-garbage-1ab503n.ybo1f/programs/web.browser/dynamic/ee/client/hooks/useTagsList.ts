function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/hooks/useTagsList.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTagsList: () => useTagsList
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
module.link("../../../client/contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../../client/hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../../client/hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../../client/lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);

const useTagsList = options => {
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const getTags = useEndpoint('GET', 'livechat/tags.list');
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      tags,
      total
    } = await getTags({
      text: options.filter,
      offset: start,
      count: end + start
    });
    return {
      items: tags.map(tag => {
        tag._updatedAt = new Date(tag._updatedAt);
        tag.label = tag.name;
        tag.value = {
          value: tag._id,
          label: tag.name
        };
        return tag;
      }),
      itemCount: total
    };
  }, [getTags, options.filter]);
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
//# sourceMappingURL=/dynamic/ee/client/hooks/e118ef0aa10ee258a5a88f58360f24caed792992.map

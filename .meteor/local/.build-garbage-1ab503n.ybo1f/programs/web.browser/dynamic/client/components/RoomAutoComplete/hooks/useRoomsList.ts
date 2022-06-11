function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomAutoComplete/hooks/useRoomsList.ts                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRoomsList: () => useRoomsList
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
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);

const useRoomsList = options => {
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const endpoint = 'rooms.autocomplete.channelAndPrivate.withPagination';
  const getRooms = useEndpoint('GET', endpoint);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      items: rooms,
      total
    } = await getRooms({
      selector: JSON.stringify({
        name: options.text || ''
      }),
      offset: start,
      count: start + end,
      sort: JSON.stringify({
        name: 1
      })
    });
    const items = rooms.map(room => {
      room._updatedAt = new Date(room._updatedAt);
      room.label = room.name;
      room.value = room.name;
      return room;
    });
    return {
      items,
      itemCount: total
    };
  }, [getRooms, options.text]);
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
//# sourceMappingURL=/dynamic/client/components/RoomAutoComplete/hooks/3576a29cf02a1d539fadd32dae2d92569579bf61.map

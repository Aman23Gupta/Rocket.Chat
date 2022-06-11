function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useScrollableMessageList.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useScrollableMessageList: () => useScrollableMessageList
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let mapMessageFromApi;
module.link("../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi(v) {
    mapMessageFromApi = v;
  }

}, 1);
let useScrollableRecordList;
module.link("./useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);

const useScrollableMessageList = (messageList, fetchMessages, initialItemCount) => {
  const fetchItems = useCallback(async (start, end) => {
    const batchChanges = await fetchMessages(start, end);
    return _objectSpread(_objectSpread({}, batchChanges.items && {
      items: batchChanges.items.map(mapMessageFromApi)
    }), batchChanges.itemCount && {
      itemCount: batchChanges.itemCount
    });
  }, [fetchMessages]);
  return useScrollableRecordList(messageList, fetchItems, initialItemCount);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/4f2d457854d4a108511ece9c79da190e18ef21cb.map

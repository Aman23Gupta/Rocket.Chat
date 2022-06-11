function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useScrollableRecordList.ts                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useScrollableRecordList: () => useScrollableRecordList
});
let useCallback, useEffect;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let AsyncStatePhase;
module.link("../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 1);
const INITIAL_ITEM_COUNT = 25;

const useScrollableRecordList = function (recordList, fetchBatchChanges) {
  let initialItemCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : INITIAL_ITEM_COUNT;
  const loadMoreItems = useCallback(start => {
    if (recordList.phase === AsyncStatePhase.LOADING || start + 1 < recordList.itemCount) {
      recordList.batchHandle(() => fetchBatchChanges(start, initialItemCount));
    }
  }, [recordList, fetchBatchChanges, initialItemCount]);
  useEffect(() => {
    loadMoreItems(0);
  }, [loadMoreItems]);
  return {
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/f9ea3dd784b0c28e218ce74505e8381576ae9a0f.map

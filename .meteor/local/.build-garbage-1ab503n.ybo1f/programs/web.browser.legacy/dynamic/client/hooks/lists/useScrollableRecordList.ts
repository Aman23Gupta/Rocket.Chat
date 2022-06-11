function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useScrollableRecordList.ts                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useScrollableRecordList: function () {
    return useScrollableRecordList;
  }
});
var useCallback, useEffect;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var AsyncStatePhase;
module.link("../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 1);
var INITIAL_ITEM_COUNT = 25;

var useScrollableRecordList = function (recordList, fetchBatchChanges) {
  var initialItemCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : INITIAL_ITEM_COUNT;
  var loadMoreItems = useCallback(function (start) {
    if (recordList.phase === AsyncStatePhase.LOADING || start + 1 < recordList.itemCount) {
      recordList.batchHandle(function () {
        return fetchBatchChanges(start, initialItemCount);
      });
    }
  }, [recordList, fetchBatchChanges, initialItemCount]);
  useEffect(function () {
    loadMoreItems(0);
  }, [loadMoreItems]);
  return {
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/76f905cec9fabe5c3d826940072ade708fc63bbe.map

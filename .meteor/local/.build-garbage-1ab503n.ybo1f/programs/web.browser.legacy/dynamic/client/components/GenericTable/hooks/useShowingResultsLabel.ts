function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useShowingResultsLabel.ts                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useShowingResultsLabel: function () {
    return useShowingResultsLabel;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);

var useShowingResultsLabel = function () {
  var t = useTranslation();
  return useCallback(function (_ref) {
    var count = _ref.count,
        current = _ref.current,
        itemsPerPage = _ref.itemsPerPage;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/c2337d866be5a747895a7f51aa746a28fbe64e73.map

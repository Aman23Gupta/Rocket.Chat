function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/usePagination.ts                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  usePagination: function () {
    return usePagination;
  }
});
var useCurrent;
module.link("./useCurrent", {
  useCurrent: function (v) {
    useCurrent = v;
  }
}, 0);
var useItemsPerPage;
module.link("./useItemsPerPage", {
  useItemsPerPage: function (v) {
    useItemsPerPage = v;
  }
}, 1);
var useItemsPerPageLabel;
module.link("./useItemsPerPageLabel", {
  useItemsPerPageLabel: function (v) {
    useItemsPerPageLabel = v;
  }
}, 2);
var useShowingResultsLabel;
module.link("./useShowingResultsLabel", {
  useShowingResultsLabel: function (v) {
    useShowingResultsLabel = v;
  }
}, 3);

var usePagination = function () {
  var _useItemsPerPage = useItemsPerPage(),
      _useItemsPerPage2 = _slicedToArray(_useItemsPerPage, 2),
      itemsPerPage = _useItemsPerPage2[0],
      setItemsPerPage = _useItemsPerPage2[1];

  var _useCurrent = useCurrent(),
      _useCurrent2 = _slicedToArray(_useCurrent, 2),
      current = _useCurrent2[0],
      setCurrent = _useCurrent2[1];

  var itemsPerPageLabel = useItemsPerPageLabel();
  var showingResultsLabel = useShowingResultsLabel();
  return {
    itemsPerPage: itemsPerPage,
    setItemsPerPage: setItemsPerPage,
    current: current,
    setCurrent: setCurrent,
    itemsPerPageLabel: itemsPerPageLabel,
    showingResultsLabel: showingResultsLabel
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/b559097a6d59463aa90b42d53a6aaab706666c6d.map

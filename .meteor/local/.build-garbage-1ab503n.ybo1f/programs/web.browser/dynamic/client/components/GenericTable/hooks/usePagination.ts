function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/usePagination.ts                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePagination: () => usePagination
});
let useCurrent;
module.link("./useCurrent", {
  useCurrent(v) {
    useCurrent = v;
  }

}, 0);
let useItemsPerPage;
module.link("./useItemsPerPage", {
  useItemsPerPage(v) {
    useItemsPerPage = v;
  }

}, 1);
let useItemsPerPageLabel;
module.link("./useItemsPerPageLabel", {
  useItemsPerPageLabel(v) {
    useItemsPerPageLabel = v;
  }

}, 2);
let useShowingResultsLabel;
module.link("./useShowingResultsLabel", {
  useShowingResultsLabel(v) {
    useShowingResultsLabel = v;
  }

}, 3);

const usePagination = () => {
  const [itemsPerPage, setItemsPerPage] = useItemsPerPage();
  const [current, setCurrent] = useCurrent();
  const itemsPerPageLabel = useItemsPerPageLabel();
  const showingResultsLabel = useShowingResultsLabel();
  return {
    itemsPerPage,
    setItemsPerPage,
    current,
    setCurrent,
    itemsPerPageLabel,
    showingResultsLabel
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/2afb0a7c42802b4114df90cc928ab9b84e362f7f.map

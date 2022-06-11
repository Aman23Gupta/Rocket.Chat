function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/index.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createFilterFromQuery: () => createFilterFromQuery,
  createComparatorFromSort: () => createComparatorFromSort
});
let compileDocumentSelector;
module.link("./query", {
  compileDocumentSelector(v) {
    compileDocumentSelector = v;
  }

}, 0);
let compileSort;
module.link("./sort", {
  compileSort(v) {
    compileSort = v;
  }

}, 1);
module.link("./types", {
  FieldExpression: "FieldExpression",
  Query: "Query",
  Sort: "Sort"
}, 2);
const createFilterFromQuery = compileDocumentSelector;
const createComparatorFromSort = compileSort;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/7fbbf5b361c5e4fe2a43ff5329bcb6a8e6f1b4f1.map

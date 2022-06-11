function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/index.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createFilterFromQuery: function () {
    return createFilterFromQuery;
  },
  createComparatorFromSort: function () {
    return createComparatorFromSort;
  }
});
var compileDocumentSelector;
module.link("./query", {
  compileDocumentSelector: function (v) {
    compileDocumentSelector = v;
  }
}, 0);
var compileSort;
module.link("./sort", {
  compileSort: function (v) {
    compileSort = v;
  }
}, 1);
module.link("./types", {
  FieldExpression: "FieldExpression",
  Query: "Query",
  Sort: "Sort"
}, 2);
var createFilterFromQuery = compileDocumentSelector;
var createComparatorFromSort = compileSort;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/2354606301115af1bef77f51f1227532156786fa.map

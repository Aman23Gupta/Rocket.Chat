function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/index.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let GenericTable;
module.link("./GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 0);
let HeaderCell;
module.link("./HeaderCell", {
  default(v) {
    HeaderCell = v;
  }

}, 1);
module.link("./V2/GenericTable", {
  "*": "*"
}, 2);
module.link("./V2/GenericTableBody", {
  "*": "*"
}, 3);
module.link("./V2/GenericTableCell", {
  "*": "*"
}, 4);
module.link("./V2/GenericTableHeader", {
  "*": "*"
}, 5);
module.link("./V2/GenericTableHeaderCell", {
  "*": "*"
}, 6);
module.link("./V2/GenericTableLoadingRow", {
  "*": "*"
}, 7);
module.link("./V2/GenericTableLoadingTable", {
  "*": "*"
}, 8);
module.link("./V2/GenericTableRow", {
  "*": "*"
}, 9);
module.exportDefault(Object.assign(GenericTable, {
  HeaderCell
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/1677eeb80bc7cdf4e400e70bfa14f1bbde363e5b.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/index.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var GenericTable;
module.link("./GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 0);
var HeaderCell;
module.link("./HeaderCell", {
  "default": function (v) {
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
  HeaderCell: HeaderCell
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/ac50c6a4e2cb2250933456a11995032185e600bf.map

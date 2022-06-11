function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableLoadingTable.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTableLoadingTable: () => GenericTableLoadingTable
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericTableLoadingRow;
module.link("./GenericTableLoadingRow", {
  GenericTableLoadingRow(v) {
    GenericTableLoadingRow = v;
  }

}, 1);

const GenericTableLoadingTable = _ref => {
  let {
    headerCells
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.from({
    length: 10
  }, (_, i) => /*#__PURE__*/React.createElement(GenericTableLoadingRow, {
    key: i,
    cols: headerCells
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/e4e5bb64a7758eb52434825e6ce3d7b3b5f9d2d6.map

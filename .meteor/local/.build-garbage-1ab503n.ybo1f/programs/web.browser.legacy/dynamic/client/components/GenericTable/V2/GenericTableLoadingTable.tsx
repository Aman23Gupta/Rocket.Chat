function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableLoadingTable.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTableLoadingTable: function () {
    return GenericTableLoadingTable;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var GenericTableLoadingRow;
module.link("./GenericTableLoadingRow", {
  GenericTableLoadingRow: function (v) {
    GenericTableLoadingRow = v;
  }
}, 1);

var GenericTableLoadingTable = function (_ref) {
  var headerCells = _ref.headerCells;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.from({
    length: 10
  }, function (_, i) {
    return /*#__PURE__*/React.createElement(GenericTableLoadingRow, {
      key: i,
      cols: headerCells
    });
  }));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/b8e52b4d1760e501bb889b0fbe28a44e843f0d73.map

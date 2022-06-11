function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportOperationSummarySkeleton.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Skeleton, Table;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

function ImportOperationSummarySkeleton(_ref) {
  var small = _ref.small;
  return /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), !small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null))));
}

module.exportDefault(ImportOperationSummarySkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/f8e88a02618621895f086b899f6bce0b056b3420.map

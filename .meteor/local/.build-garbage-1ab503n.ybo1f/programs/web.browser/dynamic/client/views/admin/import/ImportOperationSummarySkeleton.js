function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportOperationSummarySkeleton.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Skeleton, Table;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

function ImportOperationSummarySkeleton(_ref) {
  let {
    small
  } = _ref;
  return /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), !small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null)), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null))));
}

module.exportDefault(ImportOperationSummarySkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/ffd20bcb9db7699df20cb6693c284329eacea8cb.map

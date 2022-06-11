function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableLoadingRow.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTableLoadingRow: () => GenericTableLoadingRow
});
let Box, Skeleton, Table;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

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

const GenericTableLoadingRow = _ref => {
  let {
    cols
  } = _ref;
  return /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 40,
    width: 40
  }), /*#__PURE__*/React.createElement(Box, {
    mi: "x8",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })))), Array.from({
    length: cols - 1
  }, (_, i) => /*#__PURE__*/React.createElement(Table.Cell, {
    key: i
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/f546c48e9ca15ba9e40891538c62101f9794f094.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableLoadingRow.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTableLoadingRow: function () {
    return GenericTableLoadingRow;
  }
});
var Box, Skeleton, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
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

var GenericTableLoadingRow = function (_ref) {
  var cols = _ref.cols;
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
  }, function (_, i) {
    return /*#__PURE__*/React.createElement(Table.Cell, {
      key: i
    }, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }));
  }));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/86b073aeb0e5b3d872d8918db6ba74cecb19e9f2.map

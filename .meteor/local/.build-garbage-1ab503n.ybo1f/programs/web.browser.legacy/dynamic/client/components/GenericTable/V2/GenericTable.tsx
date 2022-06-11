function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTable.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTable: function () {
    return GenericTable;
  }
});
var Box, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var ScrollableContentWrapper;
module.link("../../ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 2);
var GenericTable = /*#__PURE__*/forwardRef(function () {
  function GenericTable(_ref, ref) {
    var _ref$fixed = _ref.fixed,
        fixed = _ref$fixed === void 0 ? true : _ref$fixed,
        children = _ref.children;
    return /*#__PURE__*/React.createElement(Box, {
      mi: "neg-x24",
      pi: "x24",
      flexShrink: 1,
      flexGrow: 1,
      ref: ref,
      overflow: "hidden"
    }, /*#__PURE__*/React.createElement(ScrollableContentWrapper, {
      overflowX: true
    }, /*#__PURE__*/React.createElement(Table, {
      fixed: fixed,
      sticky: true
    }, children)));
  }

  return GenericTable;
}());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/76b1656807189587ad7fc48d2fd56a1408350dfd.map

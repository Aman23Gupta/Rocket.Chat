function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTable.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTable: () => GenericTable
});
let Box, Table;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
let ScrollableContentWrapper;
module.link("../../ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 2);
const GenericTable = /*#__PURE__*/forwardRef(function GenericTable(_ref, ref) {
  let {
    fixed = true,
    children
  } = _ref;
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
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/4328fb132da4196ff11a64a8edb355cc81e5f494.map

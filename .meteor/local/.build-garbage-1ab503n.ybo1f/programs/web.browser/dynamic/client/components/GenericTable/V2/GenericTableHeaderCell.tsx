function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableHeaderCell.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children", "active", "direction", "sort", "onClick"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  GenericTableHeaderCell: () => GenericTableHeaderCell
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
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let SortIcon;
module.link("../SortIcon", {
  default(v) {
    SortIcon = v;
  }

}, 2);

const GenericTableHeaderCell = _ref => {
  let {
    children,
    active,
    direction,
    sort,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const fn = useCallback(() => onClick && sort && onClick(sort), [sort, onClick]);
  return /*#__PURE__*/React.createElement(Table.Cell, _extends({
    clickable: !!sort,
    onClick: fn
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    wrap: "no-wrap"
  }, children, sort && /*#__PURE__*/React.createElement(SortIcon, {
    direction: active ? direction : undefined
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/16502602b3b648fd976819abe9da8dac58661f57.map

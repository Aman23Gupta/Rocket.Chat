function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/HeaderCell.tsx                                                                       //
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
module.link("./SortIcon", {
  default(v) {
    SortIcon = v;
  }

}, 2);

const HeaderCell = _ref => {
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

module.exportDefault(HeaderCell);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/504485dbd57d09c4dc21062cdb66a705de47ba79.map

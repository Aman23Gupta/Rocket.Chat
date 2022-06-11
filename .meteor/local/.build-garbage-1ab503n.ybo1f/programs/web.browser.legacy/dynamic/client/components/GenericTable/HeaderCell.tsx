function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/HeaderCell.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children", "active", "direction", "sort", "onClick"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var SortIcon;
module.link("./SortIcon", {
  "default": function (v) {
    SortIcon = v;
  }
}, 2);

var HeaderCell = function (_ref) {
  var children = _ref.children,
      active = _ref.active,
      direction = _ref.direction,
      sort = _ref.sort,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var fn = useCallback(function () {
    return onClick && sort && onClick(sort);
  }, [sort, onClick]);
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
//# sourceMappingURL=/dynamic/client/components/GenericTable/369508a1be0c96e2e510feec6ba04a1074ed1dc1.map

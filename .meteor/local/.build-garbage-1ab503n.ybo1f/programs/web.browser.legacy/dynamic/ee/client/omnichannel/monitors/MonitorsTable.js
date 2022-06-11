function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsTable.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var FilterByText;
module.link("../../../../client/components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 1);
var GenericTable;
module.link("../../../../client/components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useResizeInlineBreakpoint;
module.link("../../../../client/hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint: function (v) {
    useResizeInlineBreakpoint = v;
  }
}, 4);
var MonitorsRow;
module.link("./MonitorsRow", {
  "default": function (v) {
    MonitorsRow = v;
  }
}, 5);

function MonitorsTable(_ref) {
  var monitors = _ref.monitors,
      totalMonitors = _ref.totalMonitors,
      params = _ref.params,
      sort = _ref.sort,
      onHeaderClick = _ref.onHeaderClick,
      onChangeParams = _ref.onChangeParams,
      onDelete = _ref.onDelete;
  var t = useTranslation();

  var _useResizeInlineBreak = useResizeInlineBreakpoint([600], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 2),
      ref = _useResizeInlineBreak2[0],
      onMediumBreakpoint = _useResizeInlineBreak2[1];

  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      sort: "name",
      active: sort[0] === 'name',
      direction: sort[1],
      onClick: onHeaderClick
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x60"
    }, t('Remove'))),
    results: monitors,
    total: totalMonitors,
    params: params,
    setParams: onChangeParams,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  }, function (props) {
    return /*#__PURE__*/React.createElement(MonitorsRow, _extends({
      key: props._id,
      medium: onMediumBreakpoint,
      onDelete: onDelete
    }, props));
  });
}

module.exportDefault(MonitorsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/a5a74fc9729b9d1a8ea651c7acc9e3dce022cd45.map

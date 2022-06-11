function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursTable.js                                                                         //
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
module.link("../../../client/components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 1);
var GenericTable;
module.link("../../../client/components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useResizeInlineBreakpoint;
module.link("../../../client/hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint: function (v) {
    useResizeInlineBreakpoint = v;
  }
}, 4);
var BusinessHoursRow;
module.link("./BusinessHoursRow", {
  "default": function (v) {
    BusinessHoursRow = v;
  }
}, 5);

function BusinessHoursTable(_ref) {
  var businessHours = _ref.businessHours,
      totalbusinessHours = _ref.totalbusinessHours,
      params = _ref.params,
      onChangeParams = _ref.onChangeParams,
      reload = _ref.reload;
  var t = useTranslation();

  var _useResizeInlineBreak = useResizeInlineBreakpoint([600], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 2),
      ref = _useResizeInlineBreak2[0],
      onMediumBreakpoint = _useResizeInlineBreak2[1];

  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Timezone')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Open_Days')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x100"
    }, t('Enabled')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x100"
    }, t('Remove'))),
    results: businessHours,
    total: totalbusinessHours,
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
    return /*#__PURE__*/React.createElement(BusinessHoursRow, _extends({
      key: props._id,
      medium: onMediumBreakpoint,
      reload: reload
    }, props));
  });
}

module.exportDefault(BusinessHoursTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/6e2337282887456aeb3a4a09231b41ba30bba912.map

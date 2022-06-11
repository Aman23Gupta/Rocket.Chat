function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint: function (v) {
    useResizeInlineBreakpoint = v;
  }
}, 3);
var TriggersRow;
module.link("./TriggersRow", {
  "default": function (v) {
    TriggersRow = v;
  }
}, 4);

function TriggersTable(_ref) {
  var triggers = _ref.triggers,
      totalTriggers = _ref.totalTriggers,
      params = _ref.params,
      onChangeParams = _ref.onChangeParams,
      onDelete = _ref.onDelete;
  var t = useTranslation();

  var _useResizeInlineBreak = useResizeInlineBreakpoint([600], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 2),
      ref = _useResizeInlineBreak2[0],
      onMediumBreakpoint = _useResizeInlineBreak2[1];

  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Description')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Enabled')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x60"
    }, t('Remove'))),
    results: triggers,
    total: totalTriggers,
    params: params,
    setParams: onChangeParams
  }, function (props) {
    return /*#__PURE__*/React.createElement(TriggersRow, _extends({
      key: props._id,
      onDelete: onDelete,
      medium: onMediumBreakpoint
    }, props));
  });
}

module.exportDefault(TriggersTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/025f429130e1e1a9b54a8c8d30b770b6a97d5f7c.map

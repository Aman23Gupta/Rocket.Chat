function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useResizeInlineBreakpoint;
module.link("../../../hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint(v) {
    useResizeInlineBreakpoint = v;
  }

}, 3);
let TriggersRow;
module.link("./TriggersRow", {
  default(v) {
    TriggersRow = v;
  }

}, 4);

function TriggersTable(_ref) {
  let {
    triggers,
    totalTriggers,
    params,
    onChangeParams,
    onDelete
  } = _ref;
  const t = useTranslation();
  const [ref, onMediumBreakpoint] = useResizeInlineBreakpoint([600], 200);
  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Description')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Enabled')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      width: "x60"
    }, t('Remove'))),
    results: triggers,
    total: totalTriggers,
    params: params,
    setParams: onChangeParams
  }, props => /*#__PURE__*/React.createElement(TriggersRow, _extends({
    key: props._id,
    onDelete: onDelete,
    medium: onMediumBreakpoint
  }, props)));
}

module.exportDefault(TriggersTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/35ab6ff839bbee304737d21799ee627c27e59a85.map

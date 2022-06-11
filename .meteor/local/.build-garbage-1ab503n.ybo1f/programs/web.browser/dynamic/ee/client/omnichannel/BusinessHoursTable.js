function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/BusinessHoursTable.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let FilterByText;
module.link("../../../client/components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 1);
let GenericTable;
module.link("../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useResizeInlineBreakpoint;
module.link("../../../client/hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint(v) {
    useResizeInlineBreakpoint = v;
  }

}, 4);
let BusinessHoursRow;
module.link("./BusinessHoursRow", {
  default(v) {
    BusinessHoursRow = v;
  }

}, 5);

function BusinessHoursTable(_ref) {
  let {
    businessHours,
    totalbusinessHours,
    params,
    onChangeParams,
    reload
  } = _ref;
  const t = useTranslation();
  const [ref, onMediumBreakpoint] = useResizeInlineBreakpoint([600], 200);
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  }, props => /*#__PURE__*/React.createElement(BusinessHoursRow, _extends({
    key: props._id,
    medium: onMediumBreakpoint,
    reload: reload
  }, props)));
}

module.exportDefault(BusinessHoursTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/3046e56e8fdbe3315299002f2cc7ce543301ac3e.map

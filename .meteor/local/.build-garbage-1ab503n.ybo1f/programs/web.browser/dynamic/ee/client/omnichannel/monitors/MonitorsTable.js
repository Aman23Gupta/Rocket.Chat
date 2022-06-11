function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsTable.js                                                                     //
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
module.link("../../../../client/components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 1);
let GenericTable;
module.link("../../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useResizeInlineBreakpoint;
module.link("../../../../client/hooks/useResizeInlineBreakpoint", {
  useResizeInlineBreakpoint(v) {
    useResizeInlineBreakpoint = v;
  }

}, 4);
let MonitorsRow;
module.link("./MonitorsRow", {
  default(v) {
    MonitorsRow = v;
  }

}, 5);

function MonitorsTable(_ref) {
  let {
    monitors,
    totalMonitors,
    params,
    sort,
    onHeaderClick,
    onChangeParams,
    onDelete
  } = _ref;
  const t = useTranslation();
  const [ref, onMediumBreakpoint] = useResizeInlineBreakpoint([600], 200);
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  }, props => /*#__PURE__*/React.createElement(MonitorsRow, _extends({
    key: props._id,
    medium: onMediumBreakpoint,
    onDelete: onDelete
  }, props)));
}

module.exportDefault(MonitorsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/5ebaccef4f356e69732b2dae2b2a32f19cec5539.map

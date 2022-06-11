function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/GenericTable.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children", "fixed", "header", "params", "setParams", "renderFilter", "renderRow", "results", "total", "pagination"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Pagination, Tile;
module.link("@rocket.chat/fuselage", {
  Pagination(v) {
    Pagination = v;
  },

  Tile(v) {
    Tile = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useState, useEffect, forwardRef, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let flattenChildren;
module.link("react-keyed-flatten-children", {
  default(v) {
    flattenChildren = v;
  }

}, 3);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let GenericTableV2;
module.link("./V2/GenericTable", {
  GenericTable(v) {
    GenericTableV2 = v;
  }

}, 5);
let GenericTableBody;
module.link("./V2/GenericTableBody", {
  GenericTableBody(v) {
    GenericTableBody = v;
  }

}, 6);
let GenericTableHeader;
module.link("./V2/GenericTableHeader", {
  GenericTableHeader(v) {
    GenericTableHeader = v;
  }

}, 7);
let GenericTableLoadingTable;
module.link("./V2/GenericTableLoadingTable", {
  GenericTableLoadingTable(v) {
    GenericTableLoadingTable = v;
  }

}, 8);
let usePagination;
module.link("./hooks/usePagination", {
  usePagination(v) {
    usePagination = v;
  }

}, 9);
const defaultParamsValue = {
  text: '',
  current: 0,
  itemsPerPage: 25
};

const defaultSetParamsValue = () => undefined;

const GenericTable = /*#__PURE__*/forwardRef(function GenericTable(_ref, ref) {
  let {
    children,
    fixed = true,
    header,
    params: paramsDefault = defaultParamsValue,
    setParams = defaultSetParamsValue,
    renderFilter,
    renderRow: RenderRow,
    results,
    total,
    pagination = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [filter, setFilter] = useState(paramsDefault);
  const {
    itemsPerPage,
    setItemsPerPage,
    current,
    setCurrent,
    itemsPerPageLabel,
    showingResultsLabel
  } = usePagination();
  const params = useDebouncedValue(filter, 500);
  useEffect(() => {
    setParams(_objectSpread(_objectSpread({}, params), {}, {
      text: params.text || '',
      current,
      itemsPerPage
    }));
  }, [params, current, itemsPerPage, setParams]);
  const headerCells = useMemo(() => flattenChildren(header).length, [header]);
  const isLoading = !results;
  return /*#__PURE__*/React.createElement(React.Fragment, null, typeof renderFilter === 'function' ? renderFilter(_objectSpread(_objectSpread({}, props), {}, {
    onChange: setFilter
  })) // TODO: ugh
  : null, results && !results.length ? /*#__PURE__*/React.createElement(Tile, {
    fontScale: "p2",
    elevation: "0",
    color: "info",
    textAlign: "center"
  }, t('No_data_found')) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTableV2, {
    fixed: fixed,
    ref: ref
  }, header && /*#__PURE__*/React.createElement(GenericTableHeader, null, header), /*#__PURE__*/React.createElement(GenericTableBody, null, isLoading && /*#__PURE__*/React.createElement(GenericTableLoadingTable, {
    headerCells: headerCells
  }), !isLoading && (RenderRow && (results === null || results === void 0 ? void 0 : results.map((props, index) => /*#__PURE__*/React.createElement(RenderRow, _extends({
    key: props._id || index
  }, props)))) || children && (results === null || results === void 0 ? void 0 : results.map(children))))), pagination && /*#__PURE__*/React.createElement(Pagination, {
    divider: true,
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: itemsPerPageLabel,
    showingResultsLabel: showingResultsLabel,
    count: total || 0,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent
  })));
});
module.exportDefault(GenericTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/b37e19af303f7989d0a892d851c9e988fd35426d.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/GenericTable.tsx                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children", "fixed", "header", "params", "setParams", "renderFilter", "renderRow", "results", "total", "pagination"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Pagination, Tile;
module.link("@rocket.chat/fuselage", {
  Pagination: function (v) {
    Pagination = v;
  },
  Tile: function (v) {
    Tile = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useState, useEffect, forwardRef, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var flattenChildren;
module.link("react-keyed-flatten-children", {
  "default": function (v) {
    flattenChildren = v;
  }
}, 3);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var GenericTableV2;
module.link("./V2/GenericTable", {
  GenericTable: function (v) {
    GenericTableV2 = v;
  }
}, 5);
var GenericTableBody;
module.link("./V2/GenericTableBody", {
  GenericTableBody: function (v) {
    GenericTableBody = v;
  }
}, 6);
var GenericTableHeader;
module.link("./V2/GenericTableHeader", {
  GenericTableHeader: function (v) {
    GenericTableHeader = v;
  }
}, 7);
var GenericTableLoadingTable;
module.link("./V2/GenericTableLoadingTable", {
  GenericTableLoadingTable: function (v) {
    GenericTableLoadingTable = v;
  }
}, 8);
var usePagination;
module.link("./hooks/usePagination", {
  usePagination: function (v) {
    usePagination = v;
  }
}, 9);
var defaultParamsValue = {
  text: '',
  current: 0,
  itemsPerPage: 25
};

var defaultSetParamsValue = function () {
  return undefined;
};

var GenericTable = /*#__PURE__*/forwardRef(function () {
  function GenericTable(_ref, ref) {
    var children = _ref.children,
        _ref$fixed = _ref.fixed,
        fixed = _ref$fixed === void 0 ? true : _ref$fixed,
        header = _ref.header,
        _ref$params = _ref.params,
        paramsDefault = _ref$params === void 0 ? defaultParamsValue : _ref$params,
        _ref$setParams = _ref.setParams,
        setParams = _ref$setParams === void 0 ? defaultSetParamsValue : _ref$setParams,
        renderFilter = _ref.renderFilter,
        RenderRow = _ref.renderRow,
        results = _ref.results,
        total = _ref.total,
        _ref$pagination = _ref.pagination,
        pagination = _ref$pagination === void 0 ? true : _ref$pagination,
        props = _objectWithoutProperties(_ref, _excluded);

    var t = useTranslation();

    var _useState = useState(paramsDefault),
        _useState2 = _slicedToArray(_useState, 2),
        filter = _useState2[0],
        setFilter = _useState2[1];

    var _usePagination = usePagination(),
        itemsPerPage = _usePagination.itemsPerPage,
        setItemsPerPage = _usePagination.setItemsPerPage,
        current = _usePagination.current,
        setCurrent = _usePagination.setCurrent,
        itemsPerPageLabel = _usePagination.itemsPerPageLabel,
        showingResultsLabel = _usePagination.showingResultsLabel;

    var params = useDebouncedValue(filter, 500);
    useEffect(function () {
      setParams(_objectSpread(_objectSpread({}, params), {}, {
        text: params.text || '',
        current: current,
        itemsPerPage: itemsPerPage
      }));
    }, [params, current, itemsPerPage, setParams]);
    var headerCells = useMemo(function () {
      return flattenChildren(header).length;
    }, [header]);
    var isLoading = !results;
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
    }), !isLoading && (RenderRow && (results === null || results === void 0 ? void 0 : results.map(function (props, index) {
      return /*#__PURE__*/React.createElement(RenderRow, _extends({
        key: props._id || index
      }, props));
    })) || children && (results === null || results === void 0 ? void 0 : results.map(children))))), pagination && /*#__PURE__*/React.createElement(Pagination, {
      divider: true,
      current: current,
      itemsPerPage: itemsPerPage,
      itemsPerPageLabel: itemsPerPageLabel,
      showingResultsLabel: showingResultsLabel,
      count: total || 0,
      onSetItemsPerPage: setItemsPerPage,
      onSetCurrent: setCurrent
    })));
  }

  return GenericTable;
}());
module.exportDefault(GenericTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/9f68d31c141495badb6abca70cd3858cd4ce4432.map

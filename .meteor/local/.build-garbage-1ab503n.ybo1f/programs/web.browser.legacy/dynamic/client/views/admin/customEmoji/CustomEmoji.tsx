function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/CustomEmoji.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["current", "itemsPerPage", "setItemsPerPage", "setCurrent"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Box, Pagination;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Pagination: function (v) {
    Pagination = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);
var GenericTable, GenericTableBody, GenericTableCell, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable, GenericTableRow;
module.link("../../../components/GenericTable", {
  GenericTable: function (v) {
    GenericTable = v;
  },
  GenericTableBody: function (v) {
    GenericTableBody = v;
  },
  GenericTableCell: function (v) {
    GenericTableCell = v;
  },
  GenericTableHeader: function (v) {
    GenericTableHeader = v;
  },
  GenericTableHeaderCell: function (v) {
    GenericTableHeaderCell = v;
  },
  GenericTableLoadingTable: function (v) {
    GenericTableLoadingTable = v;
  },
  GenericTableRow: function (v) {
    GenericTableRow = v;
  }
}, 4);
var usePagination;
module.link("../../../components/GenericTable/hooks/usePagination", {
  usePagination: function (v) {
    usePagination = v;
  }
}, 5);
var useSort;
module.link("../../../components/GenericTable/hooks/useSort", {
  useSort: function (v) {
    useSort = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);

var CustomEmoji = function () {
  function CustomEmoji(_ref) {
    var onClick = _ref.onClick,
        reload = _ref.reload;
    var t = useTranslation();

    var _usePagination = usePagination(),
        current = _usePagination.current,
        itemsPerPage = _usePagination.itemsPerPage,
        onSetItemsPerPage = _usePagination.setItemsPerPage,
        onSetCurrent = _usePagination.setCurrent,
        paginationProps = _objectWithoutProperties(_usePagination, _excluded);

    var _useState = useState(''),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    var _useSort = useSort('name'),
        sortBy = _useSort.sortBy,
        sortDirection = _useSort.sortDirection,
        setSort = _useSort.setSort;

    var query = useDebouncedValue(useMemo(function () {
      return {
        query: JSON.stringify({
          name: {
            $regex: text || '',
            $options: 'i'
          }
        }),
        sort: "{ \"" + sortBy + "\": " + (sortDirection === 'asc' ? 1 : -1) + " }",
        count: itemsPerPage,
        offset: current
      };
    }, [text, itemsPerPage, current, sortBy, sortDirection]), 500);

    var _useEndpointData = useEndpointData('emoji-custom.all', query),
        data = _useEndpointData.value,
        phase = _useEndpointData.phase,
        reloadEndPoint = _useEndpointData.reload;

    useEffect(function () {
      reload.current = reloadEndPoint;
    }, [reload, reloadEndPoint]);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterByText, {
      onChange: function (_ref2) {
        var text = _ref2.text;
        return setText(text);
      }
    }), /*#__PURE__*/React.createElement(GenericTable, null, /*#__PURE__*/React.createElement(GenericTableHeader, null, /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
      key: "name",
      direction: sortDirection,
      active: sortBy === 'name',
      onClick: setSort,
      sort: "name",
      w: "x200"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTableHeaderCell, {
      key: "aliases",
      w: "x200"
    }, t('Aliases'))), /*#__PURE__*/React.createElement(GenericTableBody, null, phase === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(GenericTableLoadingTable, {
      headerCells: 2
    }), phase === AsyncStatePhase.RESOLVED && data && data.emojis && data.emojis.length > 0 && (data === null || data === void 0 ? void 0 : data.emojis.map(function (emojis) {
      return /*#__PURE__*/React.createElement(GenericTableRow, {
        key: emojis._id,
        onKeyDown: onClick(emojis._id),
        onClick: onClick(emojis._id),
        tabIndex: 0,
        role: "link",
        action: true,
        "qa-emoji-id": emojis._id
      }, /*#__PURE__*/React.createElement(GenericTableCell, {
        fontScale: "p1",
        color: "default"
      }, /*#__PURE__*/React.createElement(Box, {
        withTruncatedText: true
      }, emojis.name)), /*#__PURE__*/React.createElement(GenericTableCell, {
        fontScale: "p1",
        color: "default"
      }, /*#__PURE__*/React.createElement(Box, {
        withTruncatedText: true
      }, emojis.aliases)));
    })))), phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Pagination, _extends({
      current: current,
      itemsPerPage: itemsPerPage,
      count: (data === null || data === void 0 ? void 0 : data.total) || 0,
      onSetItemsPerPage: onSetItemsPerPage,
      onSetCurrent: onSetCurrent
    }, paginationProps)));
  }

  return CustomEmoji;
}();

module.exportDefault(CustomEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/a4d201b01f976a75340c8b39d5297160d1e9777e.map

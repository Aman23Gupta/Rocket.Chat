function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/CustomEmoji.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["current", "itemsPerPage", "setItemsPerPage", "setCurrent"];

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
let Box, Pagination;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Pagination(v) {
    Pagination = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable, GenericTableBody, GenericTableCell, GenericTableHeader, GenericTableHeaderCell, GenericTableLoadingTable, GenericTableRow;
module.link("../../../components/GenericTable", {
  GenericTable(v) {
    GenericTable = v;
  },

  GenericTableBody(v) {
    GenericTableBody = v;
  },

  GenericTableCell(v) {
    GenericTableCell = v;
  },

  GenericTableHeader(v) {
    GenericTableHeader = v;
  },

  GenericTableHeaderCell(v) {
    GenericTableHeaderCell = v;
  },

  GenericTableLoadingTable(v) {
    GenericTableLoadingTable = v;
  },

  GenericTableRow(v) {
    GenericTableRow = v;
  }

}, 4);
let usePagination;
module.link("../../../components/GenericTable/hooks/usePagination", {
  usePagination(v) {
    usePagination = v;
  }

}, 5);
let useSort;
module.link("../../../components/GenericTable/hooks/useSort", {
  useSort(v) {
    useSort = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);

const CustomEmoji = function CustomEmoji(_ref) {
  let {
    onClick,
    reload
  } = _ref;
  const t = useTranslation();

  const _usePagination = usePagination(),
        {
    current,
    itemsPerPage,
    setItemsPerPage: onSetItemsPerPage,
    setCurrent: onSetCurrent
  } = _usePagination,
        paginationProps = _objectWithoutProperties(_usePagination, _excluded);

  const [text, setText] = useState('');
  const {
    sortBy,
    sortDirection,
    setSort
  } = useSort('name');
  const query = useDebouncedValue(useMemo(() => ({
    query: JSON.stringify({
      name: {
        $regex: text || '',
        $options: 'i'
      }
    }),
    sort: "{ \"".concat(sortBy, "\": ").concat(sortDirection === 'asc' ? 1 : -1, " }"),
    count: itemsPerPage,
    offset: current
  }), [text, itemsPerPage, current, sortBy, sortDirection]), 500);
  const {
    value: data,
    phase,
    reload: reloadEndPoint
  } = useEndpointData('emoji-custom.all', query);
  useEffect(() => {
    reload.current = reloadEndPoint;
  }, [reload, reloadEndPoint]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FilterByText, {
    onChange: _ref2 => {
      let {
        text
      } = _ref2;
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
  }), phase === AsyncStatePhase.RESOLVED && data && data.emojis && data.emojis.length > 0 && (data === null || data === void 0 ? void 0 : data.emojis.map(emojis => /*#__PURE__*/React.createElement(GenericTableRow, {
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
  }, emojis.aliases))))))), phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Pagination, _extends({
    current: current,
    itemsPerPage: itemsPerPage,
    count: (data === null || data === void 0 ? void 0 : data.total) || 0,
    onSetItemsPerPage: onSetItemsPerPage,
    onSetCurrent: onSetCurrent
  }, paginationProps)));
};

module.exportDefault(CustomEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/d93477d425d7c26ddf4932b63389d3f5ac965732.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsTable.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 2);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 3);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 4);
var useDebouncedValue, useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useResizeObserver: function (v) {
    useResizeObserver = v;
  }
}, 0);
var React, useMemo, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var FilterByTypeAndText;
module.link("./FilterByTypeAndText", {
  "default": function (v) {
    FilterByTypeAndText = v;
  }
}, 6);
var IntegrationRow;
module.link("./IntegrationRow", {
  "default": function (v) {
    IntegrationRow = v;
  }
}, 7);

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      type = _ref.type,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      query: JSON.stringify({
        name: {
          $regex: text || '',
          $options: 'i'
        },
        type: type
      }),
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [column, current, direction, itemsPerPage, text, type]);
};

var useResizeInlineBreakpoint = function () {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var debounceDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _useResizeObserver = useResizeObserver({
    debounceDelay: debounceDelay
  }),
      ref = _useResizeObserver.ref,
      borderBoxSize = _useResizeObserver.borderBoxSize;

  var inlineSize = borderBoxSize ? borderBoxSize.inlineSize : 0;
  sizes = useMemo(function () {
    return sizes.map(function (current) {
      return inlineSize ? inlineSize > current : true;
    });
  }, [inlineSize, sizes]);
  return [ref].concat(_toConsumableArray(sizes));
};

function IntegrationsTable(_ref4) {
  var type = _ref4.type;
  var t = useTranslation();

  var _useResizeInlineBreak = useResizeInlineBreakpoint([700], 200),
      _useResizeInlineBreak2 = _slicedToArray(_useResizeInlineBreak, 2),
      ref = _useResizeInlineBreak2[0],
      isBig = _useResizeInlineBreak2[1];

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['name', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedText = useDebouncedValue(params.text, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(_objectSpread(_objectSpread({}, params), {}, {
    text: debouncedText,
    type: type
  }), debouncedSort);

  var _useEndpointData = useEndpointData('integrations.list', query),
      data = _useEndpointData.value;

  var router = useRoute('admin-integrations');
  var onClick = useCallback(function (_id, type) {
    return function () {
      return router.push({
        context: 'edit',
        type: type === 'webhook-incoming' ? 'incoming' : 'outgoing',
        id: _id
      });
    };
  }, [router]);
  var onHeaderClick = useCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  }, [sort]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name",
      w: isBig ? 'x280' : 'x240'
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'channel',
      direction: sort[1],
      active: sort[0] === 'channel',
      onClick: onHeaderClick,
      sort: "channel"
    }, t('Post_to')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: '_createdBy',
      direction: sort[1],
      active: sort[0] === '_createdBy',
      onClick: onHeaderClick,
      sort: "_createdBy"
    }, t('Created_by')), isBig && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: '_createdAt',
      direction: sort[1],
      active: sort[0] === '_createdAt',
      onClick: onHeaderClick,
      sort: "_createdAt"
    }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'username',
      direction: sort[1],
      active: sort[0] === 'username',
      onClick: onHeaderClick,
      sort: "username"
    }, t('Post_as'))].filter(Boolean);
  }, [sort, onHeaderClick, isBig, t]);
  var renderRow = useCallback(function (props) {
    return /*#__PURE__*/React.createElement(IntegrationRow, _extends({}, props, {
      isBig: isBig,
      onClick: onClick
    }));
  }, [isBig, onClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: header,
    renderRow: renderRow,
    results: data && data.integrations,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: function (_ref5) {
      var onChange = _ref5.onChange,
          props = _objectWithoutProperties(_ref5, _excluded);

      return /*#__PURE__*/React.createElement(FilterByTypeAndText, _extends({
        setFilter: onChange
      }, props));
    }
  });
}

module.exportDefault(IntegrationsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/d6971729018c5473a3a663f8708eaa709570927f.map

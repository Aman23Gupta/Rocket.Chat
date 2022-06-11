function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsTable.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let useDebouncedValue, useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useResizeObserver(v) {
    useResizeObserver = v;
  }

}, 0);
let React, useMemo, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let FilterByTypeAndText;
module.link("./FilterByTypeAndText", {
  default(v) {
    FilterByTypeAndText = v;
  }

}, 6);
let IntegrationRow;
module.link("./IntegrationRow", {
  default(v) {
    IntegrationRow = v;
  }

}, 7);

const useQuery = (_ref, _ref2) => {
  let {
    text,
    type,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    query: JSON.stringify({
      name: {
        $regex: text || '',
        $options: 'i'
      },
      type
    }),
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [column, current, direction, itemsPerPage, text, type]);
};

const useResizeInlineBreakpoint = function () {
  let sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let debounceDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const {
    ref,
    borderBoxSize
  } = useResizeObserver({
    debounceDelay
  });
  const inlineSize = borderBoxSize ? borderBoxSize.inlineSize : 0;
  sizes = useMemo(() => sizes.map(current => inlineSize ? inlineSize > current : true), [inlineSize, sizes]);
  return [ref, ...sizes];
};

function IntegrationsTable(_ref3) {
  let {
    type
  } = _ref3;
  const t = useTranslation();
  const [ref, isBig] = useResizeInlineBreakpoint([700], 200);
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const debouncedText = useDebouncedValue(params.text, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(_objectSpread(_objectSpread({}, params), {}, {
    text: debouncedText,
    type
  }), debouncedSort);
  const {
    value: data
  } = useEndpointData('integrations.list', query);
  const router = useRoute('admin-integrations');
  const onClick = useCallback((_id, type) => () => router.push({
    context: 'edit',
    type: type === 'webhook-incoming' ? 'incoming' : 'outgoing',
    id: _id
  }), [router]);
  const onHeaderClick = useCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  }, [sort]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
  }, t('Post_as'))].filter(Boolean), [sort, onHeaderClick, isBig, t]);
  const renderRow = useCallback(props => /*#__PURE__*/React.createElement(IntegrationRow, _extends({}, props, {
    isBig: isBig,
    onClick: onClick
  })), [isBig, onClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    ref: ref,
    header: header,
    renderRow: renderRow,
    results: data && data.integrations,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: _ref4 => {
      let {
        onChange
      } = _ref4,
          props = _objectWithoutProperties(_ref4, _excluded);

      return /*#__PURE__*/React.createElement(FilterByTypeAndText, _extends({
        setFilter: onChange
      }, props));
    }
  });
}

module.exportDefault(IntegrationsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/a7bbbbec40c081f4a1e932a14124b40172c5700a.map

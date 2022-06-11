function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/CustomFieldsRoute.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let useDebouncedValue, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
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

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 4);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
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
let CustomFieldsPage;
module.link("./CustomFieldsPage", {
  default(v) {
    CustomFieldsPage = v;
  }

}, 9);
let EditCustomFieldsPage;
module.link("./EditCustomFieldsPageContainer", {
  default(v) {
    EditCustomFieldsPage = v;
  }

}, 10);
let NewCustomFieldsPage;
module.link("./NewCustomFieldsPage", {
  default(v) {
    NewCustomFieldsPage = v;
  }

}, 11);
let RemoveCustomFieldButton;
module.link("./RemoveCustomFieldButton", {
  default(v) {
    RemoveCustomFieldButton = v;
  }

}, 12);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, _ref2) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    fields: JSON.stringify({
      label: 1
    }),
    text,
    sort: JSON.stringify({
      [column]: sortDir(direction)
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [text, itemsPerPage, current, column, direction]);
};

const CustomFieldsRoute = () => {
  const t = useTranslation();
  const canViewCustomFields = usePermission('view-livechat-customfields');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['field', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const departmentsRoute = useRoute('omnichannel-customfields');
  const context = useRouteParameter('context');
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const onRowClick = useMutableCallback(id => () => departmentsRoute.push({
    context: 'edit',
    id
  }));
  const {
    value: data,
    reload
  } = useEndpointData('livechat/custom-fields', query);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'field',
    direction: sort[1],
    active: sort[0] === '_id',
    onClick: onHeaderClick,
    sort: "_id"
  }, t('Field')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'label',
    direction: sort[1],
    active: sort[0] === 'label',
    onClick: onHeaderClick,
    sort: "label"
  }, t('Label')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'scope',
    direction: sort[1],
    active: sort[0] === 'scope',
    onClick: onHeaderClick,
    sort: "scope"
  }, t('Scope')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'visibility',
    direction: sort[1],
    active: sort[0] === 'visibility',
    onClick: onHeaderClick,
    sort: "visibility"
  }, t('Visibility')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref3 => {
    let {
      label,
      _id,
      scope,
      visibility
    } = _ref3;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, _id), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, label), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, scope === 'visitor' ? t('Visitor') : t('Room')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, visibility === 'visible' ? t('Visible') : t('Hidden')), /*#__PURE__*/React.createElement(RemoveCustomFieldButton, {
      _id: _id,
      reload: reload
    }));
  }, [onRowClick, reload, t]);

  if (!canViewCustomFields) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(NewCustomFieldsPage, {
      reload: reload
    });
  }

  if (context === 'edit') {
    return /*#__PURE__*/React.createElement(EditCustomFieldsPage, {
      reload: reload
    });
  }

  return /*#__PURE__*/React.createElement(CustomFieldsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Custom_Fields')
  });
};

module.exportDefault(CustomFieldsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/cda20dfe81518a91a66e663144a0422edbae9598.map

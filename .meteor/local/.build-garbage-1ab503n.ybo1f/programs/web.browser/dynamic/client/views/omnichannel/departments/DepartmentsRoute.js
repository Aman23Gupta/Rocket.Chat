function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/DepartmentsRoute.js                                                            //
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
let DepartmentsPage;
module.link("./DepartmentsPage", {
  default(v) {
    DepartmentsPage = v;
  }

}, 9);
let EditDepartmentWithData;
module.link("./EditDepartmentWithData", {
  default(v) {
    EditDepartmentWithData = v;
  }

}, 10);
let RemoveDepartmentButton;
module.link("./RemoveDepartmentButton", {
  default(v) {
    RemoveDepartmentButton = v;
  }

}, 11);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, _ref2, onlyMyDepartments) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread(_objectSpread({
    fields: JSON.stringify({
      name: 1,
      username: 1,
      emails: 1,
      avatarETag: 1
    }),
    text,
    sort: JSON.stringify({
      [column]: sortDir(direction),
      usernames: column === 'name' ? sortDir(direction) : undefined
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), {}, {
    onlyMyDepartments
  }), [text, itemsPerPage, current, column, direction, onlyMyDepartments]);
};

function DepartmentsRoute() {
  const t = useTranslation();
  const canViewDepartments = usePermission('manage-livechat-departments');
  const canRemoveDepartments = usePermission('remove-livechat-department');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const onlyMyDepartments = true;
  const query = useQuery(debouncedParams, debouncedSort, onlyMyDepartments);
  const departmentsRoute = useRoute('omnichannel-departments');
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
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
    value: data = {},
    reload
  } = useEndpointData('livechat/department', query);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'description',
    direction: sort[1],
    active: sort[0] === 'description',
    onClick: onHeaderClick,
    sort: "description"
  }, t('Description')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'numAgents',
    direction: sort[1],
    active: sort[0] === 'numAgents',
    onClick: onHeaderClick,
    sort: "numAgents"
  }, t('Num_Agents')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'enabled',
    direction: sort[1],
    active: sort[0] === 'enabled',
    onClick: onHeaderClick,
    sort: "enabled"
  }, t('Enabled')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'showOnRegistration',
    direction: sort[1],
    active: sort[0] === 'showOnRegistration',
    onClick: onHeaderClick,
    sort: "status"
  }, t('Show_on_registration_page')), canRemoveDepartments && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t, canRemoveDepartments]);
  const renderRow = useCallback(_ref3 => {
    let {
      name,
      _id,
      description,
      numAgents,
      enabled,
      showOnRegistration
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
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, description), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, numAgents || '0'), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, enabled ? t('Yes') : t('No')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, showOnRegistration ? t('Yes') : t('No')), canRemoveDepartments && /*#__PURE__*/React.createElement(RemoveDepartmentButton, {
      _id: _id,
      reload: reload
    }));
  }, [canRemoveDepartments, onRowClick, t, reload]);

  if (!canViewDepartments) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (context === 'edit' || context === 'new') {
    return /*#__PURE__*/React.createElement(EditDepartmentWithData, {
      reload: reload,
      id: id,
      title: context === 'edit' ? t('Edit_Department') : t('New_Department')
    });
  }

  return /*#__PURE__*/React.createElement(DepartmentsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Departments')
  });
}

module.exportDefault(DepartmentsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/f6465fc93ab35c83fa241e775895ac96556a77d9.map

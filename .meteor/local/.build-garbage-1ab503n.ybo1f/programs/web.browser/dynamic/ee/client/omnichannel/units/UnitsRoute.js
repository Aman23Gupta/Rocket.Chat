function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/UnitsRoute.js                                                                           //
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
module.link("../../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let NotAuthorizedPage;
module.link("../../../../client/components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 4);
let usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useRouteParameter, useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 8);
let RemoveUnitButton;
module.link("./RemoveUnitButton", {
  default(v) {
    RemoveUnitButton = v;
  }

}, 9);
let UnitEditWithData;
module.link("./UnitEditWithData", {
  default(v) {
    UnitEditWithData = v;
  }

}, 10);
let UnitsPage;
module.link("./UnitsPage", {
  default(v) {
    UnitsPage = v;
  }

}, 11);

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
      name: 1
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
  }), [text, itemsPerPage, current, column, direction]);
};

function UnitsRoute() {
  const t = useTranslation();
  const canViewUnits = usePermission('manage-livechat-units');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const unitsRoute = useRoute('omnichannel-units');
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
  const onRowClick = useMutableCallback(id => () => unitsRoute.push({
    context: 'edit',
    id
  }));
  const {
    value: data = {},
    reload
  } = useEndpointData('livechat/units.list', query);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
      _id,
      name,
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
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, visibility), /*#__PURE__*/React.createElement(RemoveUnitButton, {
      _id: _id,
      reload: reload
    }));
  }, [reload, onRowClick]);

  if (context === 'edit' || context === 'new') {
    return /*#__PURE__*/React.createElement(UnitEditWithData, {
      title: context === 'edit' ? t('Edit_Unit') : t('New_Unit'),
      unitId: id,
      reload: reload,
      allUnits: data
    });
  }

  if (!canViewUnits) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(UnitsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Units')
  });
}

module.exportDefault(UnitsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/25ac0f36aeb627fcfc02ba2762e36291702f07c4.map

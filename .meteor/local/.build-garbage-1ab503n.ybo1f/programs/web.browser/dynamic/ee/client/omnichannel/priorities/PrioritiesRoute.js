function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PrioritiesRoute.js                                                                 //
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
let VerticalBar;
module.link("../../../../client/components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 6);
let useRouteParameter, useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let PrioritiesPage;
module.link("./PrioritiesPage", {
  default(v) {
    PrioritiesPage = v;
  }

}, 10);
let PriorityEditWithData;
module.link("./PriorityEditWithData", {
  default(v) {
    PriorityEditWithData = v;
  }

}, 11);
let PriorityNew;
module.link("./PriorityNew", {
  default(v) {
    PriorityNew = v;
  }

}, 12);
let RemovePriorityButton;
module.link("./RemovePriorityButton", {
  default(v) {
    RemovePriorityButton = v;
  }

}, 13);

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

function PrioritiesRoute() {
  const t = useTranslation();
  const canViewPriorities = usePermission('manage-livechat-priorities');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const prioritiesRoute = useRoute('omnichannel-priorities');
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
  const onRowClick = useMutableCallback(id => () => prioritiesRoute.push({
    context: 'edit',
    id
  }));
  const {
    value: data = {},
    reload
  } = useEndpointData('livechat/priorities.list', query);
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
    key: 'dueTimeInMinutes',
    direction: sort[1],
    active: sort[0] === 'dueTimeInMinutes',
    onClick: onHeaderClick,
    sort: "dueTimeInMinutes"
  }, t('Estimated_due_time')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref3 => {
    let {
      _id,
      name,
      description,
      dueTimeInMinutes
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
    }, dueTimeInMinutes, " ", t('minutes')), /*#__PURE__*/React.createElement(RemovePriorityButton, {
      _id: _id,
      reload: reload
    }));
  }, [reload, onRowClick, t]);
  const EditPrioritiesTab = useCallback(() => {
    if (!context) {
      return '';
    }

    const handleVerticalBarCloseButtonClick = () => {
      prioritiesRoute.push({});
    };

    return /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'edit' && t('Edit_Priority'), context === 'new' && t('New_Priority'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
      onClick: handleVerticalBarCloseButtonClick
    })), context === 'edit' && /*#__PURE__*/React.createElement(PriorityEditWithData, {
      priorityId: id,
      reload: reload
    }), context === 'new' && /*#__PURE__*/React.createElement(PriorityNew, {
      reload: reload
    }));
  }, [t, context, id, prioritiesRoute, reload]);

  if (!canViewPriorities) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(PrioritiesPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Priorities')
  }, /*#__PURE__*/React.createElement(EditPrioritiesTab, null));
}

module.exportDefault(PrioritiesRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/247dc86f9ea4521fe3d20f6ebcc903f1a37e6d70.map

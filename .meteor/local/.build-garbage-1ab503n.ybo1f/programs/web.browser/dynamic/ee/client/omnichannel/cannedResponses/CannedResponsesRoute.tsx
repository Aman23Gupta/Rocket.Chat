function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponsesRoute.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Table, Box;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  },

  Box(v) {
    Box = v;
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
let PageSkeleton;
module.link("../../../../client/components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 5);
let UserAvatar;
module.link("../../../../client/components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 6);
let usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 7);
let useRouteParameter, useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 11);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 12);
let useFormatDateAndTime;
module.link("../../../../client/hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 13);
let AsyncStatePhase;
module.link("../../../../client/lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 14);
let CannedResponseEditWithData;
module.link("./CannedResponseEditWithData", {
  default(v) {
    CannedResponseEditWithData = v;
  }

}, 15);
let CannedResponseFilter;
module.link("./CannedResponseFilter", {
  default(v) {
    CannedResponseFilter = v;
  }

}, 16);
let CannedResponseNew;
module.link("./CannedResponseNew", {
  default(v) {
    CannedResponseNew = v;
  }

}, 17);
let CannedResponsesPage;
module.link("./CannedResponsesPage", {
  default(v) {
    CannedResponsesPage = v;
  }

}, 18);
let RemoveCannedResponseButton;
module.link("./RemoveCannedResponseButton", {
  default(v) {
    RemoveCannedResponseButton = v;
  }

}, 19);

const CannedResponsesRoute = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const canViewCannedResponses = usePermission('manage-livechat-canned-responses');
  const isMonitor = usePermission('save-department-canned-responses');
  const isManager = usePermission('save-all-canned-responses');
  const {
    values,
    handlers
  } = useForm({
    sharing: '',
    createdBy: '',
    tags: [],
    text: ''
  });
  const {
    sharing,
    createdBy,
    text
  } = values;
  const {
    handleSharing,
    handleCreatedBy,
    handleText
  } = handlers;
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['shortcut', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const debouncedText = useDebouncedValue(text, 500);
  const query = useMemo(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    text: debouncedText,
    sort: JSON.stringify({
      [debouncedSort[0]]: debouncedSort[1] === 'asc' ? 1 : -1
    })
  }, sharing && {
    scope: sharing
  }), createdBy && createdBy !== 'all' && {
    createdBy
  }), debouncedParams.itemsPerPage && {
    count: debouncedParams.itemsPerPage
  }), debouncedParams.current && {
    offset: debouncedParams.current
  }), [createdBy, debouncedParams, debouncedSort, debouncedText, sharing]);
  const cannedResponsesRoute = useRoute('omnichannel-canned-responses');
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
  const onRowClick = useMutableCallback((id, scope) => () => {
    if (scope === 'global' && isMonitor && !isManager) {
      dispatchToastMessage({
        type: 'error',
        message: t('Not_authorized')
      });
      return;
    }

    cannedResponsesRoute.push({
      context: 'edit',
      id
    });
  });
  const defaultOptions = useMemo(() => ({
    global: t('Public'),
    department: t('Department'),
    user: t('Private')
  }), [t]);
  const {
    value: data,
    reload
  } = useEndpointData('canned-responses', query);
  const {
    value: totalData,
    phase: totalDataPhase,
    reload: totalDataReload
  } = useEndpointData('canned-responses');
  const getTime = useFormatDateAndTime();
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'shortcut',
    direction: sort[1],
    active: sort[0] === 'shortcut',
    onClick: onHeaderClick,
    sort: "shortcut"
  }, t('Shortcut')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'sharing',
    direction: sort[1],
    active: sort[0] === 'sharing',
    onClick: onHeaderClick,
    sort: "sharing"
  }, t('Sharing')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdBy',
    direction: sort[1],
    active: sort[0] === 'createdBy',
    onClick: onHeaderClick,
    sort: "createdBy"
  }, t('Created_by')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdAt',
    direction: sort[1],
    active: sort[0] === 'createdAt',
    onClick: onHeaderClick,
    sort: "createdAt"
  }, t('Created_at')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'tags',
    direction: sort[1],
    active: sort[0] === 'tags',
    onClick: onHeaderClick,
    sort: "tags"
  }, t('Tags')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref => {
    let {
      _id,
      shortcut,
      scope,
      createdBy,
      _createdAt,
      tags = []
    } = _ref;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id, scope),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, shortcut), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, defaultOptions[scope]), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      size: "x24",
      username: createdBy.username
    }), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      withTruncatedText: true,
      mi: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "column",
      alignSelf: "center",
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      withTruncatedText: true,
      color: "default"
    }, createdBy.username))))), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, getTime(_createdAt)), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, tags.join(', ')), !(scope === 'global' && isMonitor && !isManager) && /*#__PURE__*/React.createElement(RemoveCannedResponseButton, {
      _id: _id,
      reload: reload,
      totalDataReload: totalDataReload
    }));
  }, [getTime, onRowClick, reload, totalDataReload, defaultOptions, isMonitor, isManager]);

  if (context === 'edit' && id) {
    return /*#__PURE__*/React.createElement(CannedResponseEditWithData, {
      reload: reload,
      totalDataReload: totalDataReload,
      cannedResponseId: id
    });
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(CannedResponseNew, {
      reload: reload,
      totalDataReload: totalDataReload
    });
  }

  if (!canViewCannedResponses) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (totalDataPhase === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  return /*#__PURE__*/React.createElement(CannedResponsesPage, {
    setParams: setParams,
    renderFilter: () => /*#__PURE__*/React.createElement(CannedResponseFilter, {
      sharingValue: sharing,
      createdByValue: createdBy,
      shortcutValue: text,
      setSharing: handleSharing,
      setCreatedBy: handleCreatedBy,
      setShortcut: handleText
    }),
    params: params,
    data: data,
    header: header,
    renderRow: renderRow,
    title: t('Canned_Responses'),
    totalCannedResponses: (totalData === null || totalData === void 0 ? void 0 : totalData.total) || 0
  });
};

module.exportDefault(CannedResponsesRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/c2e4590a0a9d54c772c5fc3c7bbab9c73eec70e2.map

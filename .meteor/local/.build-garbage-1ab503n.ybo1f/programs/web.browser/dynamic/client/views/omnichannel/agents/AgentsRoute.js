function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentsRoute.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Table;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let useDebouncedValue, useMediaQuery, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useMediaQuery(v) {
    useMediaQuery = v;
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
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 6);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 7);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 10);
let AgentEditWithData;
module.link("./AgentEditWithData", {
  default(v) {
    AgentEditWithData = v;
  }

}, 11);
let AgentInfo;
module.link("./AgentInfo", {
  default(v) {
    AgentInfo = v;
  }

}, 12);
let AgentInfoActions;
module.link("./AgentInfoActions", {
  default(v) {
    AgentInfoActions = v;
  }

}, 13);
let AgentsPage;
module.link("./AgentsPage", {
  default(v) {
    AgentsPage = v;
  }

}, 14);
let RemoveAgentButton;
module.link("./RemoveAgentButton", {
  default(v) {
    RemoveAgentButton = v;
  }

}, 15);

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
  }), [text, itemsPerPage, current, column, direction]);
};

function AgentsRoute() {
  const t = useTranslation();
  const canViewAgents = usePermission('manage-livechat-agents');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const agentsRoute = useRoute('omnichannel-agents');
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
  const onRowClick = useMutableCallback(id => () => agentsRoute.push({
    context: 'info',
    id
  }));
  const {
    value: data,
    reload
  } = useEndpointData('livechat/users/agent', query);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'username',
    direction: sort[1],
    active: sort[0] === 'username',
    onClick: onHeaderClick,
    sort: "username"
  }, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'email',
    direction: sort[1],
    active: sort[0] === 'emails.address',
    onClick: onHeaderClick,
    sort: "emails.address"
  }, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'status',
    direction: sort[1],
    active: sort[0] === 'statusLivechat',
    onClick: onHeaderClick,
    sort: "statusLivechat"
  }, t('Livechat_status')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery]);
  const renderRow = useCallback(_ref3 => {
    let {
      emails,
      _id,
      username,
      name,
      avatarETag,
      statusLivechat
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
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      size: mediaQuery ? 'x28' : 'x40',
      title: username,
      username: username,
      etag: avatarETag
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
    }, name || username), !mediaQuery && name && /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2",
      color: "hint",
      withTruncatedText: true
    }, ' ', "@".concat(username), ' '))))), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      withTruncatedText: true,
      color: "hint"
    }, username), ' ', /*#__PURE__*/React.createElement(Box, {
      mi: "x4"
    })), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, emails && emails.length && emails[0].address), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, statusLivechat === 'available' ? t('Available') : t('Not_Available')), /*#__PURE__*/React.createElement(RemoveAgentButton, {
      _id: _id,
      reload: reload
    }));
  }, [mediaQuery, reload, onRowClick, t]);
  const EditAgentsTab = useCallback(() => {
    if (!context) {
      return '';
    }

    const handleVerticalBarCloseButtonClick = () => {
      agentsRoute.push({});
    };

    return /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'edit' && t('Edit_User'), context === 'info' && t('User_Info'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
      onClick: handleVerticalBarCloseButtonClick
    })), context === 'edit' && /*#__PURE__*/React.createElement(AgentEditWithData, {
      uid: id,
      reload: reload
    }), context === 'info' && /*#__PURE__*/React.createElement(AgentInfo, {
      uid: id
    }, /*#__PURE__*/React.createElement(AgentInfoActions, {
      id: id,
      reload: reload
    })));
  }, [t, context, id, agentsRoute, reload]);

  if (!canViewAgents) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(AgentsPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Agents')
  }, /*#__PURE__*/React.createElement(EditAgentsTab, null));
}

module.exportDefault(AgentsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/64a444cbc9c87e11cee15736bcfbb9ba10c52a02.map

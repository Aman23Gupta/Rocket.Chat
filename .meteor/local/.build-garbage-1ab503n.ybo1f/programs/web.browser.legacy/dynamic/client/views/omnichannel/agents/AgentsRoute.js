function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentsRoute.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var useDebouncedValue, useMediaQuery, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useMediaQuery: function (v) {
    useMediaQuery = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
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
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 6);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 7);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 10);
var AgentEditWithData;
module.link("./AgentEditWithData", {
  "default": function (v) {
    AgentEditWithData = v;
  }
}, 11);
var AgentInfo;
module.link("./AgentInfo", {
  "default": function (v) {
    AgentInfo = v;
  }
}, 12);
var AgentInfoActions;
module.link("./AgentInfoActions", {
  "default": function (v) {
    AgentInfoActions = v;
  }
}, 13);
var AgentsPage;
module.link("./AgentsPage", {
  "default": function (v) {
    AgentsPage = v;
  }
}, 14);
var RemoveAgentButton;
module.link("./RemoveAgentButton", {
  "default": function (v) {
    RemoveAgentButton = v;
  }
}, 15);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      fields: JSON.stringify({
        name: 1,
        username: 1,
        emails: 1,
        avatarETag: 1
      }),
      text: text,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify.usernames = column === 'name' ? sortDir(direction) : undefined, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, column, direction]);
};

function AgentsRoute() {
  var t = useTranslation();
  var canViewAgents = usePermission('manage-livechat-agents');

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

  var mediaQuery = useMediaQuery('(min-width: 1024px)');
  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var agentsRoute = useRoute('omnichannel-agents');
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var onHeaderClick = useMutableCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  var onRowClick = useMutableCallback(function (id) {
    return function () {
      return agentsRoute.push({
        context: 'info',
        id: id
      });
    };
  });

  var _useEndpointData = useEndpointData('livechat/users/agent', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
    }, t('Remove'))].filter(Boolean);
  }, [sort, onHeaderClick, t, mediaQuery]);
  var renderRow = useCallback(function (_ref4) {
    var emails = _ref4.emails,
        _id = _ref4._id,
        username = _ref4.username,
        name = _ref4.name,
        avatarETag = _ref4.avatarETag,
        statusLivechat = _ref4.statusLivechat;
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
    }, ' ', "@" + username, ' '))))), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
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
  var EditAgentsTab = useCallback(function () {
    if (!context) {
      return '';
    }

    var handleVerticalBarCloseButtonClick = function () {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/663ecf402b639a6bca38eed2e6b3d14e710697ae.map

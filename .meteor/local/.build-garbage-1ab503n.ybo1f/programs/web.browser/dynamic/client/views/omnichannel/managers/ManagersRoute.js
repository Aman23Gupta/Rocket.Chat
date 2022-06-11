function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/managers/ManagersRoute.js                                                                  //
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
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 5);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
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
let ManagersPage;
module.link("./ManagersPage", {
  default(v) {
    ManagersPage = v;
  }

}, 9);
let RemoveManagerButton;
module.link("./RemoveManagerButton", {
  default(v) {
    RemoveManagerButton = v;
  }

}, 10);

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

function ManagersRoute() {
  const t = useTranslation();
  const canViewManagers = usePermission('manage-livechat-managers');
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const {
    value: data = {},
    reload
  } = useEndpointData('livechat/users/manager', query);
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
    key: 'remove',
    w: "x60"
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery]);
  const renderRow = useCallback(_ref3 => {
    let {
      emails,
      _id,
      username,
      name,
      avatarETag
    } = _ref3;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
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
    }, emails && emails.length && emails[0].address), /*#__PURE__*/React.createElement(RemoveManagerButton, {
      _id: _id,
      reload: reload
    }));
  }, [mediaQuery, reload]);

  if (!canViewManagers) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(ManagersPage, {
    setParams: setParams,
    params: params,
    onHeaderClick: onHeaderClick,
    data: data,
    useQuery: useQuery,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Managers')
  });
}

module.exportDefault(ManagersRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/managers/0574b69441ec8be787e8ae6c9ec35a86be9c64a5.map

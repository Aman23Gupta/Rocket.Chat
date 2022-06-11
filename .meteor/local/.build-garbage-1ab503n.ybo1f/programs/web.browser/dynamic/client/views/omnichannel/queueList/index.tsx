function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/index.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let React, useCallback, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
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
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let QueueListPage;
module.link("./QueueListPage", {
  QueueListPage(v) {
    QueueListPage = v;
  }

}, 7);
let useQuery;
module.link("./hooks/useQuery", {
  useQuery(v) {
    useQuery = v;
  }

}, 8);

const QueueList = () => {
  const t = useTranslation();
  const [sort, setSort] = useState(['servedBy', 'desc']);
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
  const header = useMemo(() => [mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'servedBy',
    direction: sort[1],
    active: sort[0] === 'servedBy',
    onClick: onHeaderClick,
    sort: "servedBy"
  }, t('Served_By')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'department',
    direction: sort[1],
    active: sort[0] === 'departmend',
    onClick: onHeaderClick,
    sort: "department"
  }, t('Department')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'total',
    direction: sort[1],
    active: sort[0] === 'total',
    onClick: onHeaderClick,
    sort: "total"
  }, t('Total')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'status',
    direction: sort[1],
    active: sort[0] === 'status',
    onClick: onHeaderClick,
    sort: "status"
  }, t('Status'))].filter(Boolean), [mediaQuery, sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref => {
    let {
      user,
      department,
      chats
    } = _ref;

    const getStatusText = () => {
      if (user.status === 'online') {
        return t('Online');
      }

      return t('Offline');
    };

    return /*#__PURE__*/React.createElement(Table.Row, {
      key: user._id,
      tabIndex: 0
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center",
      mb: "5px"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      size: mediaQuery ? 'x28' : 'x40',
      username: user.username
    }), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      mi: "x8"
    }, user.username))), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, department ? department.name : ''), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, chats), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, getStatusText()));
  }, [mediaQuery, t]);
  const [params, setParams] = useState({
    servedBy: '',
    status: '',
    departmentId: '',
    itemsPerPage: 25,
    current: 0
  });
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const {
    value: data
  } = useEndpointData('livechat/queue', query);
  return /*#__PURE__*/React.createElement(QueueListPage, {
    title: t('Livechat_Queue'),
    header: header,
    data: data,
    renderRow: renderRow,
    params: params,
    setParams: setParams
  });
};

module.exportDefault(QueueList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/37e8b2f76da2691f30241364cee82afa683650aa.map

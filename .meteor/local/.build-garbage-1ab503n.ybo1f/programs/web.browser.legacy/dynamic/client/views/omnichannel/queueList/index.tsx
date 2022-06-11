function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/index.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
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
var React, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
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
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var QueueListPage;
module.link("./QueueListPage", {
  QueueListPage: function (v) {
    QueueListPage = v;
  }
}, 7);
var useQuery;
module.link("./hooks/useQuery", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 8);

var QueueList = function () {
  var t = useTranslation();

  var _useState = useState(['servedBy', 'desc']),
      _useState2 = _slicedToArray(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

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
  var mediaQuery = useMediaQuery('(min-width: 1024px)');
  var header = useMemo(function () {
    return [mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
    }, t('Status'))].filter(Boolean);
  }, [mediaQuery, sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref) {
    var user = _ref.user,
        department = _ref.department,
        chats = _ref.chats;

    var getStatusText = function () {
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

  var _useState3 = useState({
    servedBy: '',
    status: '',
    departmentId: '',
    itemsPerPage: 25,
    current: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      params = _useState4[0],
      setParams = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);

  var _useEndpointData = useEndpointData('livechat/queue', query),
      data = _useEndpointData.value;

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/8ca9b91cb1d307d73649ac766e2dc0f8183c3f7d.map

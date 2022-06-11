function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/CurrentChatsRoute.tsx                                                         //
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
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var useDebouncedValue, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 2);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 3);
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
}, 4);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 5);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 6);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);
var CurrentChatsPage;
module.link("./CurrentChatsPage", {
  "default": function (v) {
    CurrentChatsPage = v;
  }
}, 10);
var RemoveChatButton;
module.link("./RemoveChatButton", {
  "default": function (v) {
    RemoveChatButton = v;
  }
}, 11);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, _ref2) {
  var guest = _ref.guest,
      servedBy = _ref.servedBy,
      department = _ref.department,
      status = _ref.status,
      from = _ref.from,
      to = _ref.to,
      tags = _ref.tags,
      customFields = _ref.customFields,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    var query = _objectSpread(_objectSpread(_objectSpread({}, guest && {
      roomName: guest
    }), {}, {
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify.ts = column === 'ts' ? sortDir(direction) : undefined, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });

    if (from || to) {
      query.createdAt = JSON.stringify(_objectSpread(_objectSpread({}, from && {
        start: moment(new Date(from)).set({
          hour: 0,
          minutes: 0,
          seconds: 0
        }).format('YYYY-MM-DDTHH:mm:ss')
      }), to && {
        end: moment(new Date(to)).set({
          hour: 23,
          minutes: 59,
          seconds: 59
        }).format('YYYY-MM-DDTHH:mm:ss')
      }));
    }

    if (status !== 'all') {
      query.open = status === 'opened' || status === 'onhold';
      query.onhold = status === 'onhold';
    }

    if (servedBy && servedBy !== 'all') {
      query.agents = [servedBy];
    }

    if (department && department !== 'all') {
      query.departmentId = department;
    }

    if (tags && tags.length > 0) {
      query.tags = tags;
    }

    if (customFields && Object.keys(customFields).length > 0) {
      query.customFields = JSON.stringify(customFields);
    }

    return query;
  }, [guest, column, direction, itemsPerPage, current, from, to, status, servedBy, department, tags, customFields]);
};

var CurrentChatsRoute = function () {
  var t = useTranslation();
  var canViewCurrentChats = usePermission('view-livechat-current-chats');
  var canRemoveClosedChats = usePermission('remove-closed-livechat-room');

  var _useState = useState({
    guest: '',
    fname: '',
    servedBy: '',
    status: '',
    department: '',
    from: '',
    to: '',
    customFields: {},
    current: 0,
    itemsPerPage: 25,
    tags: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['ts', 'desc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
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
  var onRowClick = useMutableCallback(function (_id) {
    FlowRouter.go('live', {
      id: _id
    }); // routing this way causes a 404 that only goes away with a refresh, need to fix in review
    // livechatRoomRoute.push({ id: _id });
  });

  var _useEndpointData = useEndpointData('livechat/rooms', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'fname',
      direction: sort[1],
      active: sort[0] === 'fname',
      onClick: onHeaderClick,
      sort: "fname"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'departmentId',
      direction: sort[1],
      active: sort[0] === 'departmentId',
      onClick: onHeaderClick,
      sort: "departmentId"
    }, t('Department')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'servedBy',
      direction: sort[1],
      active: sort[0] === 'servedBy',
      onClick: onHeaderClick,
      sort: "servedBy"
    }, t('Served_By')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'ts',
      direction: sort[1],
      active: sort[0] === 'ts',
      onClick: onHeaderClick,
      sort: "ts"
    }, t('Started_At')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'lm',
      direction: sort[1],
      active: sort[0] === 'lm',
      onClick: onHeaderClick,
      sort: "lm"
    }, t('Last_Message')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'open',
      direction: sort[1],
      active: sort[0] === 'open',
      onClick: onHeaderClick,
      sort: "open",
      w: "x100"
    }, t('Status')), canRemoveClosedChats && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'remove',
      w: "x60"
    }, t('Remove'))].filter(Boolean);
  }, [sort, onHeaderClick, t, canRemoveClosedChats]);
  var renderRow = useCallback(function (_ref4) {
    var _id = _ref4._id,
        fname = _ref4.fname,
        servedBy = _ref4.servedBy,
        ts = _ref4.ts,
        lm = _ref4.lm,
        department = _ref4.department,
        open = _ref4.open,
        onHold = _ref4.onHold;

    var getStatusText = function (open, onHold) {
      if (!open) return t('Closed');
      return onHold ? t('On_Hold_Chats') : t('Open');
    };

    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: function () {
        return onRowClick(_id);
      },
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, fname), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, department ? department.name : ''), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, servedBy === null || servedBy === void 0 ? void 0 : servedBy.username), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, moment(ts).format('L LTS')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, moment(lm).format('L LTS')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, getStatusText(open, onHold)), canRemoveClosedChats && !open && /*#__PURE__*/React.createElement(RemoveChatButton, {
      _id: _id,
      reload: reload
    }));
  }, [onRowClick, reload, canRemoveClosedChats, t]);

  if (!canViewCurrentChats) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(CurrentChatsPage, {
    setParams: setParams,
    params: params,
    data: data,
    reload: reload,
    header: header,
    renderRow: renderRow,
    title: t('Current_Chats')
  });
};

module.exportDefault(CurrentChatsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/77edb5c4c9680d1ff031232ea2911f2a34a6a7f9.map

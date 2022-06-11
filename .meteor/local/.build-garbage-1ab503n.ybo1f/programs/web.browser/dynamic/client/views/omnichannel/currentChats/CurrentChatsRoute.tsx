function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/CurrentChatsRoute.tsx                                                         //
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
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 2);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 3);
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

}, 4);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 5);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 6);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let CurrentChatsPage;
module.link("./CurrentChatsPage", {
  default(v) {
    CurrentChatsPage = v;
  }

}, 10);
let RemoveChatButton;
module.link("./RemoveChatButton", {
  default(v) {
    RemoveChatButton = v;
  }

}, 11);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, _ref2) => {
  let {
    guest,
    servedBy,
    department,
    status,
    from,
    to,
    tags,
    customFields,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => {
    const query = _objectSpread(_objectSpread(_objectSpread({}, guest && {
      roomName: guest
    }), {}, {
      sort: JSON.stringify({
        [column]: sortDir(direction),
        ts: column === 'ts' ? sortDir(direction) : undefined
      })
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

const CurrentChatsRoute = () => {
  const t = useTranslation();
  const canViewCurrentChats = usePermission('view-livechat-current-chats');
  const canRemoveClosedChats = usePermission('remove-closed-livechat-room');
  const [params, setParams] = useState({
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
  });
  const [sort, setSort] = useState(['ts', 'desc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const onRowClick = useMutableCallback(_id => {
    FlowRouter.go('live', {
      id: _id
    }); // routing this way causes a 404 that only goes away with a refresh, need to fix in review
    // livechatRoomRoute.push({ id: _id });
  });
  const {
    value: data,
    reload
  } = useEndpointData('livechat/rooms', query);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
  }, t('Remove'))].filter(Boolean), [sort, onHeaderClick, t, canRemoveClosedChats]);
  const renderRow = useCallback(_ref3 => {
    let {
      _id,
      fname,
      servedBy,
      ts,
      lm,
      department,
      open,
      onHold
    } = _ref3;

    const getStatusText = (open, onHold) => {
      if (!open) return t('Closed');
      return onHold ? t('On_Hold_Chats') : t('Open');
    };

    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: () => onRowClick(_id),
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/6025866d86b1873f24d7450a2e7016448408bc8f.map

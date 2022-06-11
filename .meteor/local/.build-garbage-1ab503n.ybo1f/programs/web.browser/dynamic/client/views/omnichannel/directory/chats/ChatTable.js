function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/ChatTable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Table, Tag, Box;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  },

  Tag(v) {
    Tag = v;
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
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 3);
let React, useState, useMemo, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 4);
let FilterByText;
module.link("../../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 5);
let GenericTable;
module.link("../../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 6);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);

const useQuery = (_ref, _ref2, userIdLoggedIn) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    }),
    open: false,
    roomName: text,
    agents: [userIdLoggedIn]
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [column, current, direction, itemsPerPage, userIdLoggedIn, text]);
};

const ChatTable = _ref3 => {
  let {
    setChatReload
  } = _ref3;
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['closedAt', 'desc']);
  const t = useTranslation();
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const userIdLoggedIn = Meteor.userId();
  const query = useQuery(debouncedParams, debouncedSort, userIdLoggedIn);
  const directoryRoute = useRoute('omnichannel-directory');
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const onRowClick = useMutableCallback(id => directoryRoute.push({
    page: 'chats',
    bar: 'info',
    id
  }));
  const {
    value: data,
    reload
  } = useEndpointData('livechat/rooms', query);
  useEffect(() => {
    setChatReload(() => reload);
  }, [reload, setChatReload]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'fname',
    direction: sort[1],
    active: sort[0] === 'fname',
    onClick: onHeaderClick,
    sort: "fname",
    w: "x400"
  }, t('Contact_Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'department',
    direction: sort[1],
    active: sort[0] === 'department',
    onClick: onHeaderClick,
    sort: "department",
    w: "x200"
  }, t('Department')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'ts',
    direction: sort[1],
    active: sort[0] === 'ts',
    onClick: onHeaderClick,
    sort: "ts",
    w: "x200"
  }, t('Started_At')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'chatDuration',
    direction: sort[1],
    active: sort[0] === 'chatDuration',
    onClick: onHeaderClick,
    sort: "chatDuration",
    w: "x120"
  }, t('Chat_Duration')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'closedAt',
    direction: sort[1],
    active: sort[0] === 'closedAt',
    onClick: onHeaderClick,
    sort: "closedAt",
    w: "x200"
  }, t('Closed_At'))].filter(Boolean), [sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref4 => {
    let {
      _id,
      fname,
      ts,
      closedAt,
      department,
      tags
    } = _ref4;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: () => onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Box, {
      withTruncatedText: true
    }, fname), tags && /*#__PURE__*/React.createElement(Box, {
      color: "hint",
      display: "flex",
      "flex-direction": "row"
    }, tags.map(tag => /*#__PURE__*/React.createElement(Box, {
      style: {
        marginTop: 4,
        whiteSpace: 'nowrap',
        overflow: tag.length > 10 ? 'hidden' : 'visible',
        textOverflow: 'ellipsis'
      },
      key: tag,
      mie: "x4"
    }, /*#__PURE__*/React.createElement(Tag, {
      style: {
        display: 'inline'
      },
      disabled: true
    }, tag)))))), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, department ? department.name : ''), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, moment(ts).format('L LTS')), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, moment(closedAt).from(moment(ts), true)), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, moment(closedAt).format('L LTS')));
  }, [onRowClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.rooms,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: _ref5 => {
      let {
        onChange
      } = _ref5,
          props = _objectWithoutProperties(_ref5, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  });
};

module.exportDefault(ChatTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/06aa396f3af1c76b3b0363eecc23ba9bf94401a3.map

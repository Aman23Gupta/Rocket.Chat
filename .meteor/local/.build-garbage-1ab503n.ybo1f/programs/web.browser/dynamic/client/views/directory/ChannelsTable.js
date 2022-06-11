function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/ChannelsTable.js                                                                             //
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
let Box, Table, Avatar, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Avatar(v) {
    Avatar = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMediaQuery, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, useMemo, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let roomTypes;
module.link("../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 3);
let FilterByText;
module.link("../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 4);
let GenericTable;
module.link("../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 5);
let MarkdownText;
module.link("../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 6);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let useFormatDate;
module.link("../../hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 10);
let RoomTags;
module.link("./RoomTags", {
  default(v) {
    RoomTags = v;
  }

}, 11);
let useQuery;
module.link("./hooks", {
  useQuery(v) {
    useQuery = v;
  }

}, 12);
const style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function ChannelsTable() {
  const t = useTranslation();
  const refAutoFocus = useAutoFocus(true);
  const [sort, setSort] = useState(['name', 'asc']);
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const mediaQuery = useMediaQuery('(min-width: 768px)');
  const query = useQuery(params, sort, 'channels');
  const onHeaderClick = useCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  }, [sort]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'usersCount',
    direction: sort[1],
    active: sort[0] === 'usersCount',
    onClick: onHeaderClick,
    sort: "usersCount",
    style: {
      width: '100px'
    }
  }, t('Users')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdAt',
    direction: sort[1],
    active: sort[0] === 'createdAt',
    onClick: onHeaderClick,
    sort: "createdAt",
    style: {
      width: '150px'
    }
  }, t('Created_at')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'lastMessage',
    direction: sort[1],
    active: sort[0] === 'lastMessage',
    onClick: onHeaderClick,
    sort: "lastMessage",
    style: {
      width: '150px'
    }
  }, t('Last_Message')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'belongsTo',
    style: {
      width: '150px'
    }
  }, t('Belongs_To'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery]);
  const channelRoute = useRoute('channel');
  const groupsRoute = useRoute('group');
  const {
    value: data = {}
  } = useEndpointData('directory', query);
  const onClick = useMemo(() => (name, type) => e => {
    if (e.type === 'click' || e.key === 'Enter') {
      type === 'c' ? channelRoute.push({
        name
      }) : groupsRoute.push({
        name
      });
    }
  }, [channelRoute, groupsRoute]);
  const formatDate = useFormatDate();
  const renderRow = useCallback(room => {
    const {
      _id,
      ts,
      t,
      name,
      fname,
      usersCount,
      lastMessage,
      topic,
      belongsTo
    } = room;
    const avatarUrl = roomTypes.getConfig(t).getAvatarPath(room);
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      onKeyDown: onClick(name, t),
      onClick: onClick(name, t),
      tabIndex: 0,
      role: "link",
      action: true
    }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
      display: "flex"
    }, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 0
    }, /*#__PURE__*/React.createElement(Avatar, {
      size: "x40",
      title: fname || name,
      url: avatarUrl
    })), /*#__PURE__*/React.createElement(Box, {
      grow: 1,
      mi: "x8",
      style: style
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: roomTypes.getIcon(room),
      color: "hint"
    }), ' ', /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      mi: "x4"
    }, fname || name), /*#__PURE__*/React.createElement(RoomTags, {
      room: room,
      style: style
    })), topic && /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inlineWithoutBreaks",
      fontScale: "p2",
      color: "hint",
      style: style,
      content: topic
    })))), /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      style: style
    }, usersCount), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      style: style
    }, formatDate(ts)), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      style: style
    }, lastMessage && formatDate(lastMessage.ts)), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      style: style
    }, belongsTo));
  }, [formatDate, mediaQuery, onClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: _ref => {
      let {
        onChange
      } = _ref,
          props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        placeholder: t('Search_Channels'),
        inputRef: refAutoFocus,
        onChange: onChange
      }, props));
    },
    renderRow: renderRow,
    results: data.result,
    setParams: setParams,
    total: data.total
  });
}

module.exportDefault(ChannelsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/495903226501ef7e9e9b7435fcfe3fabf603f913.map

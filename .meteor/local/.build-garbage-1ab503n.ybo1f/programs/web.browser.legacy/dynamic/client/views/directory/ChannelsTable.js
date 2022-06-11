function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/ChannelsTable.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, Table, Avatar, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Avatar: function (v) {
    Avatar = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMediaQuery, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, useMemo, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var roomTypes;
module.link("../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 3);
var FilterByText;
module.link("../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 4);
var GenericTable;
module.link("../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 5);
var MarkdownText;
module.link("../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 6);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);
var useFormatDate;
module.link("../../hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 10);
var RoomTags;
module.link("./RoomTags", {
  "default": function (v) {
    RoomTags = v;
  }
}, 11);
var useQuery;
module.link("./hooks", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 12);
var style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function ChannelsTable() {
  var t = useTranslation();
  var refAutoFocus = useAutoFocus(true);

  var _useState = useState(['name', 'asc']),
      _useState2 = _slicedToArray(_useState, 2),
      sort = _useState2[0],
      setSort = _useState2[1];

  var _useState3 = useState({
    current: 0,
    itemsPerPage: 25
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      params = _useState4[0],
      setParams = _useState4[1];

  var mediaQuery = useMediaQuery('(min-width: 768px)');
  var query = useQuery(params, sort, 'channels');
  var onHeaderClick = useCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  }, [sort]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
    }, t('Belongs_To'))].filter(Boolean);
  }, [sort, onHeaderClick, t, mediaQuery]);
  var channelRoute = useRoute('channel');
  var groupsRoute = useRoute('group');

  var _useEndpointData = useEndpointData('directory', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {} : _useEndpointData$valu;

  var onClick = useMemo(function () {
    return function (name, type) {
      return function (e) {
        if (e.type === 'click' || e.key === 'Enter') {
          type === 'c' ? channelRoute.push({
            name: name
          }) : groupsRoute.push({
            name: name
          });
        }
      };
    };
  }, [channelRoute, groupsRoute]);
  var formatDate = useFormatDate();
  var renderRow = useCallback(function (room) {
    var _id = room._id,
        ts = room.ts,
        t = room.t,
        name = room.name,
        fname = room.fname,
        usersCount = room.usersCount,
        lastMessage = room.lastMessage,
        topic = room.topic,
        belongsTo = room.belongsTo;
    var avatarUrl = roomTypes.getConfig(t).getAvatarPath(room);
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
    renderFilter: function (_ref) {
      var onChange = _ref.onChange,
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
//# sourceMappingURL=/dynamic/client/views/directory/8274bac0f40e6bfc081e7474f56481609822f758.map

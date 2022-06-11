function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/RoomsTable.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "name", "t", "usersCount", "msgs", "default", "featured", "usernames"],
    _excluded2 = ["onChange"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
module.export({
  DEFAULT_TYPES: function () {
    return DEFAULT_TYPES;
  },
  roomTypeI18nMap: function () {
    return roomTypeI18nMap;
  }
});
var Box, Table, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMediaQuery, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
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
var roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 3);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 4);
var RoomAvatar;
module.link("../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var FilterByTypeAndText;
module.link("./FilterByTypeAndText", {
  "default": function (v) {
    FilterByTypeAndText = v;
  }
}, 10);
var style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};
var DEFAULT_TYPES = ['d', 'p', 'c', 'teams'];
var roomTypeI18nMap = {
  l: 'Omnichannel',
  c: 'Channel',
  d: 'Direct',
  p: 'Group',
  discussion: 'Discussion'
};

var getRoomType = function (room) {
  if (room.teamMain) {
    return room.t === 'c' ? 'Teams_Public_Team' : 'Teams_Private_Team';
  }

  return roomTypeI18nMap[room.t];
};

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      types = _ref.types,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      filter: text || '',
      types: types,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, types, itemsPerPage, current, column, direction]);
};

var getRoomDisplayName = function (room) {
  return room.t === 'd' ? room.usernames.join(' x ') : roomTypes.getRoomName(room.t, room);
};

var useDisplayData = function (asyncState, sort) {
  return useMemo(function () {
    var _asyncState$value = asyncState.value,
        value = _asyncState$value === void 0 ? {} : _asyncState$value,
        phase = asyncState.phase;

    if (phase === AsyncStatePhase.LOADING) {
      return null;
    }

    if (sort[0] === 'name' && value.rooms) {
      return value.rooms.sort(function (a, b) {
        var aName = getRoomDisplayName(a);
        var bName = getRoomDisplayName(b);

        if (aName === bName) {
          return 0;
        }

        var result = aName < bName ? -1 : 1;
        return sort[1] === 'asc' ? result : result * -1;
      });
    }

    return value.rooms;
  }, [asyncState, sort]);
};

function RoomsTable() {
  var t = useTranslation();
  var mediaQuery = useMediaQuery('(min-width: 1024px)');

  var _useState = useState({
    text: '',
    types: DEFAULT_TYPES,
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

  var routeName = 'admin-rooms';
  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var asyncState = useEndpointData('rooms.adminRooms', query);
  var _asyncState$value2 = asyncState.value,
      data = _asyncState$value2 === void 0 ? {} : _asyncState$value2;
  var router = useRoute(routeName);
  var onClick = useCallback(function (rid) {
    return function () {
      return router.push({
        context: 'edit',
        id: rid
      });
    };
  }, [router]);
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
  var displayData = useDisplayData(asyncState, sort);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name",
      w: "x200"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'type',
      direction: sort[1],
      active: sort[0] === 't',
      onClick: onHeaderClick,
      sort: "t",
      w: "x100"
    }, t('Type')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'users',
      direction: sort[1],
      active: sort[0] === 'usersCount',
      onClick: onHeaderClick,
      sort: "usersCount",
      w: "x80"
    }, t('Users')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'messages',
      direction: sort[1],
      active: sort[0] === 'msgs',
      onClick: onHeaderClick,
      sort: "msgs",
      w: "x80"
    }, t('Msgs')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'default',
      direction: sort[1],
      active: sort[0] === 'default',
      onClick: onHeaderClick,
      sort: "default",
      w: "x80"
    }, t('Default')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'featured',
      direction: sort[1],
      active: sort[0] === 'featured',
      onClick: onHeaderClick,
      sort: "featured",
      w: "x80"
    }, t('Featured'))].filter(Boolean);
  }, [sort, onHeaderClick, t, mediaQuery]);
  var renderRow = useCallback(function (room) {
    var _id = room._id,
        name = room.name,
        type = room.t,
        usersCount = room.usersCount,
        msgs = room.msgs,
        isDefault = room.default,
        featured = room.featured,
        usernames = room.usernames,
        args = _objectWithoutProperties(room, _excluded);

    var icon = roomTypes.getIcon(room);
    var roomName = getRoomDisplayName(room);
    return /*#__PURE__*/React.createElement(Table.Row, {
      action: true,
      key: _id,
      onKeyDown: onClick(_id),
      onClick: onClick(_id),
      tabIndex: 0,
      role: "link",
      "qa-room-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      style: style
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignContent: "center"
    }, /*#__PURE__*/React.createElement(RoomAvatar, {
      size: mediaQuery ? 'x28' : 'x40',
      room: _objectSpread({
        type: type,
        name: roomName,
        _id: _id
      }, args)
    }), /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      style: style,
      mi: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      style: style
    }, /*#__PURE__*/React.createElement(Icon, {
      mi: "x2",
      name: icon === 'omnichannel' ? 'livechat' : icon,
      fontScale: "p2m",
      color: "hint"
    }), /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      style: style,
      color: "default"
    }, roomName))))), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
      color: "hint",
      fontScale: "p2m",
      style: style
    }, t(getRoomType(room))), /*#__PURE__*/React.createElement(Box, {
      mi: "x4"
    })), /*#__PURE__*/React.createElement(Table.Cell, {
      style: style
    }, usersCount), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      style: style
    }, msgs), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      style: style
    }, isDefault ? t('True') : t('False')), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      style: style
    }, featured ? t('True') : t('False')));
  }, [mediaQuery, onClick, t]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: displayData,
    total: data.total,
    setParams: setParams,
    params: params,
    renderFilter: function (_ref4) {
      var onChange = _ref4.onChange,
          props = _objectWithoutProperties(_ref4, _excluded2);

      return /*#__PURE__*/React.createElement(FilterByTypeAndText, _extends({
        setFilter: onChange
      }, props));
    }
  });
}

module.exportDefault(RoomsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/285a5fe6b93f0f979d1bca00785328319a911249.map

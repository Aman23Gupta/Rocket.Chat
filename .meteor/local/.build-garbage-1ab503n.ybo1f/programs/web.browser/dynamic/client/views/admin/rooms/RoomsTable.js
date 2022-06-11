function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/RoomsTable.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "name", "t", "usersCount", "msgs", "default", "featured", "usernames"],
      _excluded2 = ["onChange"];

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
module.export({
  DEFAULT_TYPES: () => DEFAULT_TYPES,
  roomTypeI18nMap: () => roomTypeI18nMap
});
let Box, Table, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMediaQuery, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
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
let roomTypes;
module.link("../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 3);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);
let RoomAvatar;
module.link("../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
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
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let FilterByTypeAndText;
module.link("./FilterByTypeAndText", {
  default(v) {
    FilterByTypeAndText = v;
  }

}, 10);
const style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};
const DEFAULT_TYPES = ['d', 'p', 'c', 'teams'];
const roomTypeI18nMap = {
  l: 'Omnichannel',
  c: 'Channel',
  d: 'Direct',
  p: 'Group',
  discussion: 'Discussion'
};

const getRoomType = room => {
  if (room.teamMain) {
    return room.t === 'c' ? 'Teams_Public_Team' : 'Teams_Private_Team';
  }

  return roomTypeI18nMap[room.t];
};

const useQuery = (_ref, _ref2) => {
  let {
    text,
    types,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    filter: text || '',
    types,
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [text, types, itemsPerPage, current, column, direction]);
};

const getRoomDisplayName = room => room.t === 'd' ? room.usernames.join(' x ') : roomTypes.getRoomName(room.t, room);

const useDisplayData = (asyncState, sort) => useMemo(() => {
  const {
    value = {},
    phase
  } = asyncState;

  if (phase === AsyncStatePhase.LOADING) {
    return null;
  }

  if (sort[0] === 'name' && value.rooms) {
    return value.rooms.sort((a, b) => {
      const aName = getRoomDisplayName(a);
      const bName = getRoomDisplayName(b);

      if (aName === bName) {
        return 0;
      }

      const result = aName < bName ? -1 : 1;
      return sort[1] === 'asc' ? result : result * -1;
    });
  }

  return value.rooms;
}, [asyncState, sort]);

function RoomsTable() {
  const t = useTranslation();
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
  const [params, setParams] = useState({
    text: '',
    types: DEFAULT_TYPES,
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const routeName = 'admin-rooms';
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const asyncState = useEndpointData('rooms.adminRooms', query);
  const {
    value: data = {}
  } = asyncState;
  const router = useRoute(routeName);
  const onClick = useCallback(rid => () => router.push({
    context: 'edit',
    id: rid
  }), [router]);
  const onHeaderClick = useCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  }, [sort]);
  const displayData = useDisplayData(asyncState, sort);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
  }, t('Featured'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery]);
  const renderRow = useCallback(room => {
    const {
      _id,
      name,
      t: type,
      usersCount,
      msgs,
      default: isDefault,
      featured,
      usernames
    } = room,
          args = _objectWithoutProperties(room, _excluded);

    const icon = roomTypes.getIcon(room);
    const roomName = getRoomDisplayName(room);
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
        type,
        name: roomName,
        _id
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
    renderFilter: _ref3 => {
      let {
        onChange
      } = _ref3,
          props = _objectWithoutProperties(_ref3, _excluded2);

      return /*#__PURE__*/React.createElement(FilterByTypeAndText, _extends({
        setFilter: onChange
      }, props));
    }
  });
}

module.exportDefault(RoomsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/0c15b285172f25e29c023fb5f9b67c48167cfc1d.map

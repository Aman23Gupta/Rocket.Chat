function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/TeamsTable.js                                                                                //
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
let useAutoFocus, useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus(v) {
    useAutoFocus = v;
  },

  useMediaQuery(v) {
    useMediaQuery = v;
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

function TeamsTable() {
  const t = useTranslation();
  const [sort, setSort] = useState(['name', 'asc']);
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const refAutoFocus = useAutoFocus(true);
  const mediaQuery = useMediaQuery('(min-width: 768px)');
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
    key: 'channelsCount',
    style: {
      width: '100px'
    }
  }, t('Channels')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdAt',
    direction: sort[1],
    active: sort[0] === 'createdAt',
    onClick: onHeaderClick,
    sort: "createdAt",
    style: {
      width: '150px'
    }
  }, t('Created_at'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery]);
  const channelsRoute = useRoute('channel');
  const groupsRoute = useRoute('group');
  const query = useQuery(params, sort, 'teams');
  const {
    value: data = {}
  } = useEndpointData('directory', query);
  const onClick = useMemo(() => (name, type) => e => {
    if (e.type === 'click' || e.key === 'Enter') {
      type === 'c' ? channelsRoute.push({
        name
      }) : groupsRoute.push({
        name
      });
    }
  }, [channelsRoute, groupsRoute]);
  const formatDate = useFormatDate();
  const renderRow = useCallback(team => {
    const {
      _id,
      ts,
      t,
      name,
      fname,
      topic,
      roomsCount
    } = team;
    const avatarUrl = roomTypes.getConfig(t).getAvatarPath(team);
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
      name: roomTypes.getIcon(team),
      color: "hint"
    }), ' ', /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      mi: "x4"
    }, fname || name), /*#__PURE__*/React.createElement(RoomTags, {
      room: team,
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
    }, roomsCount), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      style: style
    }, formatDate(ts)));
  }, [formatDate, mediaQuery, onClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: _ref => {
      let {
        onChange
      } = _ref,
          props = _objectWithoutProperties(_ref, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        placeholder: t('Teams_Search_teams'),
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

module.exportDefault(TeamsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/4ac43182ea00e2acd164ab9f34b0180cb6c4cd46.map

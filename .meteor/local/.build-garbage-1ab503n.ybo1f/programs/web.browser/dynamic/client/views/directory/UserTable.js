function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/UserTable.js                                                                                 //
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
let Box, Table, Flex;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Flex(v) {
    Flex = v;
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
let FilterByText;
module.link("../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable;
module.link("../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);
let MarkdownText;
module.link("../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 5);
let UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 6);
let usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 7);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 8);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 10);
let useFormatDate;
module.link("../../hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 11);
let useQuery;
module.link("./hooks", {
  useQuery(v) {
    useQuery = v;
  }

}, 12);

function UserTable(_ref) {
  let {
    workspace = 'local'
  } = _ref;
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['name', 'asc']);
  const canViewFullOtherUserInfo = usePermission('view-full-other-user-info');
  const t = useTranslation();
  const federation = workspace === 'external';
  const query = useQuery(params, sort, 'users', workspace);
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
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
  }, t('Name')), mediaQuery && canViewFullOtherUserInfo && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'email',
    direction: sort[1],
    active: sort[0] === 'email',
    onClick: onHeaderClick,
    sort: "email",
    style: {
      width: '200px'
    }
  }, t('Email')), federation && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'origin',
    direction: sort[1],
    active: sort[0] === 'origin',
    onClick: onHeaderClick,
    sort: "origin",
    style: {
      width: '200px'
    }
  }, t('Domain')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'createdAt',
    direction: sort[1],
    active: sort[0] === 'createdAt',
    onClick: onHeaderClick,
    sort: "createdAt",
    style: {
      width: '200px'
    }
  }, t('Joined_at'))].filter(Boolean), [sort, onHeaderClick, t, mediaQuery, canViewFullOtherUserInfo, federation]);
  const directRoute = useRoute('direct');
  const {
    value: data = {}
  } = useEndpointData('directory', query);
  const onClick = useCallback(username => e => {
    if (e.type === 'click' || e.key === 'Enter') {
      directRoute.push({
        rid: username
      });
    }
  }, [directRoute]);
  const formatDate = useFormatDate();
  const renderRow = useCallback(_ref2 => {
    let {
      createdAt,
      emails,
      _id,
      username,
      name,
      domain,
      bio,
      avatarETag,
      nickname
    } = _ref2;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      onKeyDown: onClick(username),
      onClick: onClick(username),
      tabIndex: 0,
      role: "link",
      action: true
    }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Flex.Item, null, /*#__PURE__*/React.createElement(UserAvatar, {
      size: "x40",
      title: username,
      username: username,
      etag: avatarETag
    })), /*#__PURE__*/React.createElement(Box, {
      withTruncatedText: true,
      grow: 1,
      mi: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex"
    }, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      withTruncatedText: true
    }, name || username, nickname && " (".concat(nickname, ")")), ' ', /*#__PURE__*/React.createElement(Box, {
      mi: "x4"
    }), ' ', /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2",
      color: "hint",
      withTruncatedText: true
    }, username)), /*#__PURE__*/React.createElement(MarkdownText, {
      variant: "inline",
      fontScale: "p2",
      color: "hint",
      content: bio
    }))))), mediaQuery && canViewFullOtherUserInfo && /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, emails && emails.length && emails[0].address), federation && /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, domain), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "hint",
      withTruncatedText: true
    }, formatDate(createdAt)));
  }, [mediaQuery, federation, canViewFullOtherUserInfo, formatDate, onClick]);
  const refAutoFocus = useAutoFocus(true);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: _ref3 => {
      let {
        onChange
      } = _ref3,
          props = _objectWithoutProperties(_ref3, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        placeholder: t('Search_Users'),
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

module.exportDefault(UserTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/6c4054868739fba1c0e655b7cc4b665c37ec5e14.map

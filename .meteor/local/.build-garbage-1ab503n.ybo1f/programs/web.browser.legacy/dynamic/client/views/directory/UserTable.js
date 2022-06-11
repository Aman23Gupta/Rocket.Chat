function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/UserTable.js                                                                                 //
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
var Box, Table, Flex;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Flex: function (v) {
    Flex = v;
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
var FilterByText;
module.link("../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);
var GenericTable;
module.link("../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 4);
var MarkdownText;
module.link("../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 5);
var UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 6);
var usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 7);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 8);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 10);
var useFormatDate;
module.link("../../hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 11);
var useQuery;
module.link("./hooks", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 12);

function UserTable(_ref) {
  var _ref$workspace = _ref.workspace,
      workspace = _ref$workspace === void 0 ? 'local' : _ref$workspace;

  var _useState = useState({
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

  var canViewFullOtherUserInfo = usePermission('view-full-other-user-info');
  var t = useTranslation();
  var federation = workspace === 'external';
  var query = useQuery(params, sort, 'users', workspace);
  var mediaQuery = useMediaQuery('(min-width: 1024px)');
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
    }, t('Joined_at'))].filter(Boolean);
  }, [sort, onHeaderClick, t, mediaQuery, canViewFullOtherUserInfo, federation]);
  var directRoute = useRoute('direct');

  var _useEndpointData = useEndpointData('directory', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {} : _useEndpointData$valu;

  var onClick = useCallback(function (username) {
    return function (e) {
      if (e.type === 'click' || e.key === 'Enter') {
        directRoute.push({
          rid: username
        });
      }
    };
  }, [directRoute]);
  var formatDate = useFormatDate();
  var renderRow = useCallback(function (_ref2) {
    var createdAt = _ref2.createdAt,
        emails = _ref2.emails,
        _id = _ref2._id,
        username = _ref2.username,
        name = _ref2.name,
        domain = _ref2.domain,
        bio = _ref2.bio,
        avatarETag = _ref2.avatarETag,
        nickname = _ref2.nickname;
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
    }, name || username, nickname && " (" + nickname + ")"), ' ', /*#__PURE__*/React.createElement(Box, {
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
  var refAutoFocus = useAutoFocus(true);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderFilter: function (_ref3) {
      var onChange = _ref3.onChange,
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
//# sourceMappingURL=/dynamic/client/views/directory/1d20a26b94c3f06fe8ef60e136b2e00205c9d630.map

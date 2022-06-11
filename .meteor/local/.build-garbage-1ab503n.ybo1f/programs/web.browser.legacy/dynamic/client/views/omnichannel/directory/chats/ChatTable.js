function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/ChatTable.js                                                               //
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
var Table, Tag, Box;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  },
  Tag: function (v) {
    Tag = v;
  },
  Box: function (v) {
    Box = v;
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
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 3);
var React, useState, useMemo, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 4);
var FilterByText;
module.link("../../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 5);
var GenericTable;
module.link("../../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 6);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);

var useQuery = function (_ref, _ref2, userIdLoggedIn) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify)),
      open: false,
      roomName: text,
      agents: [userIdLoggedIn]
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [column, current, direction, itemsPerPage, userIdLoggedIn, text]);
};

var ChatTable = function (_ref4) {
  var setChatReload = _ref4.setChatReload;

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['closedAt', 'desc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var t = useTranslation();
  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var userIdLoggedIn = Meteor.userId();
  var query = useQuery(debouncedParams, debouncedSort, userIdLoggedIn);
  var directoryRoute = useRoute('omnichannel-directory');
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
  var onRowClick = useMutableCallback(function (id) {
    return directoryRoute.push({
      page: 'chats',
      bar: 'info',
      id: id
    });
  });

  var _useEndpointData = useEndpointData('livechat/rooms', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  useEffect(function () {
    setChatReload(function () {
      return reload;
    });
  }, [reload, setChatReload]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
    }, t('Closed_At'))].filter(Boolean);
  }, [sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref5) {
    var _id = _ref5._id,
        fname = _ref5.fname,
        ts = _ref5.ts,
        closedAt = _ref5.closedAt,
        department = _ref5.department,
        tags = _ref5.tags;
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
    }, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Box, {
      withTruncatedText: true
    }, fname), tags && /*#__PURE__*/React.createElement(Box, {
      color: "hint",
      display: "flex",
      "flex-direction": "row"
    }, tags.map(function (tag) {
      return /*#__PURE__*/React.createElement(Box, {
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
      }, tag));
    })))), /*#__PURE__*/React.createElement(Table.Cell, {
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
    renderFilter: function (_ref6) {
      var onChange = _ref6.onChange,
          props = _objectWithoutProperties(_ref6, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  });
};

module.exportDefault(ChatTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/b79bc545dd010f2b708dd02f63ee90525c9aaa23.map

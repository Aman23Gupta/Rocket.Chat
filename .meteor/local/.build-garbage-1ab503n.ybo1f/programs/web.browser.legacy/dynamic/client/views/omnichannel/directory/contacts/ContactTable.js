function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/ContactTable.js                                                         //
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
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
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
}, 2);
var FilterByText;
module.link("../../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 3);
var GenericTable;
module.link("../../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 4);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 7);
var useFormatDate;
module.link("../../../../hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 8);

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      term: text,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [column, current, direction, itemsPerPage, text]);
};

function ContactTable(_ref4) {
  var setContactReload = _ref4.setContactReload;

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['username', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var t = useTranslation();
  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var directoryRoute = useRoute('omnichannel-directory');
  var formatDate = useFormatDate();
  var onHeaderClick = useMutableCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      return setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
    }

    setSort([id, 'asc']);
  });
  var onButtonNewClick = useMutableCallback(function () {
    return directoryRoute.push({
      page: 'contacts',
      bar: 'new'
    });
  });
  var onRowClick = useMutableCallback(function (id) {
    return function () {
      return directoryRoute.push({
        page: 'contacts',
        id: id,
        bar: 'info'
      });
    };
  });

  var _useEndpointData = useEndpointData('livechat/visitors.search', query),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

  useEffect(function () {
    setContactReload(function () {
      return reload;
    });
  }, [reload, setContactReload]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'username',
      direction: sort[1],
      active: sort[0] === 'username',
      onClick: onHeaderClick,
      sort: "username"
    }, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'phone',
      direction: sort[1],
      active: sort[0] === 'phone',
      onClick: onHeaderClick,
      sort: "phone"
    }, t('Phone')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'email',
      direction: sort[1],
      active: sort[0] === 'visitorEmails.address',
      onClick: onHeaderClick,
      sort: "visitorEmails.address"
    }, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'lastchat',
      direction: sort[1],
      active: sort[0] === 'lastchat',
      onClick: onHeaderClick,
      sort: "visitorEmails.address"
    }, t('Last_Chat'))].filter(Boolean);
  }, [sort, onHeaderClick, t]);
  var renderRow = useCallback(function (_ref5) {
    var _id = _ref5._id,
        username = _ref5.username,
        name = _ref5.name,
        visitorEmails = _ref5.visitorEmails,
        phone = _ref5.phone,
        lastChat = _ref5.lastChat;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, username), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, phone && phone.length && phone[0].phoneNumber), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, visitorEmails && visitorEmails.length && visitorEmails[0].address), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, lastChat && formatDate(lastChat.ts)));
  }, [formatDate, onRowClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.visitors,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: function (_ref6) {
      var onChange = _ref6.onChange,
          props = _objectWithoutProperties(_ref6, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        displayButton: true,
        textButton: t('New_Contact'),
        onButtonClick: onButtonNewClick,
        onChange: onChange
      }, props));
    }
  });
}

module.exportDefault(ContactTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/ad41eff11767283403028fe1cf29f10b1ce3e0d6.map

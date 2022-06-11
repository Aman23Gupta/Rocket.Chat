function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxTable.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
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
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var SendTestButton;
module.link("./SendTestButton", {
  "default": function (v) {
    SendTestButton = v;
  }
}, 7);

var useQuery = function (_ref, _ref2) {
  var itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = direction === 'asc' ? 1 : -1, _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [column, current, direction, itemsPerPage]);
};

function EmailInboxTable() {
  var t = useTranslation();

  var _useState = useState({
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['name', 'asc']),
      _useState4 = _slicedToArray(_useState3, 1),
      sort = _useState4[0];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);
  var router = useRoute('admin-email-inboxes');
  var onClick = useCallback(function (_id) {
    return function () {
      return router.push({
        context: 'edit',
        _id: _id
      });
    };
  }, [router]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[1],
      active: sort[0] === 'name'
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'email',
      direction: sort[1],
      active: sort[0] === 'email'
    }, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'active',
      direction: sort[1],
      active: sort[0] === 'active'
    }, t('Active')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'sendTest',
      w: "x60"
    })].filter(Boolean);
  }, [sort, t]);

  var _useEndpointData = useEndpointData('email-inbox.list', query),
      data = _useEndpointData.value;

  var renderRow = useCallback(function (_ref4) {
    var _id = _ref4._id,
        name = _ref4.name,
        email = _ref4.email,
        active = _ref4.active;
    return /*#__PURE__*/React.createElement(Table.Row, {
      action: true,
      key: _id,
      onKeyDown: onClick(_id),
      onClick: onClick(_id),
      tabIndex: 0,
      role: "link",
      "qa-room-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, email), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, active ? t('Yes') : t('No')), /*#__PURE__*/React.createElement(SendTestButton, {
      id: _id
    }));
  }, [onClick, t]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.emailInboxes,
    total: data && data.total,
    setParams: setParams,
    params: params
  });
}

module.exportDefault(EmailInboxTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/5c6f6582cb8d6088f4185190ef4b2b5d72c824d3.map

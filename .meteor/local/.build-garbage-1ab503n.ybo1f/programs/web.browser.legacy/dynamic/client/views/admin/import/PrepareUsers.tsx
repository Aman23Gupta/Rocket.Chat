function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareUsers.tsx                                                                          //
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
var CheckBox, Table, Tag, Pagination;
module.link("@rocket.chat/fuselage", {
  CheckBox: function (v) {
    CheckBox = v;
  },
  Table: function (v) {
    Table = v;
  },
  Tag: function (v) {
    Tag = v;
  },
  Pagination: function (v) {
    Pagination = v;
  }
}, 0);
var React, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var PrepareUsers = function (_ref) {
  var usersCount = _ref.usersCount,
      users = _ref.users,
      setUsers = _ref.setUsers;
  var t = useTranslation();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(25),
      _useState4 = _slicedToArray(_useState3, 2),
      itemsPerPage = _useState4[0],
      setItemsPerPage = _useState4[1];

  var showingResultsLabel = useCallback(function (_ref2) {
    var count = _ref2.count,
        current = _ref2.current,
        itemsPerPage = _ref2.itemsPerPage;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  var itemsPerPageLabel = useCallback(function () {
    return t('Items_per_page:');
  }, [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: usersCount > 0,
    indeterminate: usersCount > 0 && usersCount !== users.length,
    onChange: function () {
      setUsers(function (users) {
        var hasCheckedDeletedUsers = users.some(function (_ref3) {
          var is_deleted = _ref3.is_deleted,
              do_import = _ref3.do_import;
          return is_deleted && do_import;
        });
        var isChecking = usersCount === 0;

        if (isChecking) {
          return users.map(function (user) {
            return _objectSpread(_objectSpread({}, user), {}, {
              do_import: true
            });
          });
        }

        if (hasCheckedDeletedUsers) {
          return users.map(function (user) {
            return user.is_deleted ? _objectSpread(_objectSpread({}, user), {}, {
              do_import: false
            }) : user;
          });
        }

        return users.map(function (user) {
          return _objectSpread(_objectSpread({}, user), {}, {
            do_import: false
          });
        });
      });
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Username')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Email')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }))), /*#__PURE__*/React.createElement(Table.Body, null, users.slice(current, current + itemsPerPage).map(function (user) {
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: user.user_id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      width: "x36"
    }, /*#__PURE__*/React.createElement(CheckBox, {
      checked: user.do_import,
      onChange: function (event) {
        var checked = event.currentTarget.checked;
        setUsers(function (users) {
          return users.map(function (_user) {
            return _user === user ? _objectSpread(_objectSpread({}, _user), {}, {
              do_import: checked
            }) : _user;
          });
        });
      }
    })), /*#__PURE__*/React.createElement(Table.Cell, null, user.username), /*#__PURE__*/React.createElement(Table.Cell, null, user.email), /*#__PURE__*/React.createElement(Table.Cell, {
      align: "end"
    }, user.is_deleted && /*#__PURE__*/React.createElement(Tag, {
      variant: "danger"
    }, t('Deleted'))));
  }))), /*#__PURE__*/React.createElement(Pagination, {
    current: current,
    itemsPerPage: itemsPerPage,
    count: users.length || 0,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent,
    itemsPerPageLabel: itemsPerPageLabel,
    showingResultsLabel: showingResultsLabel
  }));
};

module.exportDefault(PrepareUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/27fd93e808be7d83d96cc9caa7be274d7620a290.map

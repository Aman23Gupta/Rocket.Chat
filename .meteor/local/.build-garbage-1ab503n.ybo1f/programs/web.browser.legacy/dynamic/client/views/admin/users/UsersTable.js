function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UsersTable.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["params", "onChangeParams", "sort", "onChangeSort"],
    _excluded2 = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
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
var UserRow;
module.link("./UserRow", {
  "default": function (v) {
    UserRow = v;
  }
}, 6);

function UsersTable(_ref) {
  var params = _ref.params,
      onChangeParams = _ref.onChangeParams,
      sort = _ref.sort,
      onChangeSort = _ref.onChangeSort,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var usersRoute = useRoute('admin-users');
  var onClick = useCallback(function (username) {
    return function () {
      return usersRoute.push({
        context: 'info',
        id: username
      });
    };
  }, [usersRoute]);
  var onHeaderClick = useCallback(function (id) {
    var preparedSort = [];

    var _sort = _slicedToArray(sort, 1),
        _sort$ = _slicedToArray(_sort[0], 2),
        sortBy = _sort$[0],
        sortDirection = _sort$[1];

    if (sortBy === id) {
      preparedSort.push([id, sortDirection === 'asc' ? 'desc' : 'asc']);
    } else {
      preparedSort.push([id, 'asc']);
    } //
    // Special cases
    // If the sortable field is `name`, we should also add `usernames`


    if (id === 'name') {
      preparedSort.push(['usernames', sortDirection]);
    } // If the sortable field is `name`, we should also add `usernames`


    if (id === 'status') {
      preparedSort.push(['active', sortDirection === 'asc' ? 'desc' : 'asc']);
    }

    onChangeSort(preparedSort);
  }, [onChangeSort, sort]);
  var mediaQuery = useMediaQuery('(min-width: 1024px)');
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      direction: sort[0][1],
      active: sort[0][0] === 'name',
      onClick: onHeaderClick,
      sort: "name",
      w: "x200"
    }, t('Name')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'username',
      direction: sort[0][1],
      active: sort[0][0] === 'username',
      onClick: onHeaderClick,
      sort: "username",
      w: "x140"
    }, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'email',
      direction: sort[0][1],
      active: sort[0][0] === 'emails.adress',
      onClick: onHeaderClick,
      sort: "emails.address",
      w: "x120"
    }, t('Email')), mediaQuery && /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'roles',
      direction: sort[0][1],
      active: sort[0][0] === 'roles',
      onClick: onHeaderClick,
      sort: "roles",
      w: "x120"
    }, t('Roles')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'status',
      direction: sort[0][1],
      active: sort[0][0] === 'status',
      onClick: onHeaderClick,
      sort: "status",
      w: "x100"
    }, t('Status'))),
    results: props.users,
    total: props.total,
    setParams: onChangeParams,
    params: params,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        placeholder: t('Search_Users'),
        onChange: onChange
      }, props));
    }
  }, function (props) {
    return /*#__PURE__*/React.createElement(UserRow, _extends({
      key: props._id,
      onClick: onClick,
      mediaQuery: mediaQuery
    }, props));
  });
}

module.exportDefault(UsersTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/b3d62938393668e8b4544be25256fed6fbe43b50.map

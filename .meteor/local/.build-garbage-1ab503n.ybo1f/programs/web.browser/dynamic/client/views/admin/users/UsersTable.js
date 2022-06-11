function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UsersTable.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["params", "onChangeParams", "sort", "onChangeSort"],
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
let useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let UserRow;
module.link("./UserRow", {
  default(v) {
    UserRow = v;
  }

}, 6);

function UsersTable(_ref) {
  let {
    params,
    onChangeParams,
    sort,
    onChangeSort
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const usersRoute = useRoute('admin-users');
  const onClick = useCallback(username => () => usersRoute.push({
    context: 'info',
    id: username
  }), [usersRoute]);
  const onHeaderClick = useCallback(id => {
    const preparedSort = [];
    const [[sortBy, sortDirection]] = sort;

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
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded2);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        placeholder: t('Search_Users'),
        onChange: onChange
      }, props));
    }
  }, props => /*#__PURE__*/React.createElement(UserRow, _extends({
    key: props._id,
    onClick: onClick,
    mediaQuery: mediaQuery
  }, props)));
}

module.exportDefault(UsersTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/149aa9eb51bdbab7150a8e9f7d13bde9e4670b8c.map

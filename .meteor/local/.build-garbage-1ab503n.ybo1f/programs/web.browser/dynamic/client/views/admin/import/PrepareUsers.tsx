function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareUsers.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let CheckBox, Table, Tag, Pagination;
module.link("@rocket.chat/fuselage", {
  CheckBox(v) {
    CheckBox = v;
  },

  Table(v) {
    Table = v;
  },

  Tag(v) {
    Tag = v;
  },

  Pagination(v) {
    Pagination = v;
  }

}, 0);
let React, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const PrepareUsers = _ref => {
  let {
    usersCount,
    users,
    setUsers
  } = _ref;
  const t = useTranslation();
  const [current, setCurrent] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const showingResultsLabel = useCallback(_ref2 => {
    let {
      count,
      current,
      itemsPerPage
    } = _ref2;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  const itemsPerPageLabel = useCallback(() => t('Items_per_page:'), [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: usersCount > 0,
    indeterminate: usersCount > 0 && usersCount !== users.length,
    onChange: () => {
      setUsers(users => {
        const hasCheckedDeletedUsers = users.some(_ref3 => {
          let {
            is_deleted,
            do_import
          } = _ref3;
          return is_deleted && do_import;
        });
        const isChecking = usersCount === 0;

        if (isChecking) {
          return users.map(user => _objectSpread(_objectSpread({}, user), {}, {
            do_import: true
          }));
        }

        if (hasCheckedDeletedUsers) {
          return users.map(user => user.is_deleted ? _objectSpread(_objectSpread({}, user), {}, {
            do_import: false
          }) : user);
        }

        return users.map(user => _objectSpread(_objectSpread({}, user), {}, {
          do_import: false
        }));
      });
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Username')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }, t('Email')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th"
  }))), /*#__PURE__*/React.createElement(Table.Body, null, users.slice(current, current + itemsPerPage).map(user => /*#__PURE__*/React.createElement(Table.Row, {
    key: user.user_id
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    width: "x36"
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: user.do_import,
    onChange: event => {
      const {
        checked
      } = event.currentTarget;
      setUsers(users => users.map(_user => _user === user ? _objectSpread(_objectSpread({}, _user), {}, {
        do_import: checked
      }) : _user));
    }
  })), /*#__PURE__*/React.createElement(Table.Cell, null, user.username), /*#__PURE__*/React.createElement(Table.Cell, null, user.email), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "end"
  }, user.is_deleted && /*#__PURE__*/React.createElement(Tag, {
    variant: "danger"
  }, t('Deleted'))))))), /*#__PURE__*/React.createElement(Pagination, {
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
//# sourceMappingURL=/dynamic/client/views/admin/import/ef77a2b6779d1dd968011acaef5d1ed2f5b6a354.map

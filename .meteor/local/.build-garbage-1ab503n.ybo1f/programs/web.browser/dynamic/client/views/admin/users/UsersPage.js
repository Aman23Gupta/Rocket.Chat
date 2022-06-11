function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UsersPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 0);
let React, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let UserPageHeaderContentWithSeatsCap;
module.link("../../../../ee/client/views/admin/users/UserPageHeaderContentWithSeatsCap", {
  default(v) {
    UserPageHeaderContentWithSeatsCap = v;
  }

}, 2);
let useSeatsCap;
module.link("../../../../ee/client/views/admin/users/useSeatsCap", {
  useSeatsCap(v) {
    useSeatsCap = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 8);
let AddUser;
module.link("./AddUser", {
  AddUser(v) {
    AddUser = v;
  }

}, 9);
let EditUserWithData;
module.link("./EditUserWithData", {
  default(v) {
    EditUserWithData = v;
  }

}, 10);
let InviteUsers;
module.link("./InviteUsers", {
  InviteUsers(v) {
    InviteUsers = v;
  }

}, 11);
let UserInfoWithData;
module.link("./UserInfo", {
  UserInfoWithData(v) {
    UserInfoWithData = v;
  }

}, 12);
let UserPageHeaderContent;
module.link("./UserPageHeaderContent", {
  default(v) {
    UserPageHeaderContent = v;
  }

}, 13);
let UsersTable;
module.link("./UsersTable", {
  default(v) {
    UsersTable = v;
  }

}, 14);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, sortFields) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  return useMemo(() => _objectSpread(_objectSpread({
    fields: JSON.stringify({
      name: 1,
      username: 1,
      emails: 1,
      roles: 1,
      status: 1,
      avatarETag: 1,
      active: 1
    }),
    query: JSON.stringify({
      $or: [{
        'emails.address': {
          $regex: text || '',
          $options: 'i'
        }
      }, {
        username: {
          $regex: text || '',
          $options: 'i'
        }
      }, {
        name: {
          $regex: text || '',
          $options: 'i'
        }
      }]
    }),
    sort: JSON.stringify(sortFields.reduce((agg, _ref2) => {
      let [column, direction] = _ref2;
      agg[column] = sortDir(direction);
      return agg;
    }, {}))
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [text, itemsPerPage, current, sortFields]);
};

function UsersPage() {
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const seatsCap = useSeatsCap();
  const usersRoute = useRoute('admin-users');
  useEffect(() => {
    if (!context || !seatsCap) {
      return;
    }

    if (seatsCap.activeUsers >= seatsCap.maxActiveUsers && !['edit', 'info'].includes(context)) {
      usersRoute.push({});
    }
  }, [context, seatsCap, usersRoute]);
  const t = useTranslation();

  const handleVerticalBarCloseButtonClick = () => {
    usersRoute.push({});
  };

  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState([['name', 'asc'], ['usernames', 'asc']]);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const {
    value: data = {},
    reload: reloadList
  } = useEndpointData('users.list', query);

  const reload = () => {
    seatsCap === null || seatsCap === void 0 ? void 0 : seatsCap.reload();
    reloadList();
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Users')
  }, seatsCap && (seatsCap.maxActiveUsers < Number.POSITIVE_INFINITY ? /*#__PURE__*/React.createElement(UserPageHeaderContentWithSeatsCap, seatsCap) : /*#__PURE__*/React.createElement(UserPageHeaderContent, null))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(UsersTable, {
    users: data.users,
    total: data.total,
    params: params,
    onChangeParams: setParams,
    sort: sort,
    onChangeSort: setSort
  }))), context && /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'info' && t('User_Info'), context === 'edit' && t('Edit_User'), context === 'new' && t('Add_User'), context === 'invite' && t('Invite_Users'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleVerticalBarCloseButtonClick
  })), context === 'info' && id && /*#__PURE__*/React.createElement(UserInfoWithData, {
    uid: id,
    onReload: reload
  }), context === 'edit' && /*#__PURE__*/React.createElement(EditUserWithData, {
    uid: id,
    onReload: reload
  }), context === 'new' && /*#__PURE__*/React.createElement(AddUser, {
    onReload: reload
  }), context === 'invite' && /*#__PURE__*/React.createElement(InviteUsers, null)));
}

module.exportDefault(UsersPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/a0c14e6f4a822bc14a07bc3b5568f1f054171e09.map

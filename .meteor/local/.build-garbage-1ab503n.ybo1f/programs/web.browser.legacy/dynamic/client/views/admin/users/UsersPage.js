function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UsersPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 0);
var React, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var UserPageHeaderContentWithSeatsCap;
module.link("../../../../ee/client/views/admin/users/UserPageHeaderContentWithSeatsCap", {
  "default": function (v) {
    UserPageHeaderContentWithSeatsCap = v;
  }
}, 2);
var useSeatsCap;
module.link("../../../../ee/client/views/admin/users/useSeatsCap", {
  useSeatsCap: function (v) {
    useSeatsCap = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var AddUser;
module.link("./AddUser", {
  AddUser: function (v) {
    AddUser = v;
  }
}, 9);
var EditUserWithData;
module.link("./EditUserWithData", {
  "default": function (v) {
    EditUserWithData = v;
  }
}, 10);
var InviteUsers;
module.link("./InviteUsers", {
  InviteUsers: function (v) {
    InviteUsers = v;
  }
}, 11);
var UserInfoWithData;
module.link("./UserInfo", {
  UserInfoWithData: function (v) {
    UserInfoWithData = v;
  }
}, 12);
var UserPageHeaderContent;
module.link("./UserPageHeaderContent", {
  "default": function (v) {
    UserPageHeaderContent = v;
  }
}, 13);
var UsersTable;
module.link("./UsersTable", {
  "default": function (v) {
    UsersTable = v;
  }
}, 14);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, sortFields) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;
  return useMemo(function () {
    return _objectSpread(_objectSpread({
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
      sort: JSON.stringify(sortFields.reduce(function (agg, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            column = _ref3[0],
            direction = _ref3[1];

        agg[column] = sortDir(direction);
        return agg;
      }, {}))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, sortFields]);
};

function UsersPage() {
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var seatsCap = useSeatsCap();
  var usersRoute = useRoute('admin-users');
  useEffect(function () {
    if (!context || !seatsCap) {
      return;
    }

    if (seatsCap.activeUsers >= seatsCap.maxActiveUsers && !['edit', 'info'].includes(context)) {
      usersRoute.push({});
    }
  }, [context, seatsCap, usersRoute]);
  var t = useTranslation();

  var handleVerticalBarCloseButtonClick = function () {
    usersRoute.push({});
  };

  var _useState = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState([['name', 'asc'], ['usernames', 'asc']]),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var debouncedParams = useDebouncedValue(params, 500);
  var debouncedSort = useDebouncedValue(sort, 500);
  var query = useQuery(debouncedParams, debouncedSort);

  var _useEndpointData = useEndpointData('users.list', query),
      _useEndpointData$valu = _useEndpointData.value,
      data = _useEndpointData$valu === void 0 ? {} : _useEndpointData$valu,
      reloadList = _useEndpointData.reload;

  var reload = function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/users/9b44a32fba4bef991ebac2bf1b14da8b784cb824.map

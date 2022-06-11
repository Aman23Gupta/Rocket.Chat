function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserInfo.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["uid", "username", "onReload"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
module.export({
  UserInfoWithData: function () {
    return UserInfoWithData;
  }
});
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 3);
var FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 4);
var UserCard;
module.link("../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 5);
var UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 6);
var useRolesDescription;
module.link("../../../contexts/AuthorizationContext", {
  useRolesDescription: function (v) {
    useRolesDescription = v;
  }
}, 7);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 10);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 11);
var getUserEmailVerified;
module.link("../../../lib/utils/getUserEmailVerified", {
  getUserEmailVerified: function (v) {
    getUserEmailVerified = v;
  }
}, 12);
var UserInfo;
module.link("../../room/contextualBar/UserInfo/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 13);
var UserInfoActions;
module.link("./UserInfoActions", {
  UserInfoActions: function (v) {
    UserInfoActions = v;
  }
}, 14);

function UserInfoWithData(_ref) {
  var _data$user, _data$user$roles;

  var uid = _ref.uid,
      username = _ref.username,
      onReload = _ref.onReload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var showRealNames = useSetting('UI_Use_Real_Name');
  var getRoles = useRolesDescription();
  var approveManuallyUsers = useSetting('Accounts_ManuallyApproveNewUsers');

  var _useEndpointData = useEndpointData('users.info', useMemo(function () {
    return _objectSpread(_objectSpread({}, uid && {
      userId: uid
    }), username && {
      username: username
    });
  }, [uid, username])),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error,
      reloadUserInfo = _useEndpointData.reload;

  var onChange = useMutableCallback(function () {
    onReload();
    reloadUserInfo();
  });
  var user = useMemo(function () {
    var _ref2 = data || {
      user: {}
    },
        user = _ref2.user;

    var name = user.name,
        username = user.username,
        _user$roles = user.roles,
        roles = _user$roles === void 0 ? [] : _user$roles,
        status = user.status,
        statusText = user.statusText,
        bio = user.bio,
        utcOffset = user.utcOffset,
        lastLogin = user.lastLogin,
        nickname = user.nickname;
    return {
      name: name,
      username: username,
      lastLogin: lastLogin,
      showRealNames: showRealNames,
      roles: roles && getRoles(roles).map(function (role, index) {
        return /*#__PURE__*/React.createElement(UserCard.Role, {
          key: index
        }, role);
      }),
      bio: bio,
      phone: user.phone,
      utcOffset: utcOffset,
      customFields: _objectSpread(_objectSpread({}, user.customFields), approveManuallyUsers && user.active === false && user.reason && {
        Reason: user.reason
      }),
      verified: getUserEmailVerified(user),
      email: getUserEmailAddress(user),
      createdAt: user.createdAt,
      status: /*#__PURE__*/React.createElement(UserStatus, {
        status: status
      }),
      customStatus: statusText,
      nickname: nickname
    };
  }, [approveManuallyUsers, data, showRealNames, getRoles]);

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      p: "x24"
    }, /*#__PURE__*/React.createElement(FormSkeleton, null));
  }

  if (error) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('User_not_found'));
  }

  var admin = (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$roles = _data$user.roles) === null || _data$user$roles === void 0 ? void 0 : _data$user$roles.includes('admin');
  return /*#__PURE__*/React.createElement(UserInfo, _extends({}, user, {
    data: data.user,
    onChange: onChange,
    actions: data && data.user && /*#__PURE__*/React.createElement(UserInfoActions, {
      isActive: data.user.active,
      isAdmin: admin,
      _id: data.user._id,
      username: data.user.username,
      onChange: onChange,
      onReload: onReload
    })
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/dde11093edd18dcb570390edd7b4656e1f8ac7cd.map

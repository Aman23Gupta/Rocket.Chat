function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserInfo.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["uid", "username", "onReload"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
module.export({
  UserInfoWithData: () => UserInfoWithData
});
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 3);
let FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 4);
let UserCard;
module.link("../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 5);
let UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 6);
let useRolesDescription;
module.link("../../../contexts/AuthorizationContext", {
  useRolesDescription(v) {
    useRolesDescription = v;
  }

}, 7);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 10);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 11);
let getUserEmailVerified;
module.link("../../../lib/utils/getUserEmailVerified", {
  getUserEmailVerified(v) {
    getUserEmailVerified = v;
  }

}, 12);
let UserInfo;
module.link("../../room/contextualBar/UserInfo/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 13);
let UserInfoActions;
module.link("./UserInfoActions", {
  UserInfoActions(v) {
    UserInfoActions = v;
  }

}, 14);

function UserInfoWithData(_ref) {
  var _data$user, _data$user$roles;

  let {
    uid,
    username,
    onReload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const showRealNames = useSetting('UI_Use_Real_Name');
  const getRoles = useRolesDescription();
  const approveManuallyUsers = useSetting('Accounts_ManuallyApproveNewUsers');
  const {
    value: data,
    phase: state,
    error,
    reload: reloadUserInfo
  } = useEndpointData('users.info', useMemo(() => _objectSpread(_objectSpread({}, uid && {
    userId: uid
  }), username && {
    username
  }), [uid, username]));
  const onChange = useMutableCallback(() => {
    onReload();
    reloadUserInfo();
  });
  const user = useMemo(() => {
    const {
      user
    } = data || {
      user: {}
    };
    const {
      name,
      username,
      roles = [],
      status,
      statusText,
      bio,
      utcOffset,
      lastLogin,
      nickname
    } = user;
    return {
      name,
      username,
      lastLogin,
      showRealNames,
      roles: roles && getRoles(roles).map((role, index) => /*#__PURE__*/React.createElement(UserCard.Role, {
        key: index
      }, role)),
      bio,
      phone: user.phone,
      utcOffset,
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
      nickname
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

  const admin = (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$roles = _data$user.roles) === null || _data$user$roles === void 0 ? void 0 : _data$user$roles.includes('admin');
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
//# sourceMappingURL=/dynamic/client/views/admin/users/50c83b13a68fde758c4040b6c87c521c81f498dc.map

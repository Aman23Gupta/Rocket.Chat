function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserInfoWithData.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["uid", "username", "tabBar", "rid", "onClickClose", "onClose", "video", "onClickBack"];

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
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var getUserEmailAddress;
module.link("../../../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 2);
var FormSkeleton;
module.link("../../../../components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 3);
var UserCard;
module.link("../../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 4);
var ReactiveUserStatus;
module.link("../../../../components/UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 5);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 6);
var useRolesDescription;
module.link("../../../../contexts/AuthorizationContext", {
  useRolesDescription: function (v) {
    useRolesDescription = v;
  }
}, 7);
var useSession;
module.link("../../../../contexts/SessionContext", {
  useSession: function (v) {
    useSession = v;
  }
}, 8);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 9);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 11);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 12);
var getUserEmailVerified;
module.link("../../../../lib/utils/getUserEmailVerified", {
  getUserEmailVerified: function (v) {
    getUserEmailVerified = v;
  }
}, 13);
var useWebRTC;
module.link("../../hooks/useWebRTC", {
  useWebRTC: function (v) {
    useWebRTC = v;
  }
}, 14);
var UserInfo;
module.link("./UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 15);
var UserWebRTCWithData;
module.link("./UserWebRTC", {
  "default": function (v) {
    UserWebRTCWithData = v;
  }
}, 16);
var UserActions;
module.link("./actions/UserActions", {
  "default": function (v) {
    UserActions = v;
  }
}, 17);

function UserInfoWithData(_ref) {
  var uid = _ref.uid,
      username = _ref.username,
      tabBar = _ref.tabBar,
      rid = _ref.rid,
      onClickClose = _ref.onClickClose,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? onClickClose : _ref$onClose,
      video = _ref.video,
      onClickBack = _ref.onClickBack,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var showRealNames = useSetting('UI_Use_Real_Name');
  var getRoles = useRolesDescription();
  var openedRoom = useSession('openedRoom');

  var _useWebRTC = useWebRTC(openedRoom),
      showUserWebRTC = _useWebRTC.showUserWebRTC;

  var _useEndpointData = useEndpointData('users.info', useMemo(function () {
    return _objectSpread(_objectSpread({}, uid && {
      userId: uid
    }), username && {
      username: username
    });
  }, [uid, username])),
      value = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var isLoading = state === AsyncStatePhase.LOADING;
  var user = useMemo(function () {
    var _ref2 = value || {
      user: {}
    },
        user = _ref2.user;

    var _id = user._id,
        name = user.name,
        username = user.username,
        _user$roles = user.roles,
        roles = _user$roles === void 0 ? [] : _user$roles,
        statusText = user.statusText,
        bio = user.bio,
        utcOffset = user.utcOffset,
        lastLogin = user.lastLogin,
        nickname = user.nickname,
        canViewAllInfo = user.canViewAllInfo;
    return {
      _id: _id,
      name: showRealNames && name ? name : username,
      username: username,
      lastLogin: lastLogin,
      roles: roles && getRoles(roles).map(function (role, index) {
        return /*#__PURE__*/React.createElement(UserCard.Role, {
          key: index
        }, role);
      }),
      bio: bio,
      canViewAllInfo: canViewAllInfo,
      phone: user.phone,
      customFields: user.customFields,
      verified: getUserEmailVerified(user),
      email: getUserEmailAddress(user),
      utcOffset: utcOffset,
      createdAt: user.createdAt,
      status: /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: _id
      }),
      customStatus: statusText,
      nickname: nickname
    };
  }, [value, showRealNames, getRoles]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Back, {
    onClick: onClickBack
  }), !onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "user"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('User_Info')), onClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClose
  })), isLoading && /*#__PURE__*/React.createElement(VerticalBar.Content, null, /*#__PURE__*/React.createElement(FormSkeleton, null)), error && /*#__PURE__*/React.createElement(VerticalBar.Content, null, /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, t('User_not_found'))), !isLoading && showUserWebRTC && /*#__PURE__*/React.createElement(UserWebRTCWithData, _extends({
    rid: openedRoom,
    peerName: user === null || user === void 0 ? void 0 : user.name
  }, props)), !isLoading && !error && !showUserWebRTC && /*#__PURE__*/React.createElement(UserInfo, _extends({}, user, {
    data: user,
    actions: /*#__PURE__*/React.createElement(UserActions, {
      user: user,
      rid: rid,
      backToList: onClickBack
    })
  }, props, {
    p: "x24"
  })));
}

module.exportDefault(UserInfoWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/40d78de634862245d09247e400dab519d57b14ab.map

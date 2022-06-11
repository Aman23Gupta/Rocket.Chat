function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserInfoWithData.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["uid", "username", "tabBar", "rid", "onClickClose", "onClose", "video", "onClickBack"];

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
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let getUserEmailAddress;
module.link("../../../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 2);
let FormSkeleton;
module.link("../../../../components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 3);
let UserCard;
module.link("../../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 4);
let ReactiveUserStatus;
module.link("../../../../components/UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 5);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 6);
let useRolesDescription;
module.link("../../../../contexts/AuthorizationContext", {
  useRolesDescription(v) {
    useRolesDescription = v;
  }

}, 7);
let useSession;
module.link("../../../../contexts/SessionContext", {
  useSession(v) {
    useSession = v;
  }

}, 8);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 9);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 11);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 12);
let getUserEmailVerified;
module.link("../../../../lib/utils/getUserEmailVerified", {
  getUserEmailVerified(v) {
    getUserEmailVerified = v;
  }

}, 13);
let useWebRTC;
module.link("../../hooks/useWebRTC", {
  useWebRTC(v) {
    useWebRTC = v;
  }

}, 14);
let UserInfo;
module.link("./UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 15);
let UserWebRTCWithData;
module.link("./UserWebRTC", {
  default(v) {
    UserWebRTCWithData = v;
  }

}, 16);
let UserActions;
module.link("./actions/UserActions", {
  default(v) {
    UserActions = v;
  }

}, 17);

function UserInfoWithData(_ref) {
  let {
    uid,
    username,
    tabBar,
    rid,
    onClickClose,
    onClose = onClickClose,
    video,
    onClickBack
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const showRealNames = useSetting('UI_Use_Real_Name');
  const getRoles = useRolesDescription();
  const openedRoom = useSession('openedRoom');
  const {
    showUserWebRTC
  } = useWebRTC(openedRoom);
  const {
    value,
    phase: state,
    error
  } = useEndpointData('users.info', useMemo(() => _objectSpread(_objectSpread({}, uid && {
    userId: uid
  }), username && {
    username
  }), [uid, username]));
  const isLoading = state === AsyncStatePhase.LOADING;
  const user = useMemo(() => {
    const {
      user
    } = value || {
      user: {}
    };
    const {
      _id,
      name,
      username,
      roles = [],
      statusText,
      bio,
      utcOffset,
      lastLogin,
      nickname,
      canViewAllInfo
    } = user;
    return {
      _id,
      name: showRealNames && name ? name : username,
      username,
      lastLogin,
      roles: roles && getRoles(roles).map((role, index) => /*#__PURE__*/React.createElement(UserCard.Role, {
        key: index
      }, role)),
      bio,
      canViewAllInfo,
      phone: user.phone,
      customFields: user.customFields,
      verified: getUserEmailVerified(user),
      email: getUserEmailAddress(user),
      utcOffset,
      createdAt: user.createdAt,
      status: /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: _id
      }),
      customStatus: statusText,
      nickname
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/3e066a432c1e0eb7d61fb687b4c42c68bbf6dd67.map

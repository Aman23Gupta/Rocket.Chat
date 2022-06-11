function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserInfo.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["username", "bio", "canViewAllInfo", "email", "verified", "showRealNames", "status", "phone", "customStatus", "roles", "lastLogin", "createdAt", "utcOffset", "customFields", "name", "data", "nickname", "actions"];

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
let Box, Margins, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let MarkdownText;
module.link("../../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let UTCClock;
module.link("../../../../components/UTCClock", {
  default(v) {
    UTCClock = v;
  }

}, 3);
let UserCard;
module.link("../../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 4);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 6);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useTimeAgo;
module.link("../../../../hooks/useTimeAgo", {
  useTimeAgo(v) {
    useTimeAgo = v;
  }

}, 8);
let InfoPanel;
module.link("../../../InfoPanel", {
  default(v) {
    InfoPanel = v;
  }

}, 9);
let Avatar;
module.link("./Avatar", {
  default(v) {
    Avatar = v;
  }

}, 10);

function UserInfo(_ref) {
  let {
    username,
    bio,
    canViewAllInfo,
    email,
    verified,
    showRealNames,
    status,
    phone,
    customStatus,
    roles = [],
    lastLogin,
    createdAt,
    utcOffset,
    customFields = [],
    name,
    data,
    nickname,
    actions
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const customFieldsToShowSetting = useSetting('Accounts_CustomFieldsToShowInUserInfo');
  let customFieldsToShowObj;

  try {
    customFieldsToShowObj = JSON.parse(customFieldsToShowSetting);
  } catch (error) {
    customFieldsToShowObj = undefined;
  }

  const customFieldsToShow = customFieldsToShowObj ? Object.values(customFieldsToShowObj).map(value => {
    const role = Object.values(value);
    const roleNameToShow = Object.keys(value);
    const customField = {};
    customField[roleNameToShow] = customFields[role];
    return customField;
  }) : [];
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    p: "x24"
  }, props), /*#__PURE__*/React.createElement(InfoPanel, null, /*#__PURE__*/React.createElement(InfoPanel.Avatar, null, /*#__PURE__*/React.createElement(Avatar, {
    size: 'x332',
    username: username,
    etag: data === null || data === void 0 ? void 0 : data.avatarETag
  })), actions && /*#__PURE__*/React.createElement(InfoPanel.Section, null, actions), /*#__PURE__*/React.createElement(InfoPanel.Section, null, /*#__PURE__*/React.createElement(InfoPanel.Title, {
    title: showRealNames && name || username || name,
    icon: status
  }), /*#__PURE__*/React.createElement(InfoPanel.Text, null, /*#__PURE__*/React.createElement(MarkdownText, {
    content: customStatus,
    parseEmoji: true,
    variant: "inline"
  }))), /*#__PURE__*/React.createElement(InfoPanel.Section, null, roles.length !== 0 && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Roles')), /*#__PURE__*/React.createElement(UserCard.Roles, null, roles)), Number.isInteger(utcOffset) && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Local_Time')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, /*#__PURE__*/React.createElement(UTCClock, {
    utcOffset: utcOffset
  }))), username && username !== name && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Username')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, username)), canViewAllInfo && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Last_login')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, lastLogin ? timeAgo(lastLogin) : t('Never'))), name && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Full_Name')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, name)), nickname && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Nickname')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, nickname)), bio && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Bio')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    withTruncatedText: false
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: bio
  }))), phone && /*#__PURE__*/React.createElement(InfoPanel.Field, null, ' ', /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Phone')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "a",
    withTruncatedText: true,
    href: "tel:".concat(phone)
  }, phone))), email && /*#__PURE__*/React.createElement(InfoPanel.Field, null, ' ', /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Email')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "a",
    withTruncatedText: true,
    href: "mailto:".concat(email)
  }, email), /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, verified && /*#__PURE__*/React.createElement(Tag, {
    variant: "primary"
  }, t('Verified')), verified || /*#__PURE__*/React.createElement(Tag, {
    disabled: true
  }, t('Not_verified'))))), customFieldsToShow.map(customField => Object.values(customField)[0] ? /*#__PURE__*/React.createElement(InfoPanel.Field, {
    key: Object.keys(customField)[0]
  }, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t(Object.keys(customField)[0])), /*#__PURE__*/React.createElement(InfoPanel.Text, null, /*#__PURE__*/React.createElement(MarkdownText, {
    content: Object.values(customField)[0],
    variant: "inline"
  }))) : null), createdAt && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Created_at')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, timeAgo(createdAt))))));
}

module.exportDefault( /*#__PURE__*/memo(UserInfo));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/14841c78ad75bca22ea86eb7fb41d579ef92d951.map

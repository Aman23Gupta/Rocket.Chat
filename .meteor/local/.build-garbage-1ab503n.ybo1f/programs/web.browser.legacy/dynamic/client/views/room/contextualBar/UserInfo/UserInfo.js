function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserInfo.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["username", "bio", "canViewAllInfo", "email", "verified", "showRealNames", "status", "phone", "customStatus", "roles", "lastLogin", "createdAt", "utcOffset", "customFields", "name", "data", "nickname", "actions"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Margins, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var MarkdownText;
module.link("../../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var UTCClock;
module.link("../../../../components/UTCClock", {
  "default": function (v) {
    UTCClock = v;
  }
}, 3);
var UserCard;
module.link("../../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 4);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useTimeAgo;
module.link("../../../../hooks/useTimeAgo", {
  useTimeAgo: function (v) {
    useTimeAgo = v;
  }
}, 8);
var InfoPanel;
module.link("../../../InfoPanel", {
  "default": function (v) {
    InfoPanel = v;
  }
}, 9);
var Avatar;
module.link("./Avatar", {
  "default": function (v) {
    Avatar = v;
  }
}, 10);

function UserInfo(_ref) {
  var username = _ref.username,
      bio = _ref.bio,
      canViewAllInfo = _ref.canViewAllInfo,
      email = _ref.email,
      verified = _ref.verified,
      showRealNames = _ref.showRealNames,
      status = _ref.status,
      phone = _ref.phone,
      customStatus = _ref.customStatus,
      _ref$roles = _ref.roles,
      roles = _ref$roles === void 0 ? [] : _ref$roles,
      lastLogin = _ref.lastLogin,
      createdAt = _ref.createdAt,
      utcOffset = _ref.utcOffset,
      _ref$customFields = _ref.customFields,
      customFields = _ref$customFields === void 0 ? [] : _ref$customFields,
      name = _ref.name,
      data = _ref.data,
      nickname = _ref.nickname,
      actions = _ref.actions,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var timeAgo = useTimeAgo();
  var customFieldsToShowSetting = useSetting('Accounts_CustomFieldsToShowInUserInfo');
  var customFieldsToShowObj;

  try {
    customFieldsToShowObj = JSON.parse(customFieldsToShowSetting);
  } catch (error) {
    customFieldsToShowObj = undefined;
  }

  var customFieldsToShow = customFieldsToShowObj ? Object.values(customFieldsToShowObj).map(function (value) {
    var role = Object.values(value);
    var roleNameToShow = Object.keys(value);
    var customField = {};
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
    href: "tel:" + phone
  }, phone))), email && /*#__PURE__*/React.createElement(InfoPanel.Field, null, ' ', /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Email')), /*#__PURE__*/React.createElement(InfoPanel.Text, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "a",
    withTruncatedText: true,
    href: "mailto:" + email
  }, email), /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, verified && /*#__PURE__*/React.createElement(Tag, {
    variant: "primary"
  }, t('Verified')), verified || /*#__PURE__*/React.createElement(Tag, {
    disabled: true
  }, t('Not_verified'))))), customFieldsToShow.map(function (customField) {
    return Object.values(customField)[0] ? /*#__PURE__*/React.createElement(InfoPanel.Field, {
      key: Object.keys(customField)[0]
    }, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t(Object.keys(customField)[0])), /*#__PURE__*/React.createElement(InfoPanel.Text, null, /*#__PURE__*/React.createElement(MarkdownText, {
      content: Object.values(customField)[0],
      variant: "inline"
    }))) : null;
  }), createdAt && /*#__PURE__*/React.createElement(InfoPanel.Field, null, /*#__PURE__*/React.createElement(InfoPanel.Label, null, t('Created_at')), /*#__PURE__*/React.createElement(InfoPanel.Text, null, timeAgo(createdAt))))));
}

module.exportDefault( /*#__PURE__*/memo(UserInfo));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/10c754df2efe2bd48a5aa508855fa6d471727628.map

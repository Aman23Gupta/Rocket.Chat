function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/UserDropdown.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Margins, Option;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter: function (v) {
    FlowRouter = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var AccountBox, SideNav;
module.link("../../../app/ui-utils/client", {
  AccountBox: function (v) {
    AccountBox = v;
  },
  SideNav: function (v) {
    SideNav = v;
  }
}, 4);
var userStatus;
module.link("../../../app/user-status/client", {
  userStatus: function (v) {
    userStatus = v;
  }
}, 5);
var UserStatusEnum;
module.link("../../../definition/UserStatus", {
  UserStatus: function (v) {
    UserStatusEnum = v;
  }
}, 6);
var callbacks;
module.link("../../../lib/callbacks", {
  callbacks: function (v) {
    callbacks = v;
  }
}, 7);
var MarkdownText;
module.link("../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 8);
var UserStatus;
module.link("../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 9);
var UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 10);
var useAtLeastOnePermission;
module.link("../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 11);
var useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 12);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 13);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 14);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 15);
var useLogout;
module.link("../../contexts/UserContext", {
  useLogout: function (v) {
    useLogout = v;
  }
}, 16);
var useReactiveValue;
module.link("../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 17);
var useUserDisplayName;
module.link("../../hooks/useUserDisplayName", {
  useUserDisplayName: function (v) {
    useUserDisplayName = v;
  }
}, 18);
var imperativeModal;
module.link("../../lib/imperativeModal", {
  imperativeModal: function (v) {
    imperativeModal = v;
  }
}, 19);
var EditStatusModal;
module.link("./EditStatusModal", {
  "default": function (v) {
    EditStatusModal = v;
  }
}, 20);
var ADMIN_PERMISSIONS = ['view-logs', 'manage-emoji', 'manage-sounds', 'view-statistics', 'manage-oauth-apps', 'view-privileged-setting', 'manage-selected-settings', 'view-room-administration', 'view-user-administration', 'access-setting-permissions', 'manage-outgoing-integrations', 'manage-incoming-integrations', 'manage-own-outgoing-integrations', 'manage-own-incoming-integrations', 'view-engagement-dashboard'];

var isDefaultStatus = function (id) {
  return Object.values(UserStatusEnum).includes(id);
};

var isDefaultStatusName = function (_name, id) {
  return isDefaultStatus(id);
};

var setStatus = function (status) {
  AccountBox.setStatus(status.statusType, !isDefaultStatus(status.id) ? status.name : '');
  callbacks.run('userStatusManuallySet', status);
};

var getItems = function () {
  return AccountBox.getItems();
};

var translateStatusName = function (t, status) {
  if (isDefaultStatusName(status.name, status.id)) {
    return t(status.name);
  }

  return status.name;
};

var UserDropdown = function (_ref) {
  var user = _ref.user,
      onClose = _ref.onClose;
  var t = useTranslation();
  var accountRoute = useRoute('account');
  var adminRoute = useRoute('admin');
  var logout = useLogout();

  var _useLayout = useLayout(),
      sidebar = _useLayout.sidebar,
      isMobile = _useLayout.isMobile;

  var username = user.username,
      avatarETag = user.avatarETag,
      status = user.status,
      statusText = user.statusText;
  var displayName = useUserDisplayName(user);
  var filterInvisibleStatus = !useSetting('Accounts_AllowInvisibleStatusOption') ? function (status) {
    return status.name !== 'invisible';
  } : function () {
    return true;
  };
  var showAdmin = useAtLeastOnePermission(ADMIN_PERMISSIONS);
  var handleCustomStatus = useMutableCallback(function (e) {
    e.preventDefault();
    imperativeModal.open({
      component: EditStatusModal,
      props: {
        userStatus: status,
        userStatusText: statusText,
        onClose: imperativeModal.close
      }
    });
    onClose();
  });
  var handleMyAccount = useMutableCallback(function () {
    accountRoute.push({});
    onClose();
  });
  var handleAdmin = useMutableCallback(function () {
    adminRoute.push({
      group: 'info'
    });
    sidebar.toggle();
    onClose();
  });
  var handleLogout = useMutableCallback(function () {
    logout();
    onClose();
  });
  var accountBoxItems = useReactiveValue(getItems);
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    w: !isMobile ? '244px' : undefined
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Box, {
    mie: "x4",
    mis: "x16"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x36",
    username: username || '',
    etag: avatarETag
  })), /*#__PURE__*/React.createElement(Box, {
    mie: "x8",
    mis: "x4",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    fontScale: "p2",
    mb: "neg-x4",
    flexGrow: 1,
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    w: "full",
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x4"
  }, /*#__PURE__*/React.createElement(UserStatus, {
    status: status
  }), /*#__PURE__*/React.createElement(Box, {
    is: "span",
    withTruncatedText: true,
    display: "inline-block"
  }, displayName))), /*#__PURE__*/React.createElement(Box, {
    color: "hint"
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    withTruncatedText: true,
    parseEmoji: true,
    content: statusText || t(status || 'offline'),
    variant: "inlineWithoutBreaks"
  })))), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(Box, {
    pi: "x16",
    fontScale: "c1",
    textTransform: "uppercase"
  }, t('Status')), Object.values(userStatus.list).filter(filterInvisibleStatus).map(function (status, i) {
    var name = status.localizeName ? translateStatusName(t, status) : status.name;
    var modifier = status.statusType || user.status;
    return /*#__PURE__*/React.createElement(Option, {
      key: i,
      onClick: function () {
        setStatus(status);
        onClose();
      }
    }, /*#__PURE__*/React.createElement(Option.Column, null, /*#__PURE__*/React.createElement(UserStatus, {
      status: modifier
    })), /*#__PURE__*/React.createElement(Option.Content, null, /*#__PURE__*/React.createElement(MarkdownText, {
      content: name,
      parseEmoji: true,
      variant: "inline"
    })));
  }), /*#__PURE__*/React.createElement(Option, {
    icon: "emoji",
    label: t('Custom_Status') + "...",
    onClick: handleCustomStatus
  }), (accountBoxItems.length || showAdmin) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Option.Divider, null), showAdmin && /*#__PURE__*/React.createElement(Option, {
    icon: 'customize',
    label: t('Administration'),
    onClick: handleAdmin
  }), accountBoxItems.map(function (item, i) {
    var action = function () {
      if (item.href) {
        FlowRouter.go(item.href);
        onClose();
      }

      if (item.sideNav) {
        SideNav.setFlex(item.sideNav);
        SideNav.openFlex();
        onClose();
      }
    };

    return /*#__PURE__*/React.createElement(Option, {
      icon: item.icon,
      label: t(item.name),
      onClick: item.href || item.sideNav ? action : undefined,
      key: i
    });
  })), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(Option, {
    icon: "user",
    label: t('My_Account'),
    onClick: handleMyAccount
  }), /*#__PURE__*/React.createElement(Option, {
    icon: "sign-out",
    label: t('Logout'),
    onClick: handleLogout
  }));
};

module.exportDefault(UserDropdown);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/c0d22ea5d64f318ad9a76af5fdd7f8ca15f1ad6e.map

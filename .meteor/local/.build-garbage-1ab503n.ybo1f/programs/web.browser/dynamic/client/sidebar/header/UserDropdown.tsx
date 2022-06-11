function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/UserDropdown.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins, Option;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let FlowRouter;
module.link("meteor/kadira:flow-router", {
  FlowRouter(v) {
    FlowRouter = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);
let AccountBox, SideNav;
module.link("../../../app/ui-utils/client", {
  AccountBox(v) {
    AccountBox = v;
  },

  SideNav(v) {
    SideNav = v;
  }

}, 4);
let userStatus;
module.link("../../../app/user-status/client", {
  userStatus(v) {
    userStatus = v;
  }

}, 5);
let UserStatusEnum;
module.link("../../../definition/UserStatus", {
  UserStatus(v) {
    UserStatusEnum = v;
  }

}, 6);
let callbacks;
module.link("../../../lib/callbacks", {
  callbacks(v) {
    callbacks = v;
  }

}, 7);
let MarkdownText;
module.link("../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 8);
let UserStatus;
module.link("../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 9);
let UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 10);
let useAtLeastOnePermission;
module.link("../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 11);
let useLayout;
module.link("../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 12);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 13);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 14);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 15);
let useLogout;
module.link("../../contexts/UserContext", {
  useLogout(v) {
    useLogout = v;
  }

}, 16);
let useReactiveValue;
module.link("../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 17);
let useUserDisplayName;
module.link("../../hooks/useUserDisplayName", {
  useUserDisplayName(v) {
    useUserDisplayName = v;
  }

}, 18);
let imperativeModal;
module.link("../../lib/imperativeModal", {
  imperativeModal(v) {
    imperativeModal = v;
  }

}, 19);
let EditStatusModal;
module.link("./EditStatusModal", {
  default(v) {
    EditStatusModal = v;
  }

}, 20);
const ADMIN_PERMISSIONS = ['view-logs', 'manage-emoji', 'manage-sounds', 'view-statistics', 'manage-oauth-apps', 'view-privileged-setting', 'manage-selected-settings', 'view-room-administration', 'view-user-administration', 'access-setting-permissions', 'manage-outgoing-integrations', 'manage-incoming-integrations', 'manage-own-outgoing-integrations', 'manage-own-incoming-integrations', 'view-engagement-dashboard'];

const isDefaultStatus = id => Object.values(UserStatusEnum).includes(id);

const isDefaultStatusName = (_name, id) => isDefaultStatus(id);

const setStatus = status => {
  AccountBox.setStatus(status.statusType, !isDefaultStatus(status.id) ? status.name : '');
  callbacks.run('userStatusManuallySet', status);
};

const getItems = () => AccountBox.getItems();

const translateStatusName = (t, status) => {
  if (isDefaultStatusName(status.name, status.id)) {
    return t(status.name);
  }

  return status.name;
};

const UserDropdown = _ref => {
  let {
    user,
    onClose
  } = _ref;
  const t = useTranslation();
  const accountRoute = useRoute('account');
  const adminRoute = useRoute('admin');
  const logout = useLogout();
  const {
    sidebar,
    isMobile
  } = useLayout();
  const {
    username,
    avatarETag,
    status,
    statusText
  } = user;
  const displayName = useUserDisplayName(user);
  const filterInvisibleStatus = !useSetting('Accounts_AllowInvisibleStatusOption') ? status => status.name !== 'invisible' : () => true;
  const showAdmin = useAtLeastOnePermission(ADMIN_PERMISSIONS);
  const handleCustomStatus = useMutableCallback(e => {
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
  const handleMyAccount = useMutableCallback(() => {
    accountRoute.push({});
    onClose();
  });
  const handleAdmin = useMutableCallback(() => {
    adminRoute.push({
      group: 'info'
    });
    sidebar.toggle();
    onClose();
  });
  const handleLogout = useMutableCallback(() => {
    logout();
    onClose();
  });
  const accountBoxItems = useReactiveValue(getItems);
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
  }, t('Status')), Object.values(userStatus.list).filter(filterInvisibleStatus).map((status, i) => {
    const name = status.localizeName ? translateStatusName(t, status) : status.name;
    const modifier = status.statusType || user.status;
    return /*#__PURE__*/React.createElement(Option, {
      key: i,
      onClick: () => {
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
    label: "".concat(t('Custom_Status'), "..."),
    onClick: handleCustomStatus
  }), (accountBoxItems.length || showAdmin) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Option.Divider, null), showAdmin && /*#__PURE__*/React.createElement(Option, {
    icon: 'customize',
    label: t('Administration'),
    onClick: handleAdmin
  }), accountBoxItems.map((item, i) => {
    const action = () => {
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
//# sourceMappingURL=/dynamic/client/sidebar/header/b92a490f3118b1519dbe8d7d41d642f367edc4eb.map

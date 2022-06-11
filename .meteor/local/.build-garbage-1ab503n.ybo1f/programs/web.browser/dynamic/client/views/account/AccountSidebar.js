function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountSidebar.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let menu, SideNav;
module.link("../../../app/ui-utils/client", {
  menu(v) {
    menu = v;
  },

  SideNav(v) {
    SideNav = v;
  }

}, 2);
let Sidebar;
module.link("../../components/Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);
let useRoutePath, useCurrentRoute;
module.link("../../contexts/RouterContext", {
  useRoutePath(v) {
    useRoutePath = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let isLayoutEmbedded;
module.link("../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded(v) {
    isLayoutEmbedded = v;
  }

}, 6);
let SettingsProvider;
module.link("../../providers/SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 7);
let itemsSubscription;
module.link("./sidebarItems", {
  itemsSubscription(v) {
    itemsSubscription = v;
  }

}, 8);

const AccountSidebar = () => {
  const t = useTranslation();
  const items = useSubscription(itemsSubscription);
  const closeFlex = useCallback(() => {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);
  const [currentRouteName, ...rest] = useCurrentRoute();
  const currentPath = useRoutePath(currentRouteName, ...rest);
  useEffect(() => {
    if (currentRouteName !== 'account') {
      SideNav.closeFlex();
    }
  }, [currentRouteName]); // TODO: uplift this provider

  return /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(Sidebar.Header, {
    onClose: closeFlex,
    title: t('Account')
  }), /*#__PURE__*/React.createElement(Sidebar.Content, null, /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: items,
    currentPath: currentPath
  }))));
};

module.exportDefault( /*#__PURE__*/memo(AccountSidebar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/d406b90736ad245dc8a12a20d33d4e9c59afde79.map

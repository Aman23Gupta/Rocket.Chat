function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/sidebar/OmnichannelSidebar.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useCallback, useEffect, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let menu, SideNav;
module.link("../../../../app/ui-utils/client", {
  menu(v) {
    menu = v;
  },

  SideNav(v) {
    SideNav = v;
  }

}, 2);
let Sidebar;
module.link("../../../components/Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);
let useRoutePath, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoutePath(v) {
    useRoutePath = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let isLayoutEmbedded;
module.link("../../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded(v) {
    isLayoutEmbedded = v;
  }

}, 6);
let SettingsProvider;
module.link("../../../providers/SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 7);
let itemsSubscription;
module.link("../sidebarItems", {
  itemsSubscription(v) {
    itemsSubscription = v;
  }

}, 8);

const OmnichannelSidebar = () => {
  const items = useSubscription(itemsSubscription);
  const t = useTranslation();
  const closeOmnichannelFlex = useCallback(() => {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);
  const currentRoute = useCurrentRoute();
  const [currentRouteName, currentRouteParams, currentQueryStringParams, currentRouteGroupName] = currentRoute;
  const currentPath = useRoutePath(currentRouteName !== null && currentRouteName !== void 0 ? currentRouteName : '', currentRouteParams, currentQueryStringParams);
  useEffect(() => {
    if (currentRouteGroupName !== 'omnichannel') {
      SideNav.closeFlex();
    }
  }, [currentRouteGroupName]);
  return /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(Sidebar.Header, {
    onClose: closeOmnichannelFlex,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, t('Omnichannel'))
  }), /*#__PURE__*/React.createElement(Sidebar.Content, null, /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: items,
    currentPath: currentPath
  }))));
};

module.exportDefault( /*#__PURE__*/memo(OmnichannelSidebar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/sidebar/5d48e6137997eebc379e9839ec983400e2a6341f.map

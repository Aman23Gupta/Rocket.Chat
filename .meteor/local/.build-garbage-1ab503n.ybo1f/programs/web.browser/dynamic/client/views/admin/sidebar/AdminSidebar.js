function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebar.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useCallback, useMemo, useEffect, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let menu, SideNav;
module.link("../../../../app/ui-utils/client", {
  menu(v) {
    menu = v;
  },

  SideNav(v) {
    SideNav = v;
  }

}, 1);
let PlanTag;
module.link("../../../components/PlanTag", {
  default(v) {
    PlanTag = v;
  }

}, 2);
let Sidebar;
module.link("../../../components/Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);
let useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 4);
let useRoutePath, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoutePath(v) {
    useRoutePath = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let isLayoutEmbedded;
module.link("../../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded(v) {
    isLayoutEmbedded = v;
  }

}, 7);
let SettingsProvider;
module.link("../../../providers/SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 8);
let AdminSidebarPages;
module.link("./AdminSidebarPages", {
  default(v) {
    AdminSidebarPages = v;
  }

}, 9);
let AdminSidebarSettings;
module.link("./AdminSidebarSettings", {
  default(v) {
    AdminSidebarSettings = v;
  }

}, 10);

function AdminSidebar() {
  const t = useTranslation();
  const canViewSettings = useAtLeastOnePermission(useMemo(() => ['view-privileged-setting', 'edit-privileged-setting', 'manage-selected-settings'], []));
  const closeAdminFlex = useCallback(() => {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);
  const currentRoute = useCurrentRoute();
  const currentPath = useRoutePath(...currentRoute);
  const [,,, currentRouteGroupName] = currentRoute;
  useEffect(() => {
    if (currentRouteGroupName !== 'admin') {
      SideNav.toggleFlex(-1);
    }
  }, [currentRouteGroupName]); // TODO: uplift this provider

  return /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(Sidebar, null, /*#__PURE__*/React.createElement(Sidebar.Header, {
    onClose: closeAdminFlex,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, t('Administration'), " ", /*#__PURE__*/React.createElement(PlanTag, null))
  }), /*#__PURE__*/React.createElement(Sidebar.Content, null, /*#__PURE__*/React.createElement(AdminSidebarPages, {
    currentPath: currentPath
  }), canViewSettings && /*#__PURE__*/React.createElement(AdminSidebarSettings, {
    currentPath: currentPath
  }))));
}

module.exportDefault( /*#__PURE__*/memo(AdminSidebar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/cecf7ca4aea0c44fa8dbce192abd911dc4d7d11f.map

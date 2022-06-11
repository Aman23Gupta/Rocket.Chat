function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebar.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);
var React, useCallback, useMemo, useEffect, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var menu, SideNav;
module.link("../../../../app/ui-utils/client", {
  menu: function (v) {
    menu = v;
  },
  SideNav: function (v) {
    SideNav = v;
  }
}, 1);
var PlanTag;
module.link("../../../components/PlanTag", {
  "default": function (v) {
    PlanTag = v;
  }
}, 2);
var Sidebar;
module.link("../../../components/Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);
var useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 4);
var useRoutePath, useCurrentRoute;
module.link("../../../contexts/RouterContext", {
  useRoutePath: function (v) {
    useRoutePath = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var isLayoutEmbedded;
module.link("../../../lib/utils/isLayoutEmbedded", {
  isLayoutEmbedded: function (v) {
    isLayoutEmbedded = v;
  }
}, 7);
var SettingsProvider;
module.link("../../../providers/SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 8);
var AdminSidebarPages;
module.link("./AdminSidebarPages", {
  "default": function (v) {
    AdminSidebarPages = v;
  }
}, 9);
var AdminSidebarSettings;
module.link("./AdminSidebarSettings", {
  "default": function (v) {
    AdminSidebarSettings = v;
  }
}, 10);

function AdminSidebar() {
  var t = useTranslation();
  var canViewSettings = useAtLeastOnePermission(useMemo(function () {
    return ['view-privileged-setting', 'edit-privileged-setting', 'manage-selected-settings'];
  }, []));
  var closeAdminFlex = useCallback(function () {
    if (isLayoutEmbedded()) {
      menu.close();
      return;
    }

    SideNav.closeFlex();
  }, []);
  var currentRoute = useCurrentRoute();
  var currentPath = useRoutePath.apply(void 0, _toConsumableArray(currentRoute));

  var _currentRoute = _slicedToArray(currentRoute, 4),
      currentRouteGroupName = _currentRoute[3];

  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/8caef104a6dcc60973c80764ec87c98c69fbc23b.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountRoute.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav: function (v) {
    SideNav = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 3);
var useRouteParameter, useRoute, useCurrentRoute;
module.link("../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  },
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  }
}, 4);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var AccountIntegrationsPage;
module.link("./AccountIntegrationsPage", {
  "default": function (v) {
    AccountIntegrationsPage = v;
  }
}, 6);
var AccountProfilePage;
module.link("./AccountProfilePage", {
  "default": function (v) {
    AccountProfilePage = v;
  }
}, 7);
var AccountPreferencesPage;
module.link("./preferences/AccountPreferencesPage", {
  "default": function (v) {
    AccountPreferencesPage = v;
  }
}, 8);
var AccountSecurityPage;
module.link("./security/AccountSecurityPage", {
  "default": function (v) {
    AccountSecurityPage = v;
  }
}, 9);
var AccountTokensPage;
module.link("./tokens/AccountTokensPage", {
  "default": function (v) {
    AccountTokensPage = v;
  }
}, 10);
module.link("./sidebarItems");

var AccountRoute = function () {
  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      routeName = _useCurrentRoute2[0];

  var page = useRouteParameter('group');
  var router = useRoute('account');
  useEffect(function () {
    if (routeName !== 'account') {
      return;
    }

    !page && router.push({
      group: 'profile'
    });
  }, [routeName, page, router]);
  useEffect(function () {
    SideNav.setFlex('accountFlex');
    SideNav.openFlex();
  });
  var webdavEnabled = useSetting('Webdav_Integration_Enabled');
  var canCreateTokens = usePermission('create-personal-access-tokens');

  if (page === 'profile') {
    return /*#__PURE__*/React.createElement(AccountProfilePage, null);
  }

  if (page === 'preferences') {
    return /*#__PURE__*/React.createElement(AccountPreferencesPage, null);
  }

  if (page === 'security') {
    return /*#__PURE__*/React.createElement(AccountSecurityPage, null);
  }

  if (page === 'integrations') {
    if (!webdavEnabled) {
      return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
    }

    return /*#__PURE__*/React.createElement(AccountIntegrationsPage, null);
  }

  if (page === 'tokens') {
    if (!canCreateTokens) {
      return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
    }

    return /*#__PURE__*/React.createElement(AccountTokensPage, null);
  }

  return null;
};

module.exportDefault(AccountRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/63cb35e985b3befb3d0d88839ed1f22cb7c39b12.map

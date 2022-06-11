function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountRoute.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let SideNav;
module.link("../../../app/ui-utils/client", {
  SideNav(v) {
    SideNav = v;
  }

}, 1);
let NotAuthorizedPage;
module.link("../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 2);
let usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 3);
let useRouteParameter, useRoute, useCurrentRoute;
module.link("../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  },

  useCurrentRoute(v) {
    useCurrentRoute = v;
  }

}, 4);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let AccountIntegrationsPage;
module.link("./AccountIntegrationsPage", {
  default(v) {
    AccountIntegrationsPage = v;
  }

}, 6);
let AccountProfilePage;
module.link("./AccountProfilePage", {
  default(v) {
    AccountProfilePage = v;
  }

}, 7);
let AccountPreferencesPage;
module.link("./preferences/AccountPreferencesPage", {
  default(v) {
    AccountPreferencesPage = v;
  }

}, 8);
let AccountSecurityPage;
module.link("./security/AccountSecurityPage", {
  default(v) {
    AccountSecurityPage = v;
  }

}, 9);
let AccountTokensPage;
module.link("./tokens/AccountTokensPage", {
  default(v) {
    AccountTokensPage = v;
  }

}, 10);
module.link("./sidebarItems");

const AccountRoute = () => {
  const [routeName] = useCurrentRoute();
  const page = useRouteParameter('group');
  const router = useRoute('account');
  useEffect(() => {
    if (routeName !== 'account') {
      return;
    }

    !page && router.push({
      group: 'profile'
    });
  }, [routeName, page, router]);
  useEffect(() => {
    SideNav.setFlex('accountFlex');
    SideNav.openFlex();
  });
  const webdavEnabled = useSetting('Webdav_Integration_Enabled');
  const canCreateTokens = usePermission('create-personal-access-tokens');

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
//# sourceMappingURL=/dynamic/client/views/account/c9f4e171ffcdb905d8f43ddf85cff43f62771ad4.map

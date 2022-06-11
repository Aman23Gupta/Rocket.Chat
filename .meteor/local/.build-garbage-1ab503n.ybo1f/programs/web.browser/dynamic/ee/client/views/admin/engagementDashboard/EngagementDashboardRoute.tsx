function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/EngagementDashboardRoute.tsx                                              //
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
let NotAuthorizedPage;
module.link("../../../../../client/components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let useCurrentRoute, useRoute;
module.link("../../../../../client/contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let EngagementDashboardPage;
module.link("./EngagementDashboardPage", {
  default(v) {
    EngagementDashboardPage = v;
  }

}, 4);

const isValidTab = tab => typeof tab === 'string' && ['users', 'messages', 'channels'].includes(tab);

const EngagementDashboardRoute = () => {
  const canViewEngagementDashboard = usePermission('view-engagement-dashboard');
  const engagementDashboardRoute = useRoute('engagement-dashboard');
  const [routeName, routeParams] = useCurrentRoute();
  const {
    tab
  } = routeParams !== null && routeParams !== void 0 ? routeParams : {};
  useEffect(() => {
    if (routeName !== 'engagement-dashboard') {
      return;
    }

    if (!isValidTab(tab)) {
      engagementDashboardRoute.replace({
        tab: 'users'
      });
    }
  }, [routeName, engagementDashboardRoute, tab]);

  if (!isValidTab(tab)) {
    return null;
  }

  if (!canViewEngagementDashboard) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(EngagementDashboardPage, {
    tab: tab,
    onSelectTab: tab => engagementDashboardRoute.push({
      tab
    })
  });
};

module.exportDefault(EngagementDashboardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/8d0899180693710ce1137c10a291944c1b13c906.map

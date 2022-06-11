function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/EngagementDashboardRoute.tsx                                              //
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
var NotAuthorizedPage;
module.link("../../../../../client/components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var usePermission;
module.link("../../../../../client/contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var useCurrentRoute, useRoute;
module.link("../../../../../client/contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var EngagementDashboardPage;
module.link("./EngagementDashboardPage", {
  "default": function (v) {
    EngagementDashboardPage = v;
  }
}, 4);

var isValidTab = function (tab) {
  return typeof tab === 'string' && ['users', 'messages', 'channels'].includes(tab);
};

var EngagementDashboardRoute = function () {
  var canViewEngagementDashboard = usePermission('view-engagement-dashboard');
  var engagementDashboardRoute = useRoute('engagement-dashboard');

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 2),
      routeName = _useCurrentRoute2[0],
      routeParams = _useCurrentRoute2[1];

  var _ref = routeParams !== null && routeParams !== void 0 ? routeParams : {},
      tab = _ref.tab;

  useEffect(function () {
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
    onSelectTab: function (tab) {
      return engagementDashboardRoute.push({
        tab: tab
      });
    }
  });
};

module.exportDefault(EngagementDashboardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/51614b251694b2e718cd44670b902402ac9a43d3.map

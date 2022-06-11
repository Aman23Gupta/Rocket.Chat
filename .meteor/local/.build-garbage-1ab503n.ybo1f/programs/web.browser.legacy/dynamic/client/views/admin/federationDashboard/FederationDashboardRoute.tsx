function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/FederationDashboardRoute.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var useRole;
module.link("../../../contexts/AuthorizationContext", {
  useRole: function (v) {
    useRole = v;
  }
}, 2);
var FederationDashboardPage;
module.link("./FederationDashboardPage", {
  "default": function (v) {
    FederationDashboardPage = v;
  }
}, 3);

var FederationDashboardRoute = function () {
  var authorized = useRole('admin');

  if (!authorized) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(FederationDashboardPage, null);
};

module.exportDefault(FederationDashboardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/457b134d19f011cb6551ec5c14ce709e2667cff3.map

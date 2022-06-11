function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/FederationDashboardRoute.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let useRole;
module.link("../../../contexts/AuthorizationContext", {
  useRole(v) {
    useRole = v;
  }

}, 2);
let FederationDashboardPage;
module.link("./FederationDashboardPage", {
  default(v) {
    FederationDashboardPage = v;
  }

}, 3);

const FederationDashboardRoute = () => {
  const authorized = useRole('admin');

  if (!authorized) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(FederationDashboardPage, null);
};

module.exportDefault(FederationDashboardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/113f9b0ed7bf8a3e73d63b704929f9484e9480c6.map

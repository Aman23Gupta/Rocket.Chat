function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsRouter.js                                                                 //
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
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let PermissionsTable;
module.link("./PermissionsTable", {
  default(v) {
    PermissionsTable = v;
  }

}, 4);
let UsersInRole;
module.link("./UsersInRolePageContainer", {
  default(v) {
    UsersInRole = v;
  }

}, 5);

const PermissionsRouter = () => {
  const canViewPermission = usePermission('access-permissions');
  const canViewSettingPermission = usePermission('access-setting-permissions');
  const context = useRouteParameter('context');

  if (!canViewPermission && !canViewSettingPermission) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (context === 'users-in-role') {
    return /*#__PURE__*/React.createElement(UsersInRole, null);
  }

  return /*#__PURE__*/React.createElement(PermissionsTable, null);
};

module.exportDefault(PermissionsRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/6a54150a0011430a5dcf7a2f5d342896d0aa4bf3.map

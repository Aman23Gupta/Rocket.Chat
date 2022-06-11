function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/PermissionsRouter.js                                                                 //
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
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var PermissionsTable;
module.link("./PermissionsTable", {
  "default": function (v) {
    PermissionsTable = v;
  }
}, 4);
var UsersInRole;
module.link("./UsersInRolePageContainer", {
  "default": function (v) {
    UsersInRole = v;
  }
}, 5);

var PermissionsRouter = function () {
  var canViewPermission = usePermission('access-permissions');
  var canViewSettingPermission = usePermission('access-setting-permissions');
  var context = useRouteParameter('context');

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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/2b5498fd6e0cbc256b93f4700b245ef318fcd067.map

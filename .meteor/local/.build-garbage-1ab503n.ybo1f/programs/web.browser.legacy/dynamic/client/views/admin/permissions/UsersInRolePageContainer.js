function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRolePageContainer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 1);
var UsersInRolePage;
module.link("./UsersInRolePage", {
  "default": function (v) {
    UsersInRolePage = v;
  }
}, 2);
var useRole;
module.link("./useRole", {
  useRole: function (v) {
    useRole = v;
  }
}, 3);

var UsersInRolePageContainer = function () {
  var _id = useRouteParameter('_id');

  var role = useRole(_id);

  if (!role) {
    return null;
  }

  return /*#__PURE__*/React.createElement(UsersInRolePage, {
    data: role
  });
};

module.exportDefault(UsersInRolePageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/00df9d1ae3ea38cc158e461ada65191f0667c2e7.map

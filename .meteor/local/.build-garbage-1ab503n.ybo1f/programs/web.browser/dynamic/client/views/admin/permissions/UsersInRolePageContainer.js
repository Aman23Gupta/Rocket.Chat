function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRolePageContainer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 1);
let UsersInRolePage;
module.link("./UsersInRolePage", {
  default(v) {
    UsersInRolePage = v;
  }

}, 2);
let useRole;
module.link("./useRole", {
  useRole(v) {
    useRole = v;
  }

}, 3);

const UsersInRolePageContainer = () => {
  const _id = useRouteParameter('_id');

  const role = useRole(_id);

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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/39e810893920727d16e427247fe6e8c67d2037fe.map

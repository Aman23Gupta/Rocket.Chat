function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/CloudRoute.js                                                                              //
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
let CloudPage;
module.link("./CloudPage", {
  default(v) {
    CloudPage = v;
  }

}, 3);

function CloudRoute() {
  const canManageCloud = usePermission('manage-cloud');

  if (!canManageCloud) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(CloudPage, null);
}

module.exportDefault(CloudRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/f7132e96fd641136eb40de2f4d85c43dcba9a4ec.map

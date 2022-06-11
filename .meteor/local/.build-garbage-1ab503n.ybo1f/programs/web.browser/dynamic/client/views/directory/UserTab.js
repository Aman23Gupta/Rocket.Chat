function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/UserTab.js                                                                                   //
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
module.link("../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let UserTable;
module.link("./UserTable", {
  default(v) {
    UserTable = v;
  }

}, 3);

function UserTab(props) {
  const canViewOutsideRoom = usePermission('view-outside-room');
  const canViewDM = usePermission('view-d-room');

  if (canViewOutsideRoom && canViewDM) {
    return /*#__PURE__*/React.createElement(UserTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(UserTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/54f7c18c38de4c72d297113234e230e1f9656541.map

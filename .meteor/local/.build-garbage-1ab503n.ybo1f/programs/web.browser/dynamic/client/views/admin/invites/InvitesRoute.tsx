function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/invites/InvitesRoute.tsx                                                                         //
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
let InvitesPage;
module.link("./InvitesPage", {
  default(v) {
    InvitesPage = v;
  }

}, 3);

const InvitesRoute = () => {
  const canCreateInviteLinks = usePermission('create-invite-links');

  if (!canCreateInviteLinks) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(InvitesPage, null);
};

module.exportDefault(InvitesRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/invites/872bcdd5a99f45ead430cb6b9e5f96937e1ef0b7.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxRoute.js                                                                    //
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
var EmailInboxPage;
module.link("./EmailInboxPage", {
  "default": function (v) {
    EmailInboxPage = v;
  }
}, 3);

function EmailInboxRoute() {
  var canViewEmailInbox = usePermission('manage-email-inbox');

  if (!canViewEmailInbox) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(EmailInboxPage, null);
}

module.exportDefault(EmailInboxRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/5a99b73abf4fc34a662692f396d8b93811a57d1b.map

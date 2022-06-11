function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAppsRoute.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  "default": function () {
    return MailerRoute;
  }
});
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
var OAuthAppsPage;
module.link("./OAuthAppsPage", {
  "default": function (v) {
    OAuthAppsPage = v;
  }
}, 3);

function MailerRoute() {
  var canAccessOAuthApps = usePermission('manage-oauth-apps');

  if (!canAccessOAuthApps) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(OAuthAppsPage, null);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/5772557ca626e1b019b9a6cdd2796d22da632935.map

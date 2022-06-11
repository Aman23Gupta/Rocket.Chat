function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsRoute.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 2);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let IntegrationsPage;
module.link("./IntegrationsPage", {
  default(v) {
    IntegrationsPage = v;
  }

}, 4);
let EditIntegrationsPage;
module.link("./edit/EditIntegrationsPage", {
  default(v) {
    EditIntegrationsPage = v;
  }

}, 5);
let OutgoingWebhookHistoryPage;
module.link("./edit/OutgoingWebhookHistoryPage", {
  default(v) {
    OutgoingWebhookHistoryPage = v;
  }

}, 6);
let NewIntegrationsPage;
module.link("./new/NewIntegrationsPage", {
  default(v) {
    NewIntegrationsPage = v;
  }

}, 7);

function IntegrationsRoute() {
  const canViewIntegrationsPage = useAtLeastOnePermission(useMemo(() => ['manage-incoming-integrations', 'manage-outgoing-integrations', 'manage-own-incoming-integrations', 'manage-own-outgoing-integrations'], []));
  const context = useRouteParameter('context');

  if (!canViewIntegrationsPage) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(NewIntegrationsPage, null);
  }

  if (context === 'edit') {
    return /*#__PURE__*/React.createElement(EditIntegrationsPage, null);
  }

  if (context === 'history') {
    return /*#__PURE__*/React.createElement(OutgoingWebhookHistoryPage, null);
  }

  return /*#__PURE__*/React.createElement(IntegrationsPage, null);
}

module.exportDefault(IntegrationsRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/7ddfbfc473bb83482d38aab266fcb895804821ec.map

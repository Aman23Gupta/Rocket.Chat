function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsRoute.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 2);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var IntegrationsPage;
module.link("./IntegrationsPage", {
  "default": function (v) {
    IntegrationsPage = v;
  }
}, 4);
var EditIntegrationsPage;
module.link("./edit/EditIntegrationsPage", {
  "default": function (v) {
    EditIntegrationsPage = v;
  }
}, 5);
var OutgoingWebhookHistoryPage;
module.link("./edit/OutgoingWebhookHistoryPage", {
  "default": function (v) {
    OutgoingWebhookHistoryPage = v;
  }
}, 6);
var NewIntegrationsPage;
module.link("./new/NewIntegrationsPage", {
  "default": function (v) {
    NewIntegrationsPage = v;
  }
}, 7);

function IntegrationsRoute() {
  var canViewIntegrationsPage = useAtLeastOnePermission(useMemo(function () {
    return ['manage-incoming-integrations', 'manage-outgoing-integrations', 'manage-own-incoming-integrations', 'manage-own-outgoing-integrations'];
  }, []));
  var context = useRouteParameter('context');

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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/89a9ce9416a5b1e7c3ac43ba13855e42bb42f336.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditIntegrationsPage.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let Page;
module.link("../../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useRouteParameter, useRoute;
module.link("../../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let EditIncomingWebhookWithData;
module.link("./EditIncomingWebhookWithData", {
  default(v) {
    EditIncomingWebhookWithData = v;
  }

}, 5);
let EditOutgoingWebhookWithData;
module.link("./EditOutgoingWebhookWithData", {
  default(v) {
    EditOutgoingWebhookWithData = v;
  }

}, 6);

function EditIntegrationsPage(_ref) {
  let props = _extends({}, _ref);

  const t = useTranslation();
  const router = useRoute('admin-integrations');
  const type = useRouteParameter('type');
  const integrationId = useRouteParameter('id');
  const handleClickReturn = useCallback(() => {
    router.push({});
  }, [router]);
  const handleClickHistory = useCallback(() => {
    router.push({
      context: 'history',
      type: 'outgoing',
      id: integrationId
    });
  }, [integrationId, router]);
  return /*#__PURE__*/React.createElement(Page, _extends({
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Page.Header, {
    title: type === 'incoming' ? t('Integration_Incoming_WebHook') : t('Integration_Outgoing_WebHook')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back",
    size: "x16"
  }), " ", t('Back')), type === 'outgoing' && /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickHistory
  }, t('History')))), type === 'outgoing' && /*#__PURE__*/React.createElement(EditOutgoingWebhookWithData, {
    integrationId: integrationId,
    key: "outgoing"
  }) || type === 'incoming' && /*#__PURE__*/React.createElement(EditIncomingWebhookWithData, {
    integrationId: integrationId,
    key: "incoming"
  }));
}

module.exportDefault(EditIntegrationsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/9c81c300e6d5c20ebba9c63d3b8fdf7cac742993.map

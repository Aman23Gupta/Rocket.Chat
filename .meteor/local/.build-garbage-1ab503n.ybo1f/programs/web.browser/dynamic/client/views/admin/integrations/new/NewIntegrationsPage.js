function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewIntegrationsPage.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  default: () => NewIntegrationsPage
});
let Tabs, Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Tabs(v) {
    Tabs = v;
  },

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
let NewIncomingWebhook;
module.link("./NewIncomingWebhook", {
  default(v) {
    NewIncomingWebhook = v;
  }

}, 5);
let NewOutgoingWebhook;
module.link("./NewOutgoingWebhook", {
  default(v) {
    NewOutgoingWebhook = v;
  }

}, 6);

function NewIntegrationsPage(_ref) {
  let props = _extends({}, _ref);

  const t = useTranslation();
  const router = useRoute('admin-integrations');
  const handleClickTab = useCallback(type => () => {
    router.push({
      context: 'new',
      type
    });
  }, [router]);
  const handleClickReturn = useCallback(() => {
    router.push({});
  }, [router]);
  const tab = useRouteParameter('type');
  return /*#__PURE__*/React.createElement(Page, _extends({
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Integrations')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back",
    size: "x16"
  }), " ", t('Back')))), /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'incoming',
    onClick: handleClickTab('incoming')
  }, t('Incoming')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'outgoing',
    onClick: handleClickTab('outgoing')
  }, t('Outgoing'))), tab === 'incoming' && /*#__PURE__*/React.createElement(NewIncomingWebhook, {
    key: "incoming"
  }) || tab === 'outgoing' && /*#__PURE__*/React.createElement(NewOutgoingWebhook, {
    key: "outgoing"
  }));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/7ab2f5e7910fd8b276485ea8bd090c0665965434.map

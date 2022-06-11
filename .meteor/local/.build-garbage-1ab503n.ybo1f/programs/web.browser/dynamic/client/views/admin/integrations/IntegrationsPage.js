function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsPage.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon, Tabs;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Tabs(v) {
    Tabs = v;
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
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let IntegrationsTable;
module.link("./IntegrationsTable", {
  default(v) {
    IntegrationsTable = v;
  }

}, 5);
let NewBot;
module.link("./new/NewBot", {
  default(v) {
    NewBot = v;
  }

}, 6);
let NewZapier;
module.link("./new/NewZapier", {
  default(v) {
    NewZapier = v;
  }

}, 7);

function IntegrationsPage() {
  const t = useTranslation();
  const router = useRoute('admin-integrations');
  const handleNewButtonClick = useCallback(() => {
    router.push({
      context: 'new',
      type: 'incoming'
    });
  }, [router]);
  const context = useRouteParameter('context');
  const showTable = !['zapier', 'bots'].includes(context);
  const goToIncoming = useCallback(() => router.push({
    context: 'webhook-incoming'
  }), [router]);
  const goToOutgoing = useCallback(() => router.push({
    context: 'webhook-outgoing'
  }), [router]);
  const goToZapier = useCallback(() => router.push({
    context: 'zapier'
  }), [router]);
  const goToBots = useCallback(() => router.push({
    context: 'bots'
  }), [router]);
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Integrations')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleNewButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New')))), /*#__PURE__*/React.createElement(Tabs, null, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: !context || context === 'webhook-incoming',
    onClick: goToIncoming
  }, t('Incoming')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: context === 'webhook-outgoing',
    onClick: goToOutgoing
  }, t('Outgoing')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: context === 'zapier',
    onClick: goToZapier
  }, t('Zapier')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: context === 'bots',
    onClick: goToBots
  }, t('Bots'))), /*#__PURE__*/React.createElement(Page.Content, null, context === 'zapier' && /*#__PURE__*/React.createElement(NewZapier, null), context === 'bots' && /*#__PURE__*/React.createElement(NewBot, null), showTable && /*#__PURE__*/React.createElement(IntegrationsTable, {
    type: context
  })));
}

module.exportDefault(IntegrationsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/f456641947e03dda0b65d85f1bf9c6c1328d534f.map

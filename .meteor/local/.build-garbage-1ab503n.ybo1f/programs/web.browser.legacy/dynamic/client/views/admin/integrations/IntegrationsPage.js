function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/IntegrationsPage.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon, Tabs;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var IntegrationsTable;
module.link("./IntegrationsTable", {
  "default": function (v) {
    IntegrationsTable = v;
  }
}, 5);
var NewBot;
module.link("./new/NewBot", {
  "default": function (v) {
    NewBot = v;
  }
}, 6);
var NewZapier;
module.link("./new/NewZapier", {
  "default": function (v) {
    NewZapier = v;
  }
}, 7);

function IntegrationsPage() {
  var t = useTranslation();
  var router = useRoute('admin-integrations');
  var handleNewButtonClick = useCallback(function () {
    router.push({
      context: 'new',
      type: 'incoming'
    });
  }, [router]);
  var context = useRouteParameter('context');
  var showTable = !['zapier', 'bots'].includes(context);
  var goToIncoming = useCallback(function () {
    return router.push({
      context: 'webhook-incoming'
    });
  }, [router]);
  var goToOutgoing = useCallback(function () {
    return router.push({
      context: 'webhook-outgoing'
    });
  }, [router]);
  var goToZapier = useCallback(function () {
    return router.push({
      context: 'zapier'
    });
  }, [router]);
  var goToBots = useCallback(function () {
    return router.push({
      context: 'bots'
    });
  }, [router]);
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/486086b7dc79db310cdf818157b4b5f90fcb1c04.map

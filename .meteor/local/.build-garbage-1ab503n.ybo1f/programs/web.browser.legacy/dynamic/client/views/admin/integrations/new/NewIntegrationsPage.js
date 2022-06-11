function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewIntegrationsPage.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
module.export({
  "default": function () {
    return NewIntegrationsPage;
  }
});
var Tabs, Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Tabs: function (v) {
    Tabs = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
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
module.link("../../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useRouteParameter, useRoute;
module.link("../../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var NewIncomingWebhook;
module.link("./NewIncomingWebhook", {
  "default": function (v) {
    NewIncomingWebhook = v;
  }
}, 5);
var NewOutgoingWebhook;
module.link("./NewOutgoingWebhook", {
  "default": function (v) {
    NewOutgoingWebhook = v;
  }
}, 6);

function NewIntegrationsPage(_ref) {
  var props = _extends({}, _ref);

  var t = useTranslation();
  var router = useRoute('admin-integrations');
  var handleClickTab = useCallback(function (type) {
    return function () {
      router.push({
        context: 'new',
        type: type
      });
    };
  }, [router]);
  var handleClickReturn = useCallback(function () {
    router.push({});
  }, [router]);
  var tab = useRouteParameter('type');
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/c26ce27d801b05357fbfb5af7d01abb07574a0a1.map

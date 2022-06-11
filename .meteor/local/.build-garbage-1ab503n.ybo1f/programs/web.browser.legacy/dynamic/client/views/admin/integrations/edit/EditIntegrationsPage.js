function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditIntegrationsPage.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
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
var EditIncomingWebhookWithData;
module.link("./EditIncomingWebhookWithData", {
  "default": function (v) {
    EditIncomingWebhookWithData = v;
  }
}, 5);
var EditOutgoingWebhookWithData;
module.link("./EditOutgoingWebhookWithData", {
  "default": function (v) {
    EditOutgoingWebhookWithData = v;
  }
}, 6);

function EditIntegrationsPage(_ref) {
  var props = _extends({}, _ref);

  var t = useTranslation();
  var router = useRoute('admin-integrations');
  var type = useRouteParameter('type');
  var integrationId = useRouteParameter('id');
  var handleClickReturn = useCallback(function () {
    router.push({});
  }, [router]);
  var handleClickHistory = useCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/ffc2e4ac312405fe069e500e1b4a043dd6beddf8.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/webhooks/WebhooksPageContainer.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 4);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var WebhooksPage;
module.link("./WebhooksPage", {
  "default": function (v) {
    WebhooksPage = v;
  }
}, 9);

var reduceSettings = function (settings) {
  return settings.reduce(function (acc, _ref) {
    var _objectSpread2;

    var _id = _ref._id,
        value = _ref.value;
    acc = _objectSpread(_objectSpread({}, acc), {}, (_objectSpread2 = {}, _objectSpread2[_id] = value, _objectSpread2));
    return acc;
  }, {});
};

var WebhooksPageContainer = function () {
  var t = useTranslation();

  var _useEndpointData = useEndpointData('livechat/integrations.settings'),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  var canViewLivechatWebhooks = usePermission('view-livechat-webhooks');

  if (!canViewLivechatWebhooks) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (!data || !data.success || !data.settings || error) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Webhooks')
    }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  return /*#__PURE__*/React.createElement(WebhooksPage, {
    settings: reduceSettings(data.settings)
  });
};

module.exportDefault(WebhooksPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/webhooks/0eb600bce3cdf2fd0858d90cc48123bee3fe51e2.map

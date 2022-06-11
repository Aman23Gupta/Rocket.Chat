function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/EditCustomFieldsPageContainer.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 3);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 7);
var EditCustomFieldsPage;
module.link("./EditCustomFieldsPage", {
  "default": function (v) {
    EditCustomFieldsPage = v;
  }
}, 8);

var EditCustomFieldsPageContainer = function (_ref) {
  var reload = _ref.reload;
  var t = useTranslation();
  var id = useRouteParameter('id');

  var _useEndpointData = useEndpointData("livechat/custom-fields/" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (!data || !data.success || !data.customField || error) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Edit_Custom_Field')
    }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  return /*#__PURE__*/React.createElement(EditCustomFieldsPage, {
    customField: data.customField,
    id: id,
    reload: reload
  });
};

module.exportDefault(EditCustomFieldsPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/235173c72954ebc522c75e8efd0bb57b08f078ca.map

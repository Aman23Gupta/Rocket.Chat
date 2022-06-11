function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/EditCustomFieldsPageContainer.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Callout;
module.link("@rocket.chat/fuselage", {
  Callout(v) {
    Callout = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let PageSkeleton;
module.link("../../../components/PageSkeleton", {
  default(v) {
    PageSkeleton = v;
  }

}, 3);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 7);
let EditCustomFieldsPage;
module.link("./EditCustomFieldsPage", {
  default(v) {
    EditCustomFieldsPage = v;
  }

}, 8);

const EditCustomFieldsPageContainer = _ref => {
  let {
    reload
  } = _ref;
  const t = useTranslation();
  const id = useRouteParameter('id');
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/custom-fields/".concat(id));

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/2b16f8da68885f6a344ce41ccf120b0cce4a21ce.map

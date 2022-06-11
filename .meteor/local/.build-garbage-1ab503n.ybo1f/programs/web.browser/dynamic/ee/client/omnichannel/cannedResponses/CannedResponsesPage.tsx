function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponsesPage.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let GenericTable;
module.link("../../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let NoResults;
module.link("../../../../client/components/GenericTable/NoResults", {
  default(v) {
    NoResults = v;
  }

}, 4);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

const CannedResponsesPage = _ref => {
  let {
    data,
    header,
    setParams,
    params,
    title,
    renderRow,
    renderFilter,
    totalCannedResponses
  } = _ref;
  const t = useTranslation();
  const Route = useRoute('omnichannel-canned-responses');
  const handleClick = useMutableCallback(() => Route.push({
    context: 'new'
  }));
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClick,
    title: t('New_Canned_Response')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New')))), /*#__PURE__*/React.createElement(Page.Content, null, totalCannedResponses < 1 ? /*#__PURE__*/React.createElement(NoResults, {
    icon: "baloon-exclamation",
    title: t('No_Canned_Responses_Yet'),
    description: t('No_Canned_Responses_Yet-description'),
    buttonTitle: t('Create_your_First_Canned_Response'),
    buttonAction: handleClick
  }) : /*#__PURE__*/React.createElement(GenericTable, {
    renderFilter: renderFilter,
    header: header,
    renderRow: renderRow,
    results: data === null || data === void 0 ? void 0 : data.cannedResponses,
    total: data === null || data === void 0 ? void 0 : data.total,
    setParams: setParams,
    params: params
  })));
};

module.exportDefault(CannedResponsesPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/8c9a998cdef2069f1c7bb87e8e8b11fbedeff1d9.map

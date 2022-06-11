function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponsesPage.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, Icon, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var GenericTable;
module.link("../../../../client/components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var NoResults;
module.link("../../../../client/components/GenericTable/NoResults", {
  "default": function (v) {
    NoResults = v;
  }
}, 4);
var Page;
module.link("../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 5);
var useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

var CannedResponsesPage = function (_ref) {
  var data = _ref.data,
      header = _ref.header,
      setParams = _ref.setParams,
      params = _ref.params,
      title = _ref.title,
      renderRow = _ref.renderRow,
      renderFilter = _ref.renderFilter,
      totalCannedResponses = _ref.totalCannedResponses;
  var t = useTranslation();
  var Route = useRoute('omnichannel-canned-responses');
  var handleClick = useMutableCallback(function () {
    return Route.push({
      context: 'new'
    });
  });
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/e7e20975b8325bc019b96b97b2ae89e3c062f767.map

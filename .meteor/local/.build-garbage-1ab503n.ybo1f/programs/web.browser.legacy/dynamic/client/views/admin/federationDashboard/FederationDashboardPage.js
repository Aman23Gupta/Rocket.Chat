function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/FederationDashboardPage.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var OverviewSection;
module.link("./OverviewSection", {
  "default": function (v) {
    OverviewSection = v;
  }
}, 4);
var ServersSection;
module.link("./ServersSection", {
  "default": function (v) {
    ServersSection = v;
  }
}, 5);

function FederationDashboardPage() {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Federation_Dashboard')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    margin: "x24"
  }, /*#__PURE__*/React.createElement(OverviewSection, null), /*#__PURE__*/React.createElement(ServersSection, null))));
}

module.exportDefault(FederationDashboardPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/8ab259f3cee2f510f8f796dbfbc4ccdc3b97b461.map

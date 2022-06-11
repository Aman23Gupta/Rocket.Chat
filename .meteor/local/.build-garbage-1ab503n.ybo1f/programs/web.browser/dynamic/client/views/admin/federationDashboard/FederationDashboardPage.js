function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/federationDashboard/FederationDashboardPage.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let OverviewSection;
module.link("./OverviewSection", {
  default(v) {
    OverviewSection = v;
  }

}, 4);
let ServersSection;
module.link("./ServersSection", {
  default(v) {
    ServersSection = v;
  }

}, 5);

function FederationDashboardPage() {
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Federation_Dashboard')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    margin: "x24"
  }, /*#__PURE__*/React.createElement(OverviewSection, null), /*#__PURE__*/React.createElement(ServersSection, null))));
}

module.exportDefault(FederationDashboardPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/federationDashboard/589257da0fdda5de09914ded1051b7f595a05a81.map

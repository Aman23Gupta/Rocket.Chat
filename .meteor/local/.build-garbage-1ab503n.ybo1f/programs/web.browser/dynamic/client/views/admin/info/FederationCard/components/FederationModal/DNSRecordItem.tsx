function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/DNSRecordItem.tsx                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecordItem: () => DNSRecordItem
});
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
let SectionStatus;
module.link("../Section", {
  SectionStatus(v) {
    SectionStatus = v;
  }

}, 2);
let getStatusIcon;
module.link("../SectionStatusIcon", {
  default(v) {
    getStatusIcon = v;
  }

}, 3);

const DNSRecordItem = _ref => {
  let {
    record: {
      status,
      title,
      expectedValue,
      value,
      hideErrorString
    }
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "flex-start"
  }, getStatusIcon(status), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    fontSize: "x12"
  }, /*#__PURE__*/React.createElement("b", null, title), ": ", expectedValue, " ", !hideErrorString && status === SectionStatus.FAILED ? "(".concat(value || '?', ")") : ''));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/50e711387edea2452843e6164dd09795beabdc4f.map

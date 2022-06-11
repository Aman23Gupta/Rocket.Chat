function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/DNSRecordItem.tsx                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecordItem: function () {
    return DNSRecordItem;
  }
});
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
var SectionStatus;
module.link("../Section", {
  SectionStatus: function (v) {
    SectionStatus = v;
  }
}, 2);
var getStatusIcon;
module.link("../SectionStatusIcon", {
  "default": function (v) {
    getStatusIcon = v;
  }
}, 3);

var DNSRecordItem = function (_ref) {
  var _ref$record = _ref.record,
      status = _ref$record.status,
      title = _ref$record.title,
      expectedValue = _ref$record.expectedValue,
      value = _ref$record.value,
      hideErrorString = _ref$record.hideErrorString;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "flex-start"
  }, getStatusIcon(status), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    fontSize: "x12"
  }, /*#__PURE__*/React.createElement("b", null, title), ": ", expectedValue, " ", !hideErrorString && status === SectionStatus.FAILED ? "(" + (value || '?') + ")" : ''));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/7a11fadca69dec3577f18d88659c39206bdd98e1.map

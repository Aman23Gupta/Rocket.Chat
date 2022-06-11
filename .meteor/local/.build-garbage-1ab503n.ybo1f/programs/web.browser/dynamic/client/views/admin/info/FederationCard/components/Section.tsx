function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/Section.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SectionStatus: () => SectionStatus
});
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let Card;
module.link("../../../../../components/Card", {
  default(v) {
    Card = v;
  }

}, 2);
let getStatusIcon;
module.link("./SectionStatusIcon", {
  default(v) {
    getStatusIcon = v;
  }

}, 3);
var SectionStatus;

(function (SectionStatus) {
  SectionStatus[SectionStatus["UNKNOWN"] = 0] = "UNKNOWN";
  SectionStatus[SectionStatus["SUCCESS"] = 1] = "SUCCESS";
  SectionStatus[SectionStatus["FAILED"] = 2] = "FAILED";
})(SectionStatus || module.runSetters(SectionStatus = {}, ["SectionStatus"]));

const Section = _ref => {
  let {
    status,
    title,
    subtitle,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Card.Col.Section, {
    display: "flex",
    alignItems: "flex-start"
  }, getStatusIcon(status), /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Card.Col.Title, null, title), subtitle && /*#__PURE__*/React.createElement(Box, {
    mbs: "x2"
  }, subtitle), children));
};

module.exportDefault( /*#__PURE__*/memo(Section));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/d8d87961b3d80627e05b760b72e47ea4fc1d14a3.map

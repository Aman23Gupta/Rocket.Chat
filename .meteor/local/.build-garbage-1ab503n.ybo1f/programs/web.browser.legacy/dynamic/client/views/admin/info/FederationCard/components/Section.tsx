function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/Section.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SectionStatus: function () {
    return SectionStatus;
  }
});
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var Card;
module.link("../../../../../components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 2);
var getStatusIcon;
module.link("./SectionStatusIcon", {
  "default": function (v) {
    getStatusIcon = v;
  }
}, 3);
var SectionStatus;

(function (SectionStatus) {
  SectionStatus[SectionStatus["UNKNOWN"] = 0] = "UNKNOWN";
  SectionStatus[SectionStatus["SUCCESS"] = 1] = "SUCCESS";
  SectionStatus[SectionStatus["FAILED"] = 2] = "FAILED";
})(SectionStatus || module.runSetters(SectionStatus = {}, ["SectionStatus"]));

var Section = function (_ref) {
  var status = _ref.status,
      title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children;
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
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/f90ddf5c1fcb4c718983987bae6d8a6ca6620b1e.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/LegendSymbol.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const LegendSymbol = _ref => {
  let {
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: 12,
      height: 12,
      borderRadius: 2,
      backgroundColor: color,
      verticalAlign: 'baseline'
    }
  }));
};

module.exportDefault(LegendSymbol);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/22489d4762c8841e678eee1f1feb241c75f42abc.map

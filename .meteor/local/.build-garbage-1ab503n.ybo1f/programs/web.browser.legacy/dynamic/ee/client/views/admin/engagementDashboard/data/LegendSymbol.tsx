function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/LegendSymbol.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var LegendSymbol = function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color;
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/2dfdee89cb648aac1f65f22f39942bffd57e3ac5.map

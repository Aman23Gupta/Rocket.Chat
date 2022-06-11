function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/CardDivider.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Divider;
module.link("@rocket.chat/fuselage", {
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var CardDivider = function () {
  return /*#__PURE__*/React.createElement(Divider, {
    width: "x1",
    mi: "x24",
    mb: "none",
    alignSelf: "stretch"
  });
};

module.exportDefault(CardDivider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/96719a465cedadaafdb21564053782fd66fe8158.map

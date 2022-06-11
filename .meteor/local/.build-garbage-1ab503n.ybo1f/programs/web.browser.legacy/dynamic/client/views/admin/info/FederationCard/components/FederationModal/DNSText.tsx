function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/DNSText.tsx                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSText: function () {
    return DNSText;
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

var DNSText = function (_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Box, {
    mbs: "x8",
    fontWeight: "c2",
    fontSize: "p2"
  }, text);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/ecf3602eb4e89d28180fcfa9741eff83b6555fb3.map

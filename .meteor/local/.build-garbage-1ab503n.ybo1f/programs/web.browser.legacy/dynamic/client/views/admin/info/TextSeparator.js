function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/TextSeparator.js                                                                            //
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
var DotLeader;
module.link("../../../components/DotLeader", {
  "default": function (v) {
    DotLeader = v;
  }
}, 2);

var TextSeparator = function (_ref) {
  var label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mb: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "inline-flex",
    alignItems: "center"
  }, label), /*#__PURE__*/React.createElement(DotLeader, null), /*#__PURE__*/React.createElement("span", null, value));
};

module.exportDefault(TextSeparator);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/f2ccccd90643815f935861f1e6fafdceb5ae0af6.map

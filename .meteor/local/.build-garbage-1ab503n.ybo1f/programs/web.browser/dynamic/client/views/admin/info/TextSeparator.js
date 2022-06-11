function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/TextSeparator.js                                                                            //
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
let DotLeader;
module.link("../../../components/DotLeader", {
  default(v) {
    DotLeader = v;
  }

}, 2);

const TextSeparator = _ref => {
  let {
    label,
    value
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/views/admin/info/6ce9c2b5150ba1c443af13c86a0f9a759e2e73c2.map

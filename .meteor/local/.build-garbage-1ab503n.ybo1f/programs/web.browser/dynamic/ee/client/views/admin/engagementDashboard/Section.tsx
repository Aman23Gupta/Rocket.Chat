function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/Section.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Flex, InputBox, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
  },

  InputBox(v) {
    InputBox = v;
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

const Section = _ref => {
  let {
    children,
    title = undefined,
    filter = /*#__PURE__*/React.createElement(InputBox.Skeleton, null)
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    wrap: "no-wrap"
  }, title && /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    fontScale: "p2",
    color: "default"
  }, title), filter && /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 0
  }, filter)), children));
};

module.exportDefault(Section);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/3f44f034de55854d96c8cbcf454b4050e123065c.map

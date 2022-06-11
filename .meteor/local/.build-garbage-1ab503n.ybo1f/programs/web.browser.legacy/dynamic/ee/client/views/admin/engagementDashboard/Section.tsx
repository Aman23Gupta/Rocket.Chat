function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/Section.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Flex, InputBox, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  InputBox: function (v) {
    InputBox = v;
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

var Section = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? undefined : _ref$title,
      _ref$filter = _ref.filter,
      filter = _ref$filter === void 0 ? /*#__PURE__*/React.createElement(InputBox.Skeleton, null) : _ref$filter;
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/768a347c1ebab59e03daa336e9816b1c058692e1.map

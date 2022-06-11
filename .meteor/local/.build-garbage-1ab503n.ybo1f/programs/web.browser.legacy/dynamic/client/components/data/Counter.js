function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/Counter.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
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
var Growth;
module.link("./Growth", {
  "default": function (v) {
    Growth = v;
  }
}, 2);

function Counter(_ref) {
  var count = _ref.count,
      _ref$variation = _ref.variation,
      variation = _ref$variation === void 0 ? 0 : _ref$variation,
      description = _ref.description;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, {
    alignItems: "end"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "default",
    fontScale: "h2",
    style: {
      fontSize: '3em',
      lineHeight: 1
    }
  }, count), /*#__PURE__*/React.createElement(Growth, {
    fontScale: "h4"
  }, variation))), /*#__PURE__*/React.createElement(Margins, {
    block: "x12"
  }, /*#__PURE__*/React.createElement(Flex.Container, {
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "hint"
  }, description))));
}

module.exportDefault(Counter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/data/dc199e8e5ea6353eb7bba56555acec94da4343e2.map

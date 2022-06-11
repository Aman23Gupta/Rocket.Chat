function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/Counter.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
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
let Growth;
module.link("./Growth", {
  default(v) {
    Growth = v;
  }

}, 2);

function Counter(_ref) {
  let {
    count,
    variation = 0,
    description
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/components/data/f677ecbb56e1f295216a51a5687c317d6a2e06cb.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/InfoPanel.tsx                                                                                //
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

var InfoPanel = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    mb: "neg-x24"
  }, children);
};

module.exportDefault(InfoPanel);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/20670603e2cc1cb793d1fe5e32de9906ae40bab8.map

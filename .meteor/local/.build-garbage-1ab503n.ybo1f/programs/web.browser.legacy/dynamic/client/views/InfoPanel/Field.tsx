function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Field.tsx                                                                                    //
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

var Field = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    mb: "x16"
  }, children);
};

module.exportDefault(Field);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/7539df6ec93e774d5ad967d139ac9a96eea0e20d.map

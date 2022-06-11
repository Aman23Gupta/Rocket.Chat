function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/ColTitle.tsx                                                                                 //
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

var ColTitle = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    fontScale: "c2",
    m: "none"
  }, children);
};

module.exportDefault(ColTitle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/c266669e904dc75ff454ebdea04dae5a8d8cbb5a.map

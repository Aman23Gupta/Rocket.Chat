function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Avatar.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Section;
module.link("./Section", {
  "default": function (v) {
    Section = v;
  }
}, 1);

var Avatar = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Section, {
    display: "flex",
    justifyContent: "center"
  }, children);
};

module.exportDefault(Avatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/ea1f251c14a25023adcffba156a81ac9101e075e.map

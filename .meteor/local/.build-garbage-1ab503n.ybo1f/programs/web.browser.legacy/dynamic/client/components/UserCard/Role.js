function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Role.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Role = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    m: "x2",
    fontScale: "c2"
  }, /*#__PURE__*/React.createElement(Tag, {
    disabled: true,
    children: children
  }));
};

module.exportDefault(Role);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/5cea0a86a4d3534f6842070c3515e937d795f850.map

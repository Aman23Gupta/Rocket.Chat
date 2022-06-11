function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Roles.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Info;
module.link("./Info", {
  "default": function (v) {
    Info = v;
  }
}, 1);

var Roles = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Info, {
    "rcx-user-card__roles": true,
    m: "neg-x2",
    flexWrap: "wrap",
    display: "flex",
    flexShrink: 0
  }, children);
};

module.exportDefault(Roles);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/576d7fbf913ca0ab1663b924b99b6da401d6e7c3.map

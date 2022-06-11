function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/MetricsFollowing.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var MetricsFollowing = function (_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement(ActionButton, {
    color: "info",
    small: true,
    ghost: true,
    icon: name
  });
};

module.exportDefault(MetricsFollowing);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/750c0650d57a20d4b4a7093bccebbe9c576445e5.map

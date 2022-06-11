function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/MetricsFollowing.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const MetricsFollowing = _ref => {
  let {
    name
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/27f54784ec5be8975617d8b4cc9508b160aa05b5.map

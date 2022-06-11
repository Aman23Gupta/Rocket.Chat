function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/TooltipComponent.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  TooltipComponent: () => TooltipComponent
});
let Tooltip, PositionAnimated, AnimatedVisibility;
module.link("@rocket.chat/fuselage", {
  Tooltip(v) {
    Tooltip = v;
  },

  PositionAnimated(v) {
    PositionAnimated = v;
  },

  AnimatedVisibility(v) {
    AnimatedVisibility = v;
  }

}, 0);
let React, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);

const TooltipComponent = _ref => {
  let {
    title,
    anchor
  } = _ref;
  const ref = useRef(anchor);
  return /*#__PURE__*/React.createElement(PositionAnimated, {
    anchor: ref,
    placement: "top-middle",
    margin: 8,
    visible: AnimatedVisibility.UNHIDING
  }, /*#__PURE__*/React.createElement(Tooltip, null, title));
};

module.exportDefault(TooltipComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/0b555d971034d7c0a3af80d885374456e058700e.map

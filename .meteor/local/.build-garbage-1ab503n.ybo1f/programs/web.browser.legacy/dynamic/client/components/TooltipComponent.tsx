function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/TooltipComponent.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  TooltipComponent: function () {
    return TooltipComponent;
  }
});
var Tooltip, PositionAnimated, AnimatedVisibility;
module.link("@rocket.chat/fuselage", {
  Tooltip: function (v) {
    Tooltip = v;
  },
  PositionAnimated: function (v) {
    PositionAnimated = v;
  },
  AnimatedVisibility: function (v) {
    AnimatedVisibility = v;
  }
}, 0);
var React, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);

var TooltipComponent = function (_ref) {
  var title = _ref.title,
      anchor = _ref.anchor;
  var ref = useRef(anchor);
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
//# sourceMappingURL=/dynamic/client/components/c2061fa7e0e78c6101a35f73676f1e5fd9b74740.map

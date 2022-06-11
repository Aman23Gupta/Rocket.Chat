function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBar.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useLayoutContextualBarPosition, useLayoutSizes;
module.link("../../providers/LayoutProvider", {
  useLayoutContextualBarPosition: function (v) {
    useLayoutContextualBarPosition = v;
  },
  useLayoutSizes: function (v) {
    useLayoutSizes = v;
  }
}, 2);

var VerticalBar = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var sizes = useLayoutSizes();
  var position = useLayoutContextualBarPosition();
  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-vertical-bar": true,
    backgroundColor: "surface",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    width: sizes.contextualBar,
    borderInlineStartWidth: "2px",
    borderInlineStartColor: "neutral-300",
    borderInlineStartStyle: "solid",
    height: "full",
    position: position,
    zIndex: 5,
    insetInlineEnd: 'none',
    insetBlockStart: 'none'
  }, props), children);
};

module.exportDefault( /*#__PURE__*/memo(VerticalBar));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/879716c2fff20cd7d40617264d74912a3b3e31e0.map

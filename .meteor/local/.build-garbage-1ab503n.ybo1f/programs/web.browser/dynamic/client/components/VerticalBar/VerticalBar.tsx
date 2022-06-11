function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBar.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useLayoutContextualBarPosition, useLayoutSizes;
module.link("../../providers/LayoutProvider", {
  useLayoutContextualBarPosition(v) {
    useLayoutContextualBarPosition = v;
  },

  useLayoutSizes(v) {
    useLayoutSizes = v;
  }

}, 2);

const VerticalBar = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const sizes = useLayoutSizes();
  const position = useLayoutContextualBarPosition();
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
//# sourceMappingURL=/dynamic/client/components/VerticalBar/7d81077933dc5e7e9ce015ef383afb25bd3e43ac.map

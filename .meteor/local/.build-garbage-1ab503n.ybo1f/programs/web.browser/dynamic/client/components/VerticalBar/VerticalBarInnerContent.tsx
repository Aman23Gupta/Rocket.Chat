function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarInnerContent.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
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

const VerticalBarInnerContent = props => /*#__PURE__*/React.createElement(Box, _extends({
  "rcx-vertical-bar--inner-content": true,
  position: "absolute",
  height: "full",
  display: "flex",
  insetInline: 0
}, props));

module.exportDefault( /*#__PURE__*/memo(VerticalBarInnerContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/c206c4539e26175e1a2f5725e14f1ea0c3d6d490.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarFooter.tsx                                                                 //
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
let React, forwardRef, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
const VerticalBarFooter = /*#__PURE__*/forwardRef(function VerticalBarFooter(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "footer",
    p: "x24"
  }, props, {
    ref: ref
  }), children);
});
module.exportDefault( /*#__PURE__*/memo(VerticalBarFooter));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/6ba39bb8a90feb75835ebbc5e2a547a643cbc977.map

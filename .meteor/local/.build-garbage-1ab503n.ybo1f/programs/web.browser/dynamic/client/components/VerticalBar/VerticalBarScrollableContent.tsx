function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarScrollableContent.tsx                                                      //
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
let Margins;
module.link("@rocket.chat/fuselage", {
  Margins(v) {
    Margins = v;
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
let Page;
module.link("../Page", {
  default(v) {
    Page = v;
  }

}, 2);
const VerticalBarScrollableContent = /*#__PURE__*/forwardRef(function VerticalBarScrollableContent(_ref, ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Page.ScrollableContent, _extends({
    p: "x24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Margins, {
    blockEnd: "x16"
  }, children));
});
module.exportDefault( /*#__PURE__*/memo(VerticalBarScrollableContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/6fbaf47fed494e9948eb53a9d23e796446a9f88f.map

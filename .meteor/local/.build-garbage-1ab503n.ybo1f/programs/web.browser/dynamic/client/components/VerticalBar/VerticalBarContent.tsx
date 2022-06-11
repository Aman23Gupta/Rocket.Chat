function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarContent.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
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

}, 0);
let Page;
module.link("../Page", {
  default(v) {
    Page = v;
  }

}, 1);
const VerticalBarContent = /*#__PURE__*/forwardRef(function VerticalBarContent(props, ref) {
  return /*#__PURE__*/React.createElement(Page.Content, _extends({
    "rcx-vertical-bar__content": true,
    display: "flex"
  }, props, {
    ref: ref
  }));
});
module.exportDefault( /*#__PURE__*/memo(VerticalBarContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/3f73c2753b47dd42183efefaed52b4622a715a08.map

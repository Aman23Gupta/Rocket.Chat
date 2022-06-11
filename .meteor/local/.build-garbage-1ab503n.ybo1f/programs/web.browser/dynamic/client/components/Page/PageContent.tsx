function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageContent.tsx                                                                              //
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
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
const PageContent = /*#__PURE__*/forwardRef(function PageContent(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    paddingInline: "x24",
    display: "flex",
    flexDirection: "column",
    overflowY: "hidden",
    height: "full"
  }, props));
});
module.exportDefault(PageContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/3018c74451ba9223a74c52da8641d531e2cc73fa.map

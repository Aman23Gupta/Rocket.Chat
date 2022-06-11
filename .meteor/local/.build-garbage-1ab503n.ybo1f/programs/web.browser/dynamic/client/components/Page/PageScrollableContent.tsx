function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageScrollableContent.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onScrollContent"];

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
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
let ScrollableContentWrapper;
module.link("../ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 2);
const PageScrollableContent = /*#__PURE__*/forwardRef(function PageScrollableContent(_ref, ref) {
  let {
    onScrollContent
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, {
    height: "50vh",
    display: "flex",
    flexShrink: 1,
    flexDirection: "column",
    flexGrow: 1,
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(ScrollableContentWrapper, {
    onScroll: onScrollContent,
    ref: ref
  }, /*#__PURE__*/React.createElement(Box, _extends({
    p: "x16",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }, props))));
});
module.exportDefault(PageScrollableContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/c942a866b50863e67ebc768e387759e0f8d4d2e7.map

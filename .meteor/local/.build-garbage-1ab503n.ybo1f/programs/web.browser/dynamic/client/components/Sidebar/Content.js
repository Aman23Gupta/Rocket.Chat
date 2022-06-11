function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/Content.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ScrollableContentWrapper;
module.link("../ScrollableContentWrapper", {
  default(v) {
    ScrollableContentWrapper = v;
  }

}, 2);

const Content = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(ScrollableContentWrapper, props, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    w: "full",
    h: "full"
  }, children)));
};

module.exportDefault(Content);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/63ff63fc4d71bf970b2907dc2c9c1ed9cffb18cc.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/LazyComponent.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["template"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let React, Suspense;
module.link("react", {
  default(v) {
    React = v;
  },

  Suspense(v) {
    Suspense = v;
  }

}, 0);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);

const LazyComponent = _ref => {
  let {
    template: TabbarTemplate
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(VerticalBar.Skeleton, null)
  }, /*#__PURE__*/React.createElement(TabbarTemplate, props));
};

module.exportDefault(LazyComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/40b0623174f4f68ef15ffb1031cc74f6797dcbaa.map

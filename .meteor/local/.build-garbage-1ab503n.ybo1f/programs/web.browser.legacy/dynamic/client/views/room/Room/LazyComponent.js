function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/LazyComponent.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["template"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var React, Suspense;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Suspense: function (v) {
    Suspense = v;
  }
}, 0);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);

var LazyComponent = function (_ref) {
  var TabbarTemplate = _ref.template,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(VerticalBar.Skeleton, null)
  }, /*#__PURE__*/React.createElement(TabbarTemplate, props));
};

module.exportDefault(LazyComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/2683af9288042a50d2d2488aa12cdc09f573337f.map

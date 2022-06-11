function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Metrics.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ContentItem;
module.link("./ContentItem", {
  "default": function (v) {
    ContentItem = v;
  }
}, 2);

var Metrics = function (props) {
  return /*#__PURE__*/React.createElement(ContentItem, null, /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    mi: "neg-x4"
  }, props)));
};

module.exportDefault(Metrics);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/176cd2c91abb60a4f3a4b781f4a17450f797542a.map

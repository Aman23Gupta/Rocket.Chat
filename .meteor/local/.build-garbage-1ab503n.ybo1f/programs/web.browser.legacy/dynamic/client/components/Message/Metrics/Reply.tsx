function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Metrics/Reply.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Button;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
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

var Reply = function (props) {
  return /*#__PURE__*/React.createElement(ContentItem, null, /*#__PURE__*/React.createElement(Button, _extends({}, props, {
    small: true,
    primary: true
  })));
};

module.exportDefault(Reply);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Metrics/8964062e30ede3a65a2440ec7aacd60d0a7e57e8.map

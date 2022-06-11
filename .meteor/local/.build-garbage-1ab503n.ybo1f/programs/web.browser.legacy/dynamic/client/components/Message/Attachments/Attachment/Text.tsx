function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Text.tsx                                                           //
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

var Text = function (props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    mbe: "x4",
    mi: "x2",
    fontScale: "p2",
    color: "default"
  }, props));
};

module.exportDefault(Text);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/c93e0d1b75955f439d65f8bf1f8ab1395232e63f.map

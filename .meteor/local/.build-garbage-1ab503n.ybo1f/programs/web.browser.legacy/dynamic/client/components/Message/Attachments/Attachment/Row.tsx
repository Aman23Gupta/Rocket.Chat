function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Row.tsx                                                            //
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

var Row = function (props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    mi: "neg-x2",
    mbe: "x2",
    "rcx-message-attachment": true,
    display: "flex",
    alignItems: "center"
  }, props));
};

module.exportDefault(Row);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/355db7aa73c181f1480af0672ac691b9599a2420.map

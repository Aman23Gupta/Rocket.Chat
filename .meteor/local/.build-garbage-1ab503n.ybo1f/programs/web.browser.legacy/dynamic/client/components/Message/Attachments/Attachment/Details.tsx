function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Details.tsx                                                        //
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

var Details = function (_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-attachment__details": true,
    fontScale: "p2",
    color: "info",
    bg: "neutral-100",
    pi: "x16",
    pb: "x16"
  }, props));
};

module.exportDefault(Details);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/fa026083151d175227951715376c05992f7078e1.map

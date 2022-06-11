function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Block.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var Attachment;
module.link("./Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 2);

var Block = function (_ref) {
  var pre = _ref.pre,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'neutral-600' : _ref$color,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(Attachment, null, pre, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    pis: "x16",
    borderRadius: "x2",
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: "x2",
    borderInlineStartColor: color,
    children: children
  }));
};

module.exportDefault(Block);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/d42648b1942dfb77186dcca1f94c0a2bea99c168.map

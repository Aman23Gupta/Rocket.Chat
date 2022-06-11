function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Paragraph.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Inline;
module.link("./Inline", {
  "default": function (v) {
    Inline = v;
  }
}, 1);

var Paragraph = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      mentions = _ref.mentions;
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Inline, {
    value: value,
    mentions: mentions
  }));
};

module.exportDefault(Paragraph);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/8e9c07feb9b96e92382b2d7b9390a29a663a48cb.map

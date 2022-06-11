function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/BigEmoji.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Emoji;
module.link("../../Emoji", {
  "default": function (v) {
    Emoji = v;
  }
}, 1);

var BigEmoji = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.map(function (block, index) {
    return /*#__PURE__*/React.createElement(Emoji, {
      className: "big",
      key: index,
      emojiHandle: ":" + block.value.value + ":"
    });
  }));
};

module.exportDefault(BigEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/489763851c296e449be72e3881e4080c6098a2cd.map

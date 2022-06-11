function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/BigEmoji.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Emoji;
module.link("../../Emoji", {
  default(v) {
    Emoji = v;
  }

}, 1);

const BigEmoji = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.map((block, index) => /*#__PURE__*/React.createElement(Emoji, {
    className: "big",
    key: index,
    emojiHandle: ":".concat(block.value.value, ":")
  })));
};

module.exportDefault(BigEmoji);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/29f5d4348c0f780b57b7c6dceb32941bc3f3263c.map

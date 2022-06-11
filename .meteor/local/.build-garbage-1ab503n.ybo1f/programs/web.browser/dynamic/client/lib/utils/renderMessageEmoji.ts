function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/renderMessageEmoji.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  renderMessageEmoji: () => renderMessageEmoji
});
let emojiParser;
module.link("../../../app/emoji/client/emojiParser.js", {
  emojiParser(v) {
    emojiParser = v;
  }

}, 0);

const renderMessageEmoji = message => {
  var _emojiParser;

  return (_emojiParser = emojiParser(message)) === null || _emojiParser === void 0 ? void 0 : _emojiParser.html;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/f817af9c5ed05101f80966dab9be66c4ab6d0148.map

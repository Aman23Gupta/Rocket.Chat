function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/renderMessageEmoji.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  renderMessageEmoji: function () {
    return renderMessageEmoji;
  }
});
var emojiParser;
module.link("../../../app/emoji/client/emojiParser.js", {
  emojiParser: function (v) {
    emojiParser = v;
  }
}, 0);

var renderMessageEmoji = function (message) {
  var _emojiParser;

  return (_emojiParser = emojiParser(message)) === null || _emojiParser === void 0 ? void 0 : _emojiParser.html;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/a8bb9949bb068e5342d1a5269fbff9751e684b54.map

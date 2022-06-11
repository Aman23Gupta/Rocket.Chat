function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/highlight-words/client/client.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createHighlightWordsMessageRenderer: function () {
    return createHighlightWordsMessageRenderer;
  }
});
var highlightWords, getRegexHighlight, getRegexHighlightUrl;
module.link("./helper", {
  highlightWords: function (v) {
    highlightWords = v;
  },
  getRegexHighlight: function (v) {
    getRegexHighlight = v;
  },
  getRegexHighlightUrl: function (v) {
    getRegexHighlightUrl = v;
  }
}, 0);

var createHighlightWordsMessageRenderer = function (_ref) {
  var wordsToHighlight = _ref.wordsToHighlight;
  var highlights = wordsToHighlight.map(function (highlight) {
    return {
      highlight: highlight,
      regex: getRegexHighlight(highlight),
      urlRegex: getRegexHighlightUrl(highlight)
    };
  });
  return function (message) {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    message.html = highlightWords(message.html, highlights);
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/highlight-words/client/187819a4599b0a4b8f6b2fd3f3bf7d18e31bf2f3.map

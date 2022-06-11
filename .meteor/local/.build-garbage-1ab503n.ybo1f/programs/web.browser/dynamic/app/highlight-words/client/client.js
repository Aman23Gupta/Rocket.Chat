function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/highlight-words/client/client.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createHighlightWordsMessageRenderer: () => createHighlightWordsMessageRenderer
});
let highlightWords, getRegexHighlight, getRegexHighlightUrl;
module.link("./helper", {
  highlightWords(v) {
    highlightWords = v;
  },

  getRegexHighlight(v) {
    getRegexHighlight = v;
  },

  getRegexHighlightUrl(v) {
    getRegexHighlightUrl = v;
  }

}, 0);

const createHighlightWordsMessageRenderer = _ref => {
  let {
    wordsToHighlight
  } = _ref;
  const highlights = wordsToHighlight.map(highlight => ({
    highlight,
    regex: getRegexHighlight(highlight),
    urlRegex: getRegexHighlightUrl(highlight)
  }));
  return message => {
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
//# sourceMappingURL=/dynamic/app/highlight-words/client/e0cc39f8a0f4d0c4d3d76be537d7adf9031143bf.map

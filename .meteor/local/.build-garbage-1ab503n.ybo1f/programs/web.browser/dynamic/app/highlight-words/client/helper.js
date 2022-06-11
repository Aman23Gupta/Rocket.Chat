function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/highlight-words/client/helper.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  checkHighlightedWordsInUrls: () => checkHighlightedWordsInUrls,
  removeHighlightedUrls: () => removeHighlightedUrls,
  getRegexHighlight: () => getRegexHighlight,
  getRegexHighlightUrl: () => getRegexHighlightUrl,
  highlightWords: () => highlightWords
});
let escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp(v) {
    escapeRegExp = v;
  }

}, 0);

const checkHighlightedWordsInUrls = (msg, urlRegex) => msg.match(urlRegex);

const removeHighlightedUrls = (msg, highlight, urlMatches) => {
  const highlightRegex = new RegExp(highlight, 'gmi');
  return urlMatches.reduce((msg, match) => {
    const withTemplate = match.replace(highlightRegex, "<span class=\"highlight-text\">".concat(highlight, "</span>"));
    const regexWithTemplate = new RegExp(withTemplate, 'i');
    return msg.replace(regexWithTemplate, match);
  }, msg);
};

const highlightTemplate = '$1<span class="highlight-text">$2</span>$3';

const getRegexHighlight = highlight => new RegExp("(^|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(".concat(escapeRegExp(highlight), ")($|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(?![^<]*>|[^<>]*<\\/)"), 'gmi');

const getRegexHighlightUrl = highlight => new RegExp("https?://(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)(".concat(escapeRegExp(highlight), ")\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"), 'gmi');

const highlightWords = (msg, highlights) => highlights.reduce((msg, _ref) => {
  let {
    highlight,
    regex,
    urlRegex
  } = _ref;
  const urlMatches = checkHighlightedWordsInUrls(msg, urlRegex);

  if (!urlMatches) {
    return msg.replace(regex, highlightTemplate);
  }

  return removeHighlightedUrls(msg.replace(regex, highlightTemplate), highlight, urlMatches);
}, msg);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/highlight-words/client/c8fc073249d788731f4b38d309d52e5a2e5cfd61.map

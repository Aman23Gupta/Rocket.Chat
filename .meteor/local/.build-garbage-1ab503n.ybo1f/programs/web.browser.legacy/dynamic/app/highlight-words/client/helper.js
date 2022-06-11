function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/highlight-words/client/helper.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  checkHighlightedWordsInUrls: function () {
    return checkHighlightedWordsInUrls;
  },
  removeHighlightedUrls: function () {
    return removeHighlightedUrls;
  },
  getRegexHighlight: function () {
    return getRegexHighlight;
  },
  getRegexHighlightUrl: function () {
    return getRegexHighlightUrl;
  },
  highlightWords: function () {
    return highlightWords;
  }
});
var escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp: function (v) {
    escapeRegExp = v;
  }
}, 0);

var checkHighlightedWordsInUrls = function (msg, urlRegex) {
  return msg.match(urlRegex);
};

var removeHighlightedUrls = function (msg, highlight, urlMatches) {
  var highlightRegex = new RegExp(highlight, 'gmi');
  return urlMatches.reduce(function (msg, match) {
    var withTemplate = match.replace(highlightRegex, "<span class=\"highlight-text\">" + highlight + "</span>");
    var regexWithTemplate = new RegExp(withTemplate, 'i');
    return msg.replace(regexWithTemplate, match);
  }, msg);
};

var highlightTemplate = '$1<span class="highlight-text">$2</span>$3';

var getRegexHighlight = function (highlight) {
  return new RegExp("(^|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(" + escapeRegExp(highlight) + ")($|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(?![^<]*>|[^<>]*<\\/)", 'gmi');
};

var getRegexHighlightUrl = function (highlight) {
  return new RegExp("https?://(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)(" + escapeRegExp(highlight) + ")\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", 'gmi');
};

var highlightWords = function (msg, highlights) {
  return highlights.reduce(function (msg, _ref) {
    var highlight = _ref.highlight,
        regex = _ref.regex,
        urlRegex = _ref.urlRegex;
    var urlMatches = checkHighlightedWordsInUrls(msg, urlRegex);

    if (!urlMatches) {
      return msg.replace(regex, highlightTemplate);
    }

    return removeHighlightedUrls(msg.replace(regex, highlightTemplate), highlight, urlMatches);
  }, msg);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/highlight-words/client/f6c1b5baf0ef486ab976e8185d0630fd2400cfef.map

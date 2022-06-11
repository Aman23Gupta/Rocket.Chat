function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/issuelinks/client/client.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createIssueLinksMessageRenderer: function () {
    return createIssueLinksMessageRenderer;
  }
});

var createIssueLinksMessageRenderer = function (_ref) {
  var template = _ref.template;
  return function (message) {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    message.html = message.html.replace(/(?:^|\s|\n)(#[0-9]+)\b/g, function (match, issueNumber) {
      var url = template.replace('%s', issueNumber.substring(1));
      return match.replace(issueNumber, "<a href=\"" + url + "\" target=\"_blank\">" + issueNumber + "</a>");
    });
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/issuelinks/client/544f83c44054b7d9e7a507ca706f5e29820b1930.map

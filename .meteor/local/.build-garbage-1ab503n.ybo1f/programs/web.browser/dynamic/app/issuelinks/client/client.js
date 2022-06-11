function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/issuelinks/client/client.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createIssueLinksMessageRenderer: () => createIssueLinksMessageRenderer
});

const createIssueLinksMessageRenderer = _ref => {
  let {
    template
  } = _ref;
  return message => {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    message.html = message.html.replace(/(?:^|\s|\n)(#[0-9]+)\b/g, (match, issueNumber) => {
      const url = template.replace('%s', issueNumber.substring(1));
      return match.replace(issueNumber, "<a href=\"".concat(url, "\" target=\"_blank\">").concat(issueNumber, "</a>"));
    });
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/issuelinks/client/eb43447a72e9f5d2fcef1a65bf00823c4189d912.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/colors/client/client.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createHexColorPreviewMessageRenderer: function () {
    return createHexColorPreviewMessageRenderer;
  }
});
module.link("./style.css");

var createHexColorPreviewMessageRenderer = function () {
  return function (message) {
    var _message$html;

    if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
      return message;
    }

    var regex = /(?:^|\s|\n)(#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?)\b/g;
    message.html = message.html.replace(regex, function (match, completeColor) {
      return match.replace(completeColor, "<div class=\"message-color\"><div class=\"message-color-sample\" style=\"background-color:" + completeColor + "\"></div>" + completeColor.toUpperCase() + "</div>");
    });
    return message;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/colors/client/63964af431353d4c743fce6a1599c0af978122f4.map

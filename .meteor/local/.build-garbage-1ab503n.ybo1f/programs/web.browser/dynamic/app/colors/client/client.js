function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/colors/client/client.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createHexColorPreviewMessageRenderer: () => createHexColorPreviewMessageRenderer
});
module.link("./style.css");

const createHexColorPreviewMessageRenderer = () => message => {
  var _message$html;

  if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
    return message;
  }

  const regex = /(?:^|\s|\n)(#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?)\b/g;
  message.html = message.html.replace(regex, (match, completeColor) => match.replace(completeColor, "<div class=\"message-color\"><div class=\"message-color-sample\" style=\"background-color:".concat(completeColor, "\"></div>").concat(completeColor.toUpperCase(), "</div>")));
  return message;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/colors/client/01cd7a40ca3dfd4a0fcf35162844297bffb9d6bf.map

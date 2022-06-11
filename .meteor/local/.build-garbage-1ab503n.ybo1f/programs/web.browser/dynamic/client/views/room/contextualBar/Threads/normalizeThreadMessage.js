function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/normalizeThreadMessage.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  normalizeThreadMessage: () => normalizeThreadMessage
});
let escapeHTML;
module.link("@rocket.chat/string-helpers", {
  escapeHTML(v) {
    escapeHTML = v;
  }

}, 0);
let renderMessageBody;
module.link("../../../../lib/utils/renderMessageBody", {
  renderMessageBody(v) {
    renderMessageBody = v;
  }

}, 1);

const normalizeThreadMessage = _ref => {
  let message = _extends({}, _ref);

  if (message.msg) {
    return renderMessageBody(message).replace(/<br\s?\\?>/g, ' ');
  }

  if (message.attachments) {
    const attachment = message.attachments.find(attachment => attachment.title || attachment.description);

    if (attachment && attachment.description) {
      return escapeHTML(attachment.description);
    }

    if (attachment && attachment.title) {
      return escapeHTML(attachment.title);
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/cacab23ae190589fb8390500ffe3a187df65d43a.map

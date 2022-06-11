function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/normalizeSidebarMessage.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  normalizeSidebarMessage: () => normalizeSidebarMessage
});
let escapeHTML;
module.link("@rocket.chat/string-helpers", {
  escapeHTML(v) {
    escapeHTML = v;
  }

}, 0);
let filterMarkdown;
module.link("../../../app/markdown/lib/markdown", {
  filterMarkdown(v) {
    filterMarkdown = v;
  }

}, 1);

const normalizeSidebarMessage = (message, t) => {
  if (message.msg) {
    return escapeHTML(filterMarkdown(message.msg));
  }

  if (message.attachments) {
    const attachment = message.attachments.find(attachment => attachment.title || attachment.description);

    if (attachment && attachment.description) {
      return escapeHTML(attachment.description);
    }

    if (attachment && attachment.title) {
      return escapeHTML(attachment.title);
    }

    return t('Sent_an_attachment');
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/6cec4ad5a59465aab26882686ca09b22e8ffbd34.map

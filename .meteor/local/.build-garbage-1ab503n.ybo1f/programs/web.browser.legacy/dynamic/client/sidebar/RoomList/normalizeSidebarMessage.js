function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/RoomList/normalizeSidebarMessage.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  normalizeSidebarMessage: function () {
    return normalizeSidebarMessage;
  }
});
var escapeHTML;
module.link("@rocket.chat/string-helpers", {
  escapeHTML: function (v) {
    escapeHTML = v;
  }
}, 0);
var filterMarkdown;
module.link("../../../app/markdown/lib/markdown", {
  filterMarkdown: function (v) {
    filterMarkdown = v;
  }
}, 1);

var normalizeSidebarMessage = function (message, t) {
  if (message.msg) {
    return escapeHTML(filterMarkdown(message.msg));
  }

  if (message.attachments) {
    var attachment = message.attachments.find(function (attachment) {
      return attachment.title || attachment.description;
    });

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
//# sourceMappingURL=/dynamic/client/sidebar/RoomList/3059d609fc708af1ab28011ccbf52c733b9ab5eb.map

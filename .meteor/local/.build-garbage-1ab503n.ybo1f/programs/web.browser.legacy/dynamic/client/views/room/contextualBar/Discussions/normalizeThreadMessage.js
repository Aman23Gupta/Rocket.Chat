function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/normalizeThreadMessage.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
module.export({
  normalizeThreadMessage: function () {
    return normalizeThreadMessage;
  }
});
var escapeHTML;
module.link("@rocket.chat/string-helpers", {
  escapeHTML: function (v) {
    escapeHTML = v;
  }
}, 0);
var renderMessageBody;
module.link("../../../../lib/utils/renderMessageBody", {
  renderMessageBody: function (v) {
    renderMessageBody = v;
  }
}, 1);

var normalizeThreadMessage = function (_ref) {
  var message = _extends({}, _ref);

  if (message.msg) {
    return renderMessageBody(message).replace(/<br\s?\\?>/g, ' ');
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
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/21ab1efbe012dc179ddc34a6dbe8d35b963a25ec.map

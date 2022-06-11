function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/ActionAttachtment.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ActionAttachment: function () {
    return ActionAttachment;
  }
});
var Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var ActionAttachment = function (_ref) {
  var actions = _ref.actions;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    mb: "x4",
    small: true
  }, actions.filter(function (_ref2) {
    var type = _ref2.type,
        msgInChatWindow = _ref2.msg_in_chat_window,
        url = _ref2.url,
        image = _ref2.image_url,
        text = _ref2.text;
    return type === 'button' && (image || text) && (url || msgInChatWindow);
  }).map(function (_ref3, index) {
    var text = _ref3.text,
        url = _ref3.url,
        msgId = _ref3.msgId,
        msg = _ref3.msg,
        _ref3$msg_processing_ = _ref3.msg_processing_type,
        processingType = _ref3$msg_processing_ === void 0 ? 'sendMessage' : _ref3$msg_processing_,
        image = _ref3.image_url;
    var content = image ? /*#__PURE__*/React.createElement(Box, {
      is: "img",
      src: image,
      maxHeight: 200
    }) : text;

    if (url) {
      return /*#__PURE__*/React.createElement(Button, {
        is: "a",
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        key: index,
        small: true
      }, content);
    }

    return /*#__PURE__*/React.createElement(Button, {
      className: "js-actionButton-" + processingType,
      key: index,
      small: true,
      value: msg,
      id: msgId
    }, content);
  }));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/9a479042efea8c23418c11ba9ae1351ee65da1f7.map

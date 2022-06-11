function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/ActionAttachtment.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ActionAttachment: () => ActionAttachment
});
let Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const ActionAttachment = _ref => {
  let {
    actions
  } = _ref;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    mb: "x4",
    small: true
  }, actions.filter(_ref2 => {
    let {
      type,
      msg_in_chat_window: msgInChatWindow,
      url,
      image_url: image,
      text
    } = _ref2;
    return type === 'button' && (image || text) && (url || msgInChatWindow);
  }).map((_ref3, index) => {
    let {
      text,
      url,
      msgId,
      msg,
      msg_processing_type: processingType = 'sendMessage',
      image_url: image
    } = _ref3;
    const content = image ? /*#__PURE__*/React.createElement(Box, {
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
      className: "js-actionButton-".concat(processingType),
      key: index,
      small: true,
      value: msg,
      id: msgId
    }, content);
  }));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/93e34bced280230af369d0fa38da0c914d8af9da.map

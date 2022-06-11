function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/textParsers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let messageParser, modalParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  messageParser(v) {
    messageParser = v;
  },

  modalParser(v) {
    modalParser = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let renderMessageBody;
module.link("../../lib/utils/renderMessageBody", {
  renderMessageBody(v) {
    renderMessageBody = v;
  }

}, 2);

// TODO: move this to fuselage-ui-kit itself
messageParser.text = function () {
  let {
    text,
    type
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (type !== 'mrkdwn') {
    return text;
  }

  return /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: renderMessageBody({
        msg: text
      })
    }
  });
}; // TODO: move this to fuselage-ui-kit itself


modalParser.plainText = function () {
  let {
    text
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return text;
}; // TODO: move this to fuselage-ui-kit itself


modalParser.mrkdwn = _ref => {
  let {
    text
  } = _ref;
  return /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: renderMessageBody({
        msg: text
      })
    }
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/blocks/58686db1d47ccc326b3ebfc8bf68cf3c90e150da.map

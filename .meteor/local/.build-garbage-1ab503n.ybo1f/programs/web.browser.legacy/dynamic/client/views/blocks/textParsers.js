function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/blocks/textParsers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var messageParser, modalParser;
module.link("@rocket.chat/fuselage-ui-kit", {
  messageParser: function (v) {
    messageParser = v;
  },
  modalParser: function (v) {
    modalParser = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var renderMessageBody;
module.link("../../lib/utils/renderMessageBody", {
  renderMessageBody: function (v) {
    renderMessageBody = v;
  }
}, 2);

// TODO: move this to fuselage-ui-kit itself
messageParser.text = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      text = _ref.text,
      type = _ref.type;

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
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      text = _ref2.text;

  return text;
}; // TODO: move this to fuselage-ui-kit itself


modalParser.mrkdwn = function (_ref3) {
  var text = _ref3.text;
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
//# sourceMappingURL=/dynamic/client/views/blocks/467aefda0d4747194c7e410f339f85f5f5fde76a.map

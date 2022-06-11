function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Item.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var isFileAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/Files/FileAttachmentProps", {
  isFileAttachment: function (v) {
    isFileAttachment = v;
  }
}, 1);
var isQuoteAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/MessageQuoteAttachment", {
  isQuoteAttachment: function (v) {
    isQuoteAttachment = v;
  }
}, 2);
var DefaultAttachment;
module.link("./DefaultAttachment", {
  "default": function (v) {
    DefaultAttachment = v;
  }
}, 3);
var FileAttachment;
module.link("./Files", {
  FileAttachment: function (v) {
    FileAttachment = v;
  }
}, 4);
var QuoteAttachment;
module.link("./QuoteAttachment", {
  QuoteAttachment: function (v) {
    QuoteAttachment = v;
  }
}, 5);

var Item = function (_ref) {
  var attachment = _ref.attachment,
      file = _ref.file;

  if (isFileAttachment(attachment) && file) {
    return /*#__PURE__*/React.createElement(FileAttachment, _extends({}, attachment, {
      file: file
    }));
  }

  if (isQuoteAttachment(attachment)) {
    return /*#__PURE__*/React.createElement(QuoteAttachment, attachment);
  }

  return /*#__PURE__*/React.createElement(DefaultAttachment, attachment);
};

module.exportDefault( /*#__PURE__*/memo(Item));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/64ea55dfab9aeea527f9d061ba4c3d8933d3fcd2.map

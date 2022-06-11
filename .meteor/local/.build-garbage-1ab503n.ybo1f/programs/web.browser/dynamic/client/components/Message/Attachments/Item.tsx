function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Item.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let isFileAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/Files/FileAttachmentProps", {
  isFileAttachment(v) {
    isFileAttachment = v;
  }

}, 1);
let isQuoteAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/MessageQuoteAttachment", {
  isQuoteAttachment(v) {
    isQuoteAttachment = v;
  }

}, 2);
let DefaultAttachment;
module.link("./DefaultAttachment", {
  default(v) {
    DefaultAttachment = v;
  }

}, 3);
let FileAttachment;
module.link("./Files", {
  FileAttachment(v) {
    FileAttachment = v;
  }

}, 4);
let QuoteAttachment;
module.link("./QuoteAttachment", {
  QuoteAttachment(v) {
    QuoteAttachment = v;
  }

}, 5);

const Item = _ref => {
  let {
    attachment,
    file
  } = _ref;

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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/ae669bc9acd84d261a4910774b56f0dbe127928a.map

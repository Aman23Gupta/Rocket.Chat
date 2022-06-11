function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/ImageAttachmentProps.ts                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileImageAttachment: function () {
    return isFileImageAttachment;
  }
});

var isFileImageAttachment = function (attachment) {
  return 'image_url' in attachment;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/ab518de77cdb6910b71bb9103a3867652954bd16.map

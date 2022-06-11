function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/ImageAttachmentProps.ts                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileImageAttachment: () => isFileImageAttachment
});

const isFileImageAttachment = attachment => 'image_url' in attachment;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/58fbb89b007c878d5387537e8ad3914430a61a91.map

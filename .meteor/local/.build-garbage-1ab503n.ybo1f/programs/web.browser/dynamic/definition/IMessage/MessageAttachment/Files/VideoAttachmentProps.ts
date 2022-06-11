function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/VideoAttachmentProps.ts                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileVideoAttachment: () => isFileVideoAttachment
});

const isFileVideoAttachment = attachment => 'video_url' in attachment;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/6ea07f66bf7ce10b803ac383c5fbc10746299f8b.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/FileAttachmentProps.ts                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileAttachment: () => isFileAttachment
});

const isFileAttachment = attachment => 'type' in attachment && attachment.type === 'file';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/de1c11a8404974e3d5f3a1e1ebebf31defe91fe4.map

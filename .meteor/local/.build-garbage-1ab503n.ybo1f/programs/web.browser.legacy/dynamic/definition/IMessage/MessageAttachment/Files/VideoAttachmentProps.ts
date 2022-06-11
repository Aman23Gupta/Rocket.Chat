function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/VideoAttachmentProps.ts                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileVideoAttachment: function () {
    return isFileVideoAttachment;
  }
});

var isFileVideoAttachment = function (attachment) {
  return 'video_url' in attachment;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/0473e369a7748c952ce674d9f027b6e811d95fdd.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/AudioAttachmentProps.ts                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileAudioAttachment: function () {
    return isFileAudioAttachment;
  }
});

var isFileAudioAttachment = function (attachment) {
  return 'audio_url' in attachment;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/1d5d3c77fac37ddc608636bd89f78417c4836c36.map

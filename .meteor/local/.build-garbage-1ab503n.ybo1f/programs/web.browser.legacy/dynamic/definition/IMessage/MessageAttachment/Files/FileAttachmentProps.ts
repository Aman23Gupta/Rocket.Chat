function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/Files/FileAttachmentProps.ts                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isFileAttachment: function () {
    return isFileAttachment;
  }
});

var isFileAttachment = function (attachment) {
  return 'type' in attachment && attachment.type === 'file';
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/Files/15940f953b4b6c95bf64fb1bc3c0ae74f270db73.map

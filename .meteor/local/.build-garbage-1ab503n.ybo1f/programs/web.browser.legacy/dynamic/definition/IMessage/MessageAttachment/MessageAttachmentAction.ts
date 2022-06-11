function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/MessageAttachmentAction.ts                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isActionAttachment: function () {
    return isActionAttachment;
  }
});

var isActionAttachment = function (attachment) {
  return 'actions' in attachment;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/b3b92921ef33bcf5378fe1a046dcf7e42eb3a833.map

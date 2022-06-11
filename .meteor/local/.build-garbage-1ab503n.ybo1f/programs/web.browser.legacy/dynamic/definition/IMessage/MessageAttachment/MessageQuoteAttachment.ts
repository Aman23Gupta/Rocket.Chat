function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/MessageQuoteAttachment.ts                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isQuoteAttachment: function () {
    return isQuoteAttachment;
  }
});

var isQuoteAttachment = function (attachment) {
  return 'message_link' in attachment;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/92b162763ff38e726a4e3126c6eda853f9ec6e3d.map

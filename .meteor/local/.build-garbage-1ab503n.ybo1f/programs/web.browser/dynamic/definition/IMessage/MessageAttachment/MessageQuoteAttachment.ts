function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// definition/IMessage/MessageAttachment/MessageQuoteAttachment.ts                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isQuoteAttachment: () => isQuoteAttachment
});

const isQuoteAttachment = attachment => 'message_link' in attachment;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/definition/IMessage/MessageAttachment/ba49ea9436f20554477c339efde369f85082e851.map

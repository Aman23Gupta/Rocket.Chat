function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/MessageList.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  MessageList: () => MessageList
});
let RecordList;
module.link("./RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 0);

class MessageList extends RecordList {
  filter(message) {
    return message._hidden !== true;
  }

  compare(a, b) {
    return a.ts.getTime() - b.ts.getTime();
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/a9bc33078330b52b11af55c6fa31d2f202d7217d.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/MessageList.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 0);
module.export({
  MessageList: function () {
    return MessageList;
  }
});
var RecordList;
module.link("./RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 0);

var MessageList = /*#__PURE__*/function (_RecordList) {
  _inheritsLoose(MessageList, _RecordList);

  function MessageList() {
    return _RecordList.apply(this, arguments) || this;
  }

  var _proto = MessageList.prototype;

  _proto.filter = function () {
    function filter(message) {
      return message._hidden !== true;
    }

    return filter;
  }();

  _proto.compare = function () {
    function compare(a, b) {
      return a.ts.getTime() - b.ts.getTime();
    }

    return compare;
  }();

  return MessageList;
}(RecordList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/0c0e03f41adfa253ff88a8e487d321ed30b0aa57.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/ThreadsList.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _createClass;

module.link("@babel/runtime/helpers/createClass", {
  default: function (v) {
    _createClass = v;
  }
}, 0);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 1);
module.export({
  ThreadsList: function () {
    return ThreadsList;
  }
});
var escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp: function (v) {
    escapeRegExp = v;
  }
}, 0);
var MessageList;
module.link("./MessageList", {
  MessageList: function (v) {
    MessageList = v;
  }
}, 1);

var isThreadMessageInRoom = function (message, rid) {
  return message.rid === rid && typeof message.tcount === 'number';
};

var isThreadFollowedByUser = function (threadMessage, uid) {
  var _threadMessage$replie, _threadMessage$replie2;

  return (_threadMessage$replie = (_threadMessage$replie2 = threadMessage.replies) === null || _threadMessage$replie2 === void 0 ? void 0 : _threadMessage$replie2.includes(uid)) !== null && _threadMessage$replie !== void 0 ? _threadMessage$replie : false;
};

var isThreadUnread = function (threadMessage, tunread) {
  return Boolean(tunread === null || tunread === void 0 ? void 0 : tunread.includes(threadMessage._id));
};

var isThreadTextMatching = function (threadMessage, regex) {
  return regex.test(threadMessage.msg);
};

var ThreadsList = /*#__PURE__*/function (_MessageList) {
  _inheritsLoose(ThreadsList, _MessageList);

  function ThreadsList(_options) {
    var _this;

    _this = _MessageList.call(this) || this;
    _this._options = void 0;
    _this._options = _options;
    return _this;
  }

  var _proto = ThreadsList.prototype;

  _proto.updateFilters = function () {
    function updateFilters(options) {
      this._options = options;
      this.clear();
    }

    return updateFilters;
  }();

  _proto.filter = function () {
    function filter(message) {
      var rid = this._options.rid;

      if (!isThreadMessageInRoom(message, rid)) {
        return false;
      }

      if (this._options.type === 'following') {
        var uid = this._options.uid;

        if (!isThreadFollowedByUser(message, uid)) {
          return false;
        }
      }

      if (this._options.type === 'unread') {
        var tunread = this._options.tunread;

        if (!isThreadUnread(message, tunread)) {
          return false;
        }
      }

      if (this._options.text) {
        var regex = new RegExp(escapeRegExp(this._options.text), 'i');

        if (!isThreadTextMatching(message, regex)) {
          return false;
        }
      }

      return true;
    }

    return filter;
  }();

  _proto.compare = function () {
    function compare(a, b) {
      var _b$tlm, _a$tlm;

      return ((_b$tlm = b.tlm) !== null && _b$tlm !== void 0 ? _b$tlm : b.ts).getTime() - ((_a$tlm = a.tlm) !== null && _a$tlm !== void 0 ? _a$tlm : a.ts).getTime();
    }

    return compare;
  }();

  _createClass(ThreadsList, [{
    key: "options",
    get: function () {
      return this._options;
    }
  }]);

  return ThreadsList;
}(MessageList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/b26cd78c2f3b3ad93bca09c918ff2ce7345e158f.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/ThreadsList.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ThreadsList: () => ThreadsList
});
let escapeRegExp;
module.link("@rocket.chat/string-helpers", {
  escapeRegExp(v) {
    escapeRegExp = v;
  }

}, 0);
let MessageList;
module.link("./MessageList", {
  MessageList(v) {
    MessageList = v;
  }

}, 1);

const isThreadMessageInRoom = (message, rid) => message.rid === rid && typeof message.tcount === 'number';

const isThreadFollowedByUser = (threadMessage, uid) => {
  var _threadMessage$replie, _threadMessage$replie2;

  return (_threadMessage$replie = (_threadMessage$replie2 = threadMessage.replies) === null || _threadMessage$replie2 === void 0 ? void 0 : _threadMessage$replie2.includes(uid)) !== null && _threadMessage$replie !== void 0 ? _threadMessage$replie : false;
};

const isThreadUnread = (threadMessage, tunread) => Boolean(tunread === null || tunread === void 0 ? void 0 : tunread.includes(threadMessage._id));

const isThreadTextMatching = (threadMessage, regex) => regex.test(threadMessage.msg);

class ThreadsList extends MessageList {
  constructor(_options) {
    super();
    this._options = void 0;
    this._options = _options;
  }

  get options() {
    return this._options;
  }

  updateFilters(options) {
    this._options = options;
    this.clear();
  }

  filter(message) {
    const {
      rid
    } = this._options;

    if (!isThreadMessageInRoom(message, rid)) {
      return false;
    }

    if (this._options.type === 'following') {
      const {
        uid
      } = this._options;

      if (!isThreadFollowedByUser(message, uid)) {
        return false;
      }
    }

    if (this._options.type === 'unread') {
      const {
        tunread
      } = this._options;

      if (!isThreadUnread(message, tunread)) {
        return false;
      }
    }

    if (this._options.text) {
      const regex = new RegExp(escapeRegExp(this._options.text), 'i');

      if (!isThreadTextMatching(message, regex)) {
        return false;
      }
    }

    return true;
  }

  compare(a, b) {
    var _b$tlm, _a$tlm;

    return ((_b$tlm = b.tlm) !== null && _b$tlm !== void 0 ? _b$tlm : b.ts).getTime() - ((_a$tlm = a.tlm) !== null && _a$tlm !== void 0 ? _a$tlm : a.ts).getTime();
  }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/2ac9c00245e9a89f1b0364d4f210cd1b498b232e.map

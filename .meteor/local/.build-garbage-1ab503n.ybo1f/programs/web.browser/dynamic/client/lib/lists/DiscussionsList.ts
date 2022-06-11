function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/DiscussionsList.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DiscussionsList: () => DiscussionsList
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

const isDiscussionMessageInRoom = (message, rid) => message.rid === rid && 'drid' in message;

const isDiscussionTextMatching = (discussionMessage, regex) => regex.test(discussionMessage.msg);

class DiscussionsList extends MessageList {
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

    if (!isDiscussionMessageInRoom(message, rid)) {
      return false;
    }

    if (this._options.text) {
      const regex = new RegExp(escapeRegExp(this._options.text), 'i');

      if (!isDiscussionTextMatching(message, regex)) {
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
//# sourceMappingURL=/dynamic/client/lib/lists/d855979710fb0d9efadfbf3f97033dc1fd00142a.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/FilesList.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  FilesList: () => FilesList
});
let MessageList;
module.link("./MessageList", {
  MessageList(v) {
    MessageList = v;
  }

}, 0);

const isFileMessageInRoom = (message, rid) => message.rid === rid && 'rid' in message;

class FilesList extends MessageList {
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

    if (!isFileMessageInRoom(message, rid)) {
      return false;
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
//# sourceMappingURL=/dynamic/client/lib/lists/15ab4c0fe93797ffd7378b83b8d64e2264d4400a.map

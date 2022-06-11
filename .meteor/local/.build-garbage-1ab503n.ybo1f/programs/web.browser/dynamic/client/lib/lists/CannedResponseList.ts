function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/CannedResponseList.ts                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  CannedResponseList: () => CannedResponseList
});
let RecordList;
module.link("./RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 0);

class CannedResponseList extends RecordList {
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

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/55bb7999b15dc4ed22b727edb35a45d7db3220e7.map

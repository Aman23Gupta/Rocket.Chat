function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/FilesList.ts                                                                                       //
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
  FilesList: function () {
    return FilesList;
  }
});
var MessageList;
module.link("./MessageList", {
  MessageList: function (v) {
    MessageList = v;
  }
}, 0);

var isFileMessageInRoom = function (message, rid) {
  return message.rid === rid && 'rid' in message;
};

var FilesList = /*#__PURE__*/function (_MessageList) {
  _inheritsLoose(FilesList, _MessageList);

  function FilesList(_options) {
    var _this;

    _this = _MessageList.call(this) || this;
    _this._options = void 0;
    _this._options = _options;
    return _this;
  }

  var _proto = FilesList.prototype;

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

      if (!isFileMessageInRoom(message, rid)) {
        return false;
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

  _createClass(FilesList, [{
    key: "options",
    get: function () {
      return this._options;
    }
  }]);

  return FilesList;
}(MessageList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/84403c92cbaeff89b7bce571ef0ea0698d9497a9.map

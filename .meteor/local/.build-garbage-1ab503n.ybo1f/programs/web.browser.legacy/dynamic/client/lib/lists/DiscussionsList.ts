function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/DiscussionsList.ts                                                                                 //
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
  DiscussionsList: function () {
    return DiscussionsList;
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

var isDiscussionMessageInRoom = function (message, rid) {
  return message.rid === rid && 'drid' in message;
};

var isDiscussionTextMatching = function (discussionMessage, regex) {
  return regex.test(discussionMessage.msg);
};

var DiscussionsList = /*#__PURE__*/function (_MessageList) {
  _inheritsLoose(DiscussionsList, _MessageList);

  function DiscussionsList(_options) {
    var _this;

    _this = _MessageList.call(this) || this;
    _this._options = void 0;
    _this._options = _options;
    return _this;
  }

  var _proto = DiscussionsList.prototype;

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

      if (!isDiscussionMessageInRoom(message, rid)) {
        return false;
      }

      if (this._options.text) {
        var regex = new RegExp(escapeRegExp(this._options.text), 'i');

        if (!isDiscussionTextMatching(message, regex)) {
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

  _createClass(DiscussionsList, [{
    key: "options",
    get: function () {
      return this._options;
    }
  }]);

  return DiscussionsList;
}(MessageList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/9d13efa49bae9c193d57d16259f712cbefbaaf14.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/lists/CannedResponseList.ts                                                                              //
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
  CannedResponseList: function () {
    return CannedResponseList;
  }
});
var RecordList;
module.link("./RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 0);

var CannedResponseList = /*#__PURE__*/function (_RecordList) {
  _inheritsLoose(CannedResponseList, _RecordList);

  function CannedResponseList(_options) {
    var _this;

    _this = _RecordList.call(this) || this;
    _this._options = void 0;
    _this._options = _options;
    return _this;
  }

  var _proto = CannedResponseList.prototype;

  _proto.updateFilters = function () {
    function updateFilters(options) {
      this._options = options;
      this.clear();
    }

    return updateFilters;
  }();

  _createClass(CannedResponseList, [{
    key: "options",
    get: function () {
      return this._options;
    }
  }]);

  return CannedResponseList;
}(RecordList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/lists/51adb87048a11b7f819a088ce31945176a161563.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/mapMessageFromApi.ts                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["attachments", "tlm", "ts", "_updatedAt"],
    _excluded2 = ["ts"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  mapMessageFromApi: function () {
    return mapMessageFromApi;
  }
});

var mapMessageFromApi = function (_ref) {
  var _ref$attachments = _ref.attachments,
      attachments = _ref$attachments === void 0 ? [] : _ref$attachments,
      tlm = _ref.tlm,
      ts = _ref.ts,
      _updatedAt = _ref._updatedAt,
      message = _objectWithoutProperties(_ref, _excluded);

  return _objectSpread(_objectSpread(_objectSpread({}, message), {}, {
    ts: new Date(ts)
  }, tlm && {
    tlm: new Date(tlm)
  }), {}, {
    _updatedAt: new Date(_updatedAt),
    attachments: attachments.map(function (_ref2) {
      var ts = _ref2.ts,
          attachment = _objectWithoutProperties(_ref2, _excluded2);

      return _objectSpread(_objectSpread({}, ts && {
        ts: new Date(ts)
      }), attachment);
    })
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/b1a93ecda1371074ca70771552fe5684569c34b5.map

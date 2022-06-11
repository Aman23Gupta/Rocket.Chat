function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/lists/useScrollableMessageList.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
module.export({
  useScrollableMessageList: function () {
    return useScrollableMessageList;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var mapMessageFromApi;
module.link("../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi: function (v) {
    mapMessageFromApi = v;
  }
}, 1);
var useScrollableRecordList;
module.link("./useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);

var useScrollableMessageList = function (messageList, fetchMessages, initialItemCount) {
  var fetchItems = useCallback(function () {
    function _callee(start, end) {
      var batchChanges;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(fetchMessages(start, end));

              case 2:
                batchChanges = _context.sent;
                return _context.abrupt("return", _objectSpread(_objectSpread({}, batchChanges.items && {
                  items: batchChanges.items.map(mapMessageFromApi)
                }), batchChanges.itemCount && {
                  itemCount: batchChanges.itemCount
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [fetchMessages]);
  return useScrollableRecordList(messageList, fetchItems, initialItemCount);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/lists/74adc9021f5ad38441b7485e012abfe39914563e.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/useMessagesSent.ts                                               //
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
  useMessagesSent: function () {
    return useMessagesSent;
  }
});
var useQuery;
module.link("react-query", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 0);
var getFromRestApi;
module.link("../../../../lib/getFromRestApi", {
  getFromRestApi: function (v) {
    getFromRestApi = v;
  }
}, 1);
var getPeriodRange;
module.link("../data/periods", {
  getPeriodRange: function (v) {
    getPeriodRange = v;
  }
}, 2);

var useMessagesSent = function (_ref) {
  var period = _ref.period;
  return useQuery(['admin/engagement-dashboard/messages/messages-sent', {
    period: period
  }], function () {
    function _callee() {
      var _getPeriodRange, start, end, response;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getPeriodRange = getPeriodRange(period), start = _getPeriodRange.start, end = _getPeriodRange.end;
                _context.next = 3;
                return _regeneratorRuntime.awrap(getFromRestApi('/v1/engagement-dashboard/messages/messages-sent')({
                  start: start.toISOString(),
                  end: end.toISOString()
                }));

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response ? _objectSpread(_objectSpread({}, response), {}, {
                  start: start,
                  end: end
                }) : undefined);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), {
    refetchInterval: 5 * 60 * 1000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/7a17e415ad44710ac5ef30ff8c013437d9bff62b.map

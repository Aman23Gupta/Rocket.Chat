function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useUsersByTimeOfTheDay.ts                                           //
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
  useUsersByTimeOfTheDay: function () {
    return useUsersByTimeOfTheDay;
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

var useUsersByTimeOfTheDay = function (_ref) {
  var period = _ref.period,
      utc = _ref.utc;
  return useQuery(['admin/engagement-dashboard/users/users-by-time-of-the-day', {
    period: period,
    utc: utc
  }], function () {
    function _callee() {
      var _getPeriodRange, start, end, response;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getPeriodRange = getPeriodRange(period, utc), start = _getPeriodRange.start, end = _getPeriodRange.end;
                _context.next = 3;
                return _regeneratorRuntime.awrap(getFromRestApi('/v1/engagement-dashboard/users/users-by-time-of-the-day-in-a-week')({
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/b009994212e99a61dfc29a4e2fa1e3fff80501e6.map

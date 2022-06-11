function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useNewUsers.ts                                                      //
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
  useNewUsers: function () {
    return useNewUsers;
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

var useNewUsers = function (_ref) {
  var period = _ref.period,
      utc = _ref.utc;
  return useQuery(['admin/engagement-dashboard/users/new', {
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
                return _regeneratorRuntime.awrap(getFromRestApi('/v1/engagement-dashboard/users/new-users')({
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/d7079ec443ce39fd93ef6d8e3f885949a13ad618.map

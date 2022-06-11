function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/channels/useChannelsList.ts                                               //
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
  useChannelsList: function () {
    return useChannelsList;
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

var useChannelsList = function (_ref) {
  var period = _ref.period,
      offset = _ref.offset,
      count = _ref.count;
  return useQuery(['admin/engagement-dashboard/channels/list', {
    period: period,
    offset: offset,
    count: count
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
                return _regeneratorRuntime.awrap(getFromRestApi('/v1/engagement-dashboard/channels/list')({
                  start: start.toISOString(),
                  end: end.toISOString(),
                  offset: offset,
                  count: count
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
    keepPreviousData: true,
    refetchInterval: 5 * 60 * 1000
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/channels/f6ef164c940658df78e246e4a639c14723205595.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/useWeeklyChatActivity.ts                                            //
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
  useWeeklyChatActivity: function () {
    return useWeeklyChatActivity;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useQuery;
module.link("react-query", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 1);
var getFromRestApi;
module.link("../../../../lib/getFromRestApi", {
  getFromRestApi: function (v) {
    getFromRestApi = v;
  }
}, 2);

var useWeeklyChatActivity = function (_ref) {
  var displacement = _ref.displacement,
      utc = _ref.utc;
  return useQuery(['admin/engagement-dashboard/users/weekly-chat-activity', {
    displacement: displacement,
    utc: utc
  }], function () {
    function _callee() {
      var day, response;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                day = (utc ? moment.utc().endOf('day') : moment().endOf('day')).subtract(displacement, 'weeks').toDate();
                _context.next = 3;
                return _regeneratorRuntime.awrap(getFromRestApi('/v1/engagement-dashboard/users/chat-busier/weekly-data')({
                  start: day.toISOString()
                }));

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response ? _objectSpread(_objectSpread({}, response), {}, {
                  day: day
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/0a81b771951f0013d5b602baafad6cd9eedccfdf.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/useUpdateChartData.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  useUpdateChartData: function () {
    return useUpdateChartData;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var updateChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  updateChart: function (v) {
    updateChart = v;
  }
}, 1);

var useUpdateChartData = function (_ref) {
  var context = _ref.context,
      canvas = _ref.canvas,
      init = _ref.init,
      t = _ref.t;
  return useMutableCallback(function () {
    function _callee(label, data) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (context.current) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return _regeneratorRuntime.awrap(init(canvas.current, context.current, t));

              case 3:
                context.current = _context.sent;

              case 4:
                _context.next = 6;
                return _regeneratorRuntime.awrap(updateChart(context.current, label, data));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }());
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/4bcd6f522643b8b99a0021965eb81fa24da0abd1.map

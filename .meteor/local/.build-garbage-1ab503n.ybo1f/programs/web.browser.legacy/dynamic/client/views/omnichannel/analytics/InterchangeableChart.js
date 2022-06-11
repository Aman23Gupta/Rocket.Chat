function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/InterchangeableChart.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["departmentId", "dateRange", "chartName"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useRef, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var drawLineChart;
module.link("../../../../app/livechat/client/lib/chartHandler", {
  drawLineChart: function (v) {
    drawLineChart = v;
  }
}, 2);
var secondsToHHMMSS;
module.link("../../../../app/utils/lib/timeConverter", {
  secondsToHHMMSS: function (v) {
    secondsToHHMMSS = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var Chart;
module.link("../realTimeMonitoring/charts/Chart", {
  "default": function (v) {
    Chart = v;
  }
}, 7);

var getChartTooltips = function (chartName) {
  switch (chartName) {
    case 'Avg_chat_duration':
    case 'Avg_first_response_time':
    case 'Best_first_response_time':
    case 'Avg_response_time':
    case 'Avg_reaction_time':
      return {
        callbacks: {
          title: function (tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          },
          label: function (tooltipItem, data) {
            return secondsToHHMMSS(data.datasets[0].data[tooltipItem.index]);
          }
        }
      };

    default:
      return {};
  }
};

var InterchangeableChart = function (_ref) {
  var departmentId = _ref.departmentId,
      dateRange = _ref.dateRange,
      chartName = _ref.chartName,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var canvas = useRef();
  var context = useRef();
  var start = dateRange.start,
      end = dateRange.end;
  var loadData = useMethod('livechat:getAnalyticsChartData');
  var draw = useMutableCallback(function () {
    function _callee(params) {
      var _params$daterange, _params$daterange2, tooltipCallbacks, result;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                tooltipCallbacks = getChartTooltips(chartName);

                if (!(!(params !== null && params !== void 0 && (_params$daterange = params.daterange) !== null && _params$daterange !== void 0 && _params$daterange.from) || !(params !== null && params !== void 0 && (_params$daterange2 = params.daterange) !== null && _params$daterange2 !== void 0 && _params$daterange2.to))) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return _regeneratorRuntime.awrap(loadData(params));

              case 6:
                result = _context.sent;

                if (!(!(result !== null && result !== void 0 && result.chartLabel) || !(result !== null && result !== void 0 && result.dataLabels) || !(result !== null && result !== void 0 && result.dataPoints))) {
                  _context.next = 9;
                  break;
                }

                throw new Error('Error! fetching chart data. Details: livechat:getAnalyticsChartData => Missing Data');

              case 9:
                _context.next = 11;
                return _regeneratorRuntime.awrap(drawLineChart(canvas.current, context.current, [result.chartLabel], result.dataLabels, [result.dataPoints], {
                  tooltipCallbacks: tooltipCallbacks
                }));

              case 11:
                context.current = _context.sent;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 14]], Promise);
    }

    return _callee;
  }());
  useEffect(function () {
    draw(_objectSpread({
      daterange: {
        from: start,
        to: end
      },
      chartOptions: {
        name: chartName
      }
    }, departmentId && {
      departmentId: departmentId
    }));
  }, [chartName, departmentId, draw, end, start, t, loadData]);
  return /*#__PURE__*/React.createElement(Chart, _extends({
    border: "none",
    pi: "none",
    ref: canvas
  }, props));
};

module.exportDefault(InterchangeableChart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/7362d7d4c8957469eca09110104dac15018488d6.map

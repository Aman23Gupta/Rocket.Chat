function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatsPerAgentChart.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["params", "reloadRef"];

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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
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
}, 0);
var drawLineChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  drawLineChart: function (v) {
    drawLineChart = v;
  }
}, 1);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 3);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);
var Chart;
module.link("./Chart", {
  "default": function (v) {
    Chart = v;
  }
}, 5);
var useUpdateChartData;
module.link("./useUpdateChartData", {
  useUpdateChartData: function (v) {
    useUpdateChartData = v;
  }
}, 6);
var initialData = {
  agents: {}
};

var init = function (canvas, context, t) {
  return drawLineChart(canvas, context, [t('Open'), t('Closed'), t('On_Hold_Chats')], [], [[], []], {
    legends: true,
    anim: true,
    smallTicks: true
  });
};

var ChatsPerAgentChart = function (_ref) {
  var params = _ref.params,
      reloadRef = _ref.reloadRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var canvas = useRef();
  var context = useRef();
  var updateChartData = useUpdateChartData({
    context: context,
    canvas: canvas,
    t: t,
    init: init
  });

  var _useEndpointData = useEndpointData('livechat/analytics/dashboards/charts/chats-per-agent', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current.chatsPerAgentChart = reload;
  var chartData = data !== null && data !== void 0 ? data : initialData;
  useEffect(function () {
    var initChart = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(init(canvas.current, context.current, t));

                case 2:
                  context.current = _context.sent;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    initChart();
  }, [t]);
  useEffect(function () {
    if (state === AsyncStatePhase.RESOLVED) {
      if (chartData && chartData.success) {
        delete chartData.success;
        Object.entries(chartData).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              name = _ref3[0],
              value = _ref3[1];

          updateChartData(name, [value.open, value.closed, value.onhold]);
        });
      }
    }
  }, [chartData, state, t, updateChartData]);
  return /*#__PURE__*/React.createElement(Chart, _extends({
    ref: canvas
  }, props));
};

module.exportDefault(ChatsPerAgentChart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/5ab6ce6fb7009dde1661a14b6758bdc7399a6f10.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatDurationChart.js                                             //
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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
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
var secondsToHHMMSS;
module.link("../../../../../app/utils/lib/timeConverter", {
  secondsToHHMMSS: function (v) {
    secondsToHHMMSS = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var Chart;
module.link("./Chart", {
  "default": function (v) {
    Chart = v;
  }
}, 6);
var getMomentChartLabelsAndData;
module.link("./getMomentChartLabelsAndData", {
  getMomentChartLabelsAndData: function (v) {
    getMomentChartLabelsAndData = v;
  }
}, 7);
var getMomentCurrentLabel;
module.link("./getMomentCurrentLabel", {
  getMomentCurrentLabel: function (v) {
    getMomentCurrentLabel = v;
  }
}, 8);
var useUpdateChartData;
module.link("./useUpdateChartData", {
  useUpdateChartData: function (v) {
    useUpdateChartData = v;
  }
}, 9);

var _getMomentChartLabels = getMomentChartLabelsAndData(),
    _getMomentChartLabels2 = _slicedToArray(_getMomentChartLabels, 2),
    labels = _getMomentChartLabels2[0],
    initialData = _getMomentChartLabels2[1];

var tooltipCallbacks = {
  callbacks: {
    title: function (tooltipItem, data) {
      return data.labels[tooltipItem[0].index];
    },
    label: function (tooltipItem, data) {
      var datasetIndex = tooltipItem.datasetIndex,
          index = tooltipItem.index;
      var _data$datasets$datase = data.datasets[datasetIndex],
          datasetData = _data$datasets$datase.data,
          label = _data$datasets$datase.label;
      return label + ": " + secondsToHHMMSS(datasetData[index]);
    }
  }
};

var init = function (canvas, context, t) {
  return drawLineChart(canvas, context, [t('Avg_chat_duration'), t('Longest_chat_duration')], labels, [initialData, initialData.slice()], {
    legends: true,
    anim: true,
    smallTicks: true,
    displayColors: false,
    tooltipCallbacks: tooltipCallbacks
  });
};

var ChatDurationChart = function (_ref) {
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

  var _useEndpointData = useEndpointData('livechat/analytics/dashboards/charts/timings', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current.chatDurationChart = reload;

  var _ref2 = data !== null && data !== void 0 ? data : {
    chatDuration: {
      avg: 0,
      longest: 0
    }
  },
      _ref2$chatDuration = _ref2.chatDuration,
      avg = _ref2$chatDuration.avg,
      longest = _ref2$chatDuration.longest;

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
      var label = getMomentCurrentLabel();
      updateChartData(label, [avg, longest]);
    }
  }, [avg, longest, state, t, updateChartData]);
  return /*#__PURE__*/React.createElement(Chart, _extends({
    ref: canvas
  }, props));
};

module.exportDefault(ChatDurationChart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/8f8c0c25a801ae01ca8fd47e553f691588f10ef7.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatsChart.js                                                    //
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
var drawDoughnutChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  drawDoughnutChart: function (v) {
    drawDoughnutChart = v;
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
var labels = ['Open', 'Queued', 'On_Hold_Chats', 'Closed'];
var initialData = {
  open: 0,
  queued: 0,
  onhold: 0,
  closed: 0
};

var init = function (canvas, context, t) {
  return drawDoughnutChart(canvas, t('Chats'), context, labels.map(function (l) {
    return t(l);
  }), Object.values(initialData));
};

var ChatsChart = function (_ref) {
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

  var _useEndpointData = useEndpointData('livechat/analytics/dashboards/charts/chats', params),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  reloadRef.current.chatsChart = reload;

  var _ref2 = data !== null && data !== void 0 ? data : initialData,
      open = _ref2.open,
      queued = _ref2.queued,
      closed = _ref2.closed,
      onhold = _ref2.onhold;

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
      updateChartData(t('Open'), [open]);
      updateChartData(t('Closed'), [closed]);
      updateChartData(t('On_Hold_Chats'), [onhold]);
      updateChartData(t('Queued'), [queued]);
    }
  }, [closed, open, queued, onhold, state, t, updateChartData]);
  return /*#__PURE__*/React.createElement(Chart, _extends({
    ref: canvas
  }, props));
};

module.exportDefault(ChatsChart);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/911b92c120badeca30f6c7477afe3b9d226f64cb.map

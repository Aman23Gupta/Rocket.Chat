function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/InterchangeableChart.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["departmentId", "dateRange", "chartName"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useRef, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let drawLineChart;
module.link("../../../../app/livechat/client/lib/chartHandler", {
  drawLineChart(v) {
    drawLineChart = v;
  }

}, 2);
let secondsToHHMMSS;
module.link("../../../../app/utils/lib/timeConverter", {
  secondsToHHMMSS(v) {
    secondsToHHMMSS = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let Chart;
module.link("../realTimeMonitoring/charts/Chart", {
  default(v) {
    Chart = v;
  }

}, 7);

const getChartTooltips = chartName => {
  switch (chartName) {
    case 'Avg_chat_duration':
    case 'Avg_first_response_time':
    case 'Best_first_response_time':
    case 'Avg_response_time':
    case 'Avg_reaction_time':
      return {
        callbacks: {
          title(tooltipItem, data) {
            return data.labels[tooltipItem[0].index];
          },

          label(tooltipItem, data) {
            return secondsToHHMMSS(data.datasets[0].data[tooltipItem.index]);
          }

        }
      };

    default:
      return {};
  }
};

const InterchangeableChart = _ref => {
  let {
    departmentId,
    dateRange,
    chartName
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const canvas = useRef();
  const context = useRef();
  const {
    start,
    end
  } = dateRange;
  const loadData = useMethod('livechat:getAnalyticsChartData');
  const draw = useMutableCallback(async params => {
    try {
      var _params$daterange, _params$daterange2;

      const tooltipCallbacks = getChartTooltips(chartName);

      if (!(params !== null && params !== void 0 && (_params$daterange = params.daterange) !== null && _params$daterange !== void 0 && _params$daterange.from) || !(params !== null && params !== void 0 && (_params$daterange2 = params.daterange) !== null && _params$daterange2 !== void 0 && _params$daterange2.to)) {
        return;
      }

      const result = await loadData(params);

      if (!(result !== null && result !== void 0 && result.chartLabel) || !(result !== null && result !== void 0 && result.dataLabels) || !(result !== null && result !== void 0 && result.dataPoints)) {
        throw new Error('Error! fetching chart data. Details: livechat:getAnalyticsChartData => Missing Data');
      }

      context.current = await drawLineChart(canvas.current, context.current, [result.chartLabel], result.dataLabels, [result.dataPoints], {
        tooltipCallbacks
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  useEffect(() => {
    draw(_objectSpread({
      daterange: {
        from: start,
        to: end
      },
      chartOptions: {
        name: chartName
      }
    }, departmentId && {
      departmentId
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/6f4e2339beee5a0d13da916a8acd112488d852e7.map

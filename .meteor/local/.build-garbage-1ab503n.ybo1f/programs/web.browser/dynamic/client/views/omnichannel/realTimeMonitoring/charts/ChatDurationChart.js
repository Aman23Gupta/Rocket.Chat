function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatDurationChart.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["params", "reloadRef"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
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

}, 0);
let drawLineChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  drawLineChart(v) {
    drawLineChart = v;
  }

}, 1);
let secondsToHHMMSS;
module.link("../../../../../app/utils/lib/timeConverter", {
  secondsToHHMMSS(v) {
    secondsToHHMMSS = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let Chart;
module.link("./Chart", {
  default(v) {
    Chart = v;
  }

}, 6);
let getMomentChartLabelsAndData;
module.link("./getMomentChartLabelsAndData", {
  getMomentChartLabelsAndData(v) {
    getMomentChartLabelsAndData = v;
  }

}, 7);
let getMomentCurrentLabel;
module.link("./getMomentCurrentLabel", {
  getMomentCurrentLabel(v) {
    getMomentCurrentLabel = v;
  }

}, 8);
let useUpdateChartData;
module.link("./useUpdateChartData", {
  useUpdateChartData(v) {
    useUpdateChartData = v;
  }

}, 9);
const [labels, initialData] = getMomentChartLabelsAndData();
const tooltipCallbacks = {
  callbacks: {
    title(tooltipItem, data) {
      return data.labels[tooltipItem[0].index];
    },

    label(tooltipItem, data) {
      const {
        datasetIndex,
        index
      } = tooltipItem;
      const {
        data: datasetData,
        label
      } = data.datasets[datasetIndex];
      return "".concat(label, ": ").concat(secondsToHHMMSS(datasetData[index]));
    }

  }
};

const init = (canvas, context, t) => drawLineChart(canvas, context, [t('Avg_chat_duration'), t('Longest_chat_duration')], labels, [initialData, initialData.slice()], {
  legends: true,
  anim: true,
  smallTicks: true,
  displayColors: false,
  tooltipCallbacks
});

const ChatDurationChart = _ref => {
  let {
    params,
    reloadRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const canvas = useRef();
  const context = useRef();
  const updateChartData = useUpdateChartData({
    context,
    canvas,
    t,
    init
  });
  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/analytics/dashboards/charts/timings', params);
  reloadRef.current.chatDurationChart = reload;
  const {
    chatDuration: {
      avg,
      longest
    }
  } = data !== null && data !== void 0 ? data : {
    chatDuration: {
      avg: 0,
      longest: 0
    }
  };
  useEffect(() => {
    const initChart = async () => {
      context.current = await init(canvas.current, context.current, t);
    };

    initChart();
  }, [t]);
  useEffect(() => {
    if (state === AsyncStatePhase.RESOLVED) {
      const label = getMomentCurrentLabel();
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/bfa882ee869a878d03d6a265d1babb0a1aca9b8a.map

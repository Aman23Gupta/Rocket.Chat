function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatsPerAgentChart.js                                            //
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
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 3);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);
let Chart;
module.link("./Chart", {
  default(v) {
    Chart = v;
  }

}, 5);
let useUpdateChartData;
module.link("./useUpdateChartData", {
  useUpdateChartData(v) {
    useUpdateChartData = v;
  }

}, 6);
const initialData = {
  agents: {}
};

const init = (canvas, context, t) => drawLineChart(canvas, context, [t('Open'), t('Closed'), t('On_Hold_Chats')], [], [[], []], {
  legends: true,
  anim: true,
  smallTicks: true
});

const ChatsPerAgentChart = _ref => {
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
  } = useEndpointData('livechat/analytics/dashboards/charts/chats-per-agent', params);
  reloadRef.current.chatsPerAgentChart = reload;
  const chartData = data !== null && data !== void 0 ? data : initialData;
  useEffect(() => {
    const initChart = async () => {
      context.current = await init(canvas.current, context.current, t);
    };

    initChart();
  }, [t]);
  useEffect(() => {
    if (state === AsyncStatePhase.RESOLVED) {
      if (chartData && chartData.success) {
        delete chartData.success;
        Object.entries(chartData).forEach(_ref2 => {
          let [name, value] = _ref2;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/9f994f4770494c6c2e6df92f06a8c0e4771ee0bb.map

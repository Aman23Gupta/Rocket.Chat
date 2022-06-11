function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/ChatsChart.js                                                    //
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
let drawDoughnutChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  drawDoughnutChart(v) {
    drawDoughnutChart = v;
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
const labels = ['Open', 'Queued', 'On_Hold_Chats', 'Closed'];
const initialData = {
  open: 0,
  queued: 0,
  onhold: 0,
  closed: 0
};

const init = (canvas, context, t) => drawDoughnutChart(canvas, t('Chats'), context, labels.map(l => t(l)), Object.values(initialData));

const ChatsChart = _ref => {
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
  } = useEndpointData('livechat/analytics/dashboards/charts/chats', params);
  reloadRef.current.chatsChart = reload;
  const {
    open,
    queued,
    closed,
    onhold
  } = data !== null && data !== void 0 ? data : initialData;
  useEffect(() => {
    const initChart = async () => {
      context.current = await init(canvas.current, context.current, t);
    };

    initChart();
  }, [t]);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/5e488ac1adb364b1591065b4376591091cb81fd6.map

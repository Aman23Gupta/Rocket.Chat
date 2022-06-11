function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/useUpdateChartData.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUpdateChartData: () => useUpdateChartData
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let updateChart;
module.link("../../../../../app/livechat/client/lib/chartHandler", {
  updateChart(v) {
    updateChart = v;
  }

}, 1);

const useUpdateChartData = _ref => {
  let {
    context,
    canvas,
    init,
    t
  } = _ref;
  return useMutableCallback(async (label, data) => {
    if (!context.current) {
      context.current = await init(canvas.current, context.current, t);
    }

    await updateChart(context.current, label, data);
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/35e379dc335bd1d494575aae794eca6b08e7fc30.map

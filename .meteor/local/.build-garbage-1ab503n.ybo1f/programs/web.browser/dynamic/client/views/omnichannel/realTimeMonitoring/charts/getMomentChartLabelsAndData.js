function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/getMomentChartLabelsAndData.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getMomentChartLabelsAndData: () => getMomentChartLabelsAndData
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);

const getMomentChartLabelsAndData = () => {
  const timingLabels = [];
  const initData = [];
  const today = moment().startOf('day');

  for (let m = today; m.diff(moment(), 'hours') < 0; m.add(1, 'hours')) {
    const hour = m.format('H');
    timingLabels.push("".concat(moment(hour, ['H']).format('hA'), "-").concat(moment((parseInt(hour) + 1) % 24, ['H']).format('hA')));
    initData.push(0);
  }

  return [timingLabels, initData];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/d60eb7313f161584071804185035020e43c349c9.map

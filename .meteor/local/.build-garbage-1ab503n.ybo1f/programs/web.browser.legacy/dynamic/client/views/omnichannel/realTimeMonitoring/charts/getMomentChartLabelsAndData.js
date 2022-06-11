function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/getMomentChartLabelsAndData.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getMomentChartLabelsAndData: function () {
    return getMomentChartLabelsAndData;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);

var getMomentChartLabelsAndData = function () {
  var timingLabels = [];
  var initData = [];
  var today = moment().startOf('day');

  for (var m = today; m.diff(moment(), 'hours') < 0; m.add(1, 'hours')) {
    var hour = m.format('H');
    timingLabels.push(moment(hour, ['H']).format('hA') + "-" + moment((parseInt(hour) + 1) % 24, ['H']).format('hA'));
    initData.push(0);
  }

  return [timingLabels, initData];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/a46db06f8c65bd8ba2a8766f01bc9bd7ecb4d430.map

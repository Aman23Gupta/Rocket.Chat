function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/getMomentCurrentLabel.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getMomentCurrentLabel: function () {
    return getMomentCurrentLabel;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);

var getMomentCurrentLabel = function () {
  var hour = moment(new Date()).format('H');
  return moment(hour, ['H']).format('hA') + "-" + moment((parseInt(hour) + 1) % 24, ['H']).format('hA');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/2f16eaec88cfb08aeb90bfbb80713ac384fb70ac.map

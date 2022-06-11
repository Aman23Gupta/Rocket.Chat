function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/charts/getMomentCurrentLabel.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getMomentCurrentLabel: () => getMomentCurrentLabel
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);

const getMomentCurrentLabel = () => {
  const hour = moment(new Date()).format('H');
  return "".concat(moment(hour, ['H']).format('hA'), "-").concat(moment((parseInt(hour) + 1) % 24, ['H']).format('hA'));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/charts/d889363e099a3f1002344c66a6963a42003d5b1b.map

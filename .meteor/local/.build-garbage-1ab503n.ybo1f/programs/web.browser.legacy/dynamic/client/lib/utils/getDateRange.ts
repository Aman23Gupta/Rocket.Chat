function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/getDateRange.ts                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getDateRange: function () {
    return getDateRange;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);

var getDateRange = function () {
  var today = moment(new Date());
  var start = moment(new Date(today.year(), today.month(), today.date(), 0, 0, 0));
  var end = moment(new Date(today.year(), today.month(), today.date(), 23, 59, 59));
  return {
    start: start.toISOString(),
    end: end.toISOString()
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/203b4a4b164ef271cc1ae14d30dd467a34299df3.map

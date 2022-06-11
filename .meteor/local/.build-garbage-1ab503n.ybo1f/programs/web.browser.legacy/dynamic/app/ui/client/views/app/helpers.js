function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/ui/client/views/app/helpers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  timeAgo: function () {
    return timeAgo;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);

function timeAgo(time, t) {
  var now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();

  if (!time) {
    return;
  }

  var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var isToday = time.getFullYear() >= today.getFullYear() && time.getMonth() >= today.getMonth() && time.getDate() >= today.getDate();
  var wasYesterday = time.getFullYear() >= yesterday.getFullYear() && time.getMonth() >= yesterday.getMonth() && time.getDate() >= yesterday.getDate();
  var todayFormatted = isToday && moment(time).format('LT');
  var yesterdayFormatted = wasYesterday && t('yesterday');
  var beforeFormatted = moment(time).format('MMM D, YYYY');
  return todayFormatted || yesterdayFormatted || beforeFormatted;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/ui/client/views/app/537bbb2ced7cf56d8085f2ed851f1fd648c26038.map

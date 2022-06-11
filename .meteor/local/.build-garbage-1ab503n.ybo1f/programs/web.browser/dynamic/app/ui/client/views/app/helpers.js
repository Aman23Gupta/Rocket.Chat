function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/ui/client/views/app/helpers.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  timeAgo: () => timeAgo
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);

function timeAgo(time, t) {
  let now = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();

  if (!time) {
    return;
  }

  const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const isToday = time.getFullYear() >= today.getFullYear() && time.getMonth() >= today.getMonth() && time.getDate() >= today.getDate();
  const wasYesterday = time.getFullYear() >= yesterday.getFullYear() && time.getMonth() >= yesterday.getMonth() && time.getDate() >= yesterday.getDate();
  const todayFormatted = isToday && moment(time).format('LT');
  const yesterdayFormatted = wasYesterday && t('yesterday');
  const beforeFormatted = moment(time).format('MMM D, YYYY');
  return todayFormatted || yesterdayFormatted || beforeFormatted;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/ui/client/views/app/a82cbb3aebf3f48dfc784a9874a3af436c693756.map

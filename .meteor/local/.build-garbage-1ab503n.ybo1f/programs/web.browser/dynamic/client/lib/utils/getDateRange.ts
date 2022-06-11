function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/utils/getDateRange.ts                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getDateRange: () => getDateRange
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);

const getDateRange = () => {
  const today = moment(new Date());
  const start = moment(new Date(today.year(), today.month(), today.date(), 0, 0, 0));
  const end = moment(new Date(today.year(), today.month(), today.date(), 23, 59, 59));
  return {
    start: start.toISOString(),
    end: end.toISOString()
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/utils/26f1ef792f92d2a423ab8dce45a5c8ba456850e7.map

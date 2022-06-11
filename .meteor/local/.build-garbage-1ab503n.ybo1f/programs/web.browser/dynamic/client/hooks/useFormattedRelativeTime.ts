function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormattedRelativeTime.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormattedRelativeTime: () => useFormattedRelativeTime
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 1);

const useFormattedRelativeTime = timeMs => useMemo(() => {
  moment.relativeTimeThreshold('s', 60);
  moment.relativeTimeThreshold('ss', 0);
  moment.relativeTimeThreshold('m', 60);
  moment.relativeTimeThreshold('h', 24);
  moment.relativeTimeThreshold('d', 31);
  moment.relativeTimeThreshold('M', 12);
  return moment.duration(timeMs).humanize();
}, [timeMs]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/cadaccff22011f8bf83f8606df965b9856cd361a.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormattedRelativeTime.ts                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormattedRelativeTime: function () {
    return useFormattedRelativeTime;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);

var useFormattedRelativeTime = function (timeMs) {
  return useMemo(function () {
    moment.relativeTimeThreshold('s', 60);
    moment.relativeTimeThreshold('ss', 0);
    moment.relativeTimeThreshold('m', 60);
    moment.relativeTimeThreshold('h', 24);
    moment.relativeTimeThreshold('d', 31);
    moment.relativeTimeThreshold('M', 12);
    return moment.duration(timeMs).humanize();
  }, [timeMs]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/39ed275660d31ff7a481302b538d649caec4ce7a.map

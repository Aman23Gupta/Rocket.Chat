function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useUTCClock.ts                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUTCClock: function () {
    return useUTCClock;
  }
});
var useTimezoneTime;
module.link("./useTimezoneTime", {
  useTimezoneTime: function (v) {
    useTimezoneTime = v;
  }
}, 0);

var useUTCClock = function (utcOffset) {
  var time = useTimezoneTime(utcOffset, 10000);
  return time + " (UTC " + utcOffset + ")";
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/6ca0e11c72c862f6e32916b5d16a53c0fa37f0a5.map

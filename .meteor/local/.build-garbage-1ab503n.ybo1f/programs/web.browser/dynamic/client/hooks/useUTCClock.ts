function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useUTCClock.ts                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useUTCClock: () => useUTCClock
});
let useTimezoneTime;
module.link("./useTimezoneTime", {
  useTimezoneTime(v) {
    useTimezoneTime = v;
  }

}, 0);

const useUTCClock = utcOffset => {
  const time = useTimezoneTime(utcOffset, 10000);
  return "".concat(time, " (UTC ").concat(utcOffset, ")");
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/bb494cec448b9e382d1dff9bd59e997208b73f5e.map

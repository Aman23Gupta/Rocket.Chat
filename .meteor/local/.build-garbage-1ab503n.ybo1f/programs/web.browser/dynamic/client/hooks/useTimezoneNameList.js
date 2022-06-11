function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimezoneNameList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimezoneNameList: () => useTimezoneNameList
});
let moment;
module.link("moment-timezone", {
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

const useTimezoneNameList = () => useMemo(() => moment.tz.names(), []);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/82418f8cdf4b5d558d94b12e570473e83116916f.map

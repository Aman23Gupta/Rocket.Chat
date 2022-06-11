function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimezoneNameList.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimezoneNameList: function () {
    return useTimezoneNameList;
  }
});
var moment;
module.link("moment-timezone", {
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

var useTimezoneNameList = function () {
  return useMemo(function () {
    return moment.tz.names();
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/d0c3a54998ebf3f3fe5680683e7e8d2ec7c56853.map

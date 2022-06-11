function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimeFromNow.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimeFromNow: function () {
    return useTimeFromNow;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);

var useTimeFromNow = function (withSuffix) {
  return useCallback(function (date) {
    return moment(date).fromNow(!withSuffix);
  }, [withSuffix]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/f25d6eab3910078871b47bcf14d2756a286d6c6d.map

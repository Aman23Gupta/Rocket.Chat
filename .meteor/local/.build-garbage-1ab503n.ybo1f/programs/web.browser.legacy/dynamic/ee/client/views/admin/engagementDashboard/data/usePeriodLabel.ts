function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/usePeriodLabel.ts                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  usePeriodLabel: function () {
    return usePeriodLabel;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var getPeriod;
module.link("./periods", {
  getPeriod: function (v) {
    getPeriod = v;
  }
}, 2);

var usePeriodLabel = function (period) {
  var t = useTranslation();
  return useMemo(function () {
    return t.apply(void 0, _toConsumableArray(getPeriod(period).label));
  }, [period, t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/cca42937e77e98bcfe54f00e6c6e59278c8497f7.map

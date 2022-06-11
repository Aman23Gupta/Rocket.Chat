function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useLocalePercentage.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useLocalePercentage: function () {
    return useLocalePercentage;
  }
});
var useLanguage;
module.link("../contexts/TranslationContext", {
  useLanguage: function (v) {
    useLanguage = v;
  }
}, 0);
var getLocalePercentage;
module.link("../lib/getLocalePercentage", {
  getLocalePercentage: function (v) {
    getLocalePercentage = v;
  }
}, 1);

var useLocalePercentage = function (total, fraction, decimalCount) {
  var locale = useLanguage();
  return getLocalePercentage(locale, total, fraction, decimalCount);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/7101a8a8d4f9e2c7f9101324d1d8233c281f28e9.map

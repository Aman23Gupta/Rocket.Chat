function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useLocalePercentage.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useLocalePercentage: () => useLocalePercentage
});
let useLanguage;
module.link("../contexts/TranslationContext", {
  useLanguage(v) {
    useLanguage = v;
  }

}, 0);
let getLocalePercentage;
module.link("../lib/getLocalePercentage", {
  getLocalePercentage(v) {
    getLocalePercentage = v;
  }

}, 1);

const useLocalePercentage = (total, fraction, decimalCount) => {
  const locale = useLanguage();
  return getLocalePercentage(locale, total, fraction, decimalCount);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/b53220f37842a7e3a756b9e0df99cb65a22c106f.map

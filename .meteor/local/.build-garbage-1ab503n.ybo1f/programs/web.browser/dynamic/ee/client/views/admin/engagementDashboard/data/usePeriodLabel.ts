function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/data/usePeriodLabel.ts                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePeriodLabel: () => usePeriodLabel
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let getPeriod;
module.link("./periods", {
  getPeriod(v) {
    getPeriod = v;
  }

}, 2);

const usePeriodLabel = period => {
  const t = useTranslation();
  return useMemo(() => t(...getPeriod(period).label), [period, t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/data/1ce5ee669986b001d5bdb4cdb55170fe326766ad.map

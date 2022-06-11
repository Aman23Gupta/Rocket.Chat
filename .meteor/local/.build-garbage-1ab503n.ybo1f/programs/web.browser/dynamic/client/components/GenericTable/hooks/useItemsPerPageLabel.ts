function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/hooks/useItemsPerPageLabel.ts                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useItemsPerPageLabel: () => useItemsPerPageLabel
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);

const useItemsPerPageLabel = () => {
  const t = useTranslation();
  return useCallback(() => t('Items_per_page:'), [t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/hooks/8280ec136a8d03b18b9bf6f21da5739c095788c3.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useScopeDict.ts                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useScopeDict: () => useScopeDict
});
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 0);

const useScopeDict = (scope, departmentName) => {
  const t = useTranslation();
  const dict = {
    global: t('Public'),
    user: t('Private')
  };
  return dict[scope] || departmentName;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/434c26d224d1d0d8962b416bb44bc83f467d94b0.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useScopeDict.ts                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useScopeDict: function () {
    return useScopeDict;
  }
});
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 0);

var useScopeDict = function (scope, departmentName) {
  var t = useTranslation();
  var dict = {
    global: t('Public'),
    user: t('Private')
  };
  return dict[scope] || departmentName;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/c0bace0b439980326772f4192fe9d60c95328fca.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useQueryOptions.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useQueryOptions: () => useQueryOptions
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 1);
let useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 2);

const useQueryOptions = () => {
  const sortBy = useUserPreference('sidebarSortby');
  const showRealName = useSetting('UI_Use_Real_Name');
  return useMemo(() => ({
    sort: _objectSpread(_objectSpread({}, sortBy === 'activity' && {
      lm: -1
    }), sortBy !== 'activity' && _objectSpread(_objectSpread({}, showRealName && {
      lowerCaseFName: /descending/.test(sortBy) ? -1 : 1
    }), !showRealName && {
      lowerCaseName: /descending/.test(sortBy) ? -1 : 1
    }))
  }), [sortBy, showRealName]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/1b3e10933e146380a127c1512bb405e8e55d6d1f.map

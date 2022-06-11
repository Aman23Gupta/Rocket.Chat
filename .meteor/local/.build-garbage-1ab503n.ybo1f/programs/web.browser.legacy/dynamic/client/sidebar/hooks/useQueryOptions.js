function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useQueryOptions.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
module.export({
  useQueryOptions: function () {
    return useQueryOptions;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 1);
var useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 2);

var useQueryOptions = function () {
  var sortBy = useUserPreference('sidebarSortby');
  var showRealName = useSetting('UI_Use_Real_Name');
  return useMemo(function () {
    return {
      sort: _objectSpread(_objectSpread({}, sortBy === 'activity' && {
        lm: -1
      }), sortBy !== 'activity' && _objectSpread(_objectSpread({}, showRealName && {
        lowerCaseFName: /descending/.test(sortBy) ? -1 : 1
      }), !showRealName && {
        lowerCaseName: /descending/.test(sortBy) ? -1 : 1
      }))
    };
  }, [sortBy, showRealName]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/1221ee382ff3511995ff9e4374f73747cc4f138c.map

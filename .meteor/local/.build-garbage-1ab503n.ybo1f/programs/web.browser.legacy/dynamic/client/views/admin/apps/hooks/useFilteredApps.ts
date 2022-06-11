function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useFilteredApps.ts                                                                    //
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
  useFilteredApps: function () {
    return useFilteredApps;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var AsyncStatePhase;
module.link("../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 1);
var filterAppByCategories;
module.link("../helpers/filterAppByCategories", {
  filterAppByCategories: function (v) {
    filterAppByCategories = v;
  }
}, 2);
var filterAppByText;
module.link("../helpers/filterAppByText", {
  filterAppByText: function (v) {
    filterAppByText = v;
  }
}, 3);

var useFilteredApps = function (_ref) {
  var appsData = _ref.appsData,
      text = _ref.text,
      sortDirection = _ref.sortDirection,
      current = _ref.current,
      _ref$categories = _ref.categories,
      categories = _ref$categories === void 0 ? [] : _ref$categories,
      itemsPerPage = _ref.itemsPerPage;
  var value = useMemo(function () {
    if (appsData.value === undefined) {
      return undefined;
    }

    var apps = appsData.value.apps;
    var filtered = apps;
    var shouldShowSearchText = true;

    if (Boolean(categories.length) && Boolean(text)) {
      filtered = apps.filter(function (app) {
        return filterAppByCategories(app, categories);
      }).filter(function (_ref2) {
        var name = _ref2.name;
        return filterAppByText(name, text);
      });
      shouldShowSearchText = true;
    }

    if (Boolean(categories.length) && !text) {
      filtered = apps.filter(function (app) {
        return filterAppByCategories(app, categories);
      });
      shouldShowSearchText = false;
    }

    if (!categories.length && Boolean(text)) {
      filtered = apps.filter(function (_ref3) {
        var name = _ref3.name;
        return filterAppByText(name, text);
      });
      shouldShowSearchText = true;
    }

    if (sortDirection === 'desc') {
      filtered.reverse();
    }

    var total = filtered.length;
    var offset = current > total ? 0 : current;
    var end = current + itemsPerPage;
    var slice = filtered.slice(offset, end);
    return {
      items: slice,
      offset: offset,
      total: apps.length,
      count: slice.length,
      shouldShowSearchText: shouldShowSearchText
    };
  }, [categories, current, appsData, itemsPerPage, sortDirection, text]);

  if (appsData.phase === AsyncStatePhase.RESOLVED) {
    if (!value) {
      throw new Error('useFilteredApps - Unexpected state');
    }

    return _objectSpread(_objectSpread({}, appsData), {}, {
      value: value
    });
  }

  if (appsData.phase === AsyncStatePhase.UPDATING) {
    throw new Error('useFilteredApps - Unexpected state');
  }

  return _objectSpread(_objectSpread({}, appsData), {}, {
    value: undefined
  });
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/d576d251f3083f30dee678c63cb9c2c6fa8668ba.map

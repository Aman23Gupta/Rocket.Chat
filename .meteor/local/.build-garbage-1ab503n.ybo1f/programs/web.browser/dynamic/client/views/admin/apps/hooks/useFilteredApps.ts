function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useFilteredApps.ts                                                                    //
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
  useFilteredApps: () => useFilteredApps
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);
let AsyncStatePhase;
module.link("../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 1);
let filterAppByCategories;
module.link("../helpers/filterAppByCategories", {
  filterAppByCategories(v) {
    filterAppByCategories = v;
  }

}, 2);
let filterAppByText;
module.link("../helpers/filterAppByText", {
  filterAppByText(v) {
    filterAppByText = v;
  }

}, 3);

const useFilteredApps = _ref => {
  let {
    appsData,
    text,
    sortDirection,
    current,
    categories = [],
    itemsPerPage
  } = _ref;
  const value = useMemo(() => {
    if (appsData.value === undefined) {
      return undefined;
    }

    const {
      apps
    } = appsData.value;
    let filtered = apps;
    let shouldShowSearchText = true;

    if (Boolean(categories.length) && Boolean(text)) {
      filtered = apps.filter(app => filterAppByCategories(app, categories)).filter(_ref2 => {
        let {
          name
        } = _ref2;
        return filterAppByText(name, text);
      });
      shouldShowSearchText = true;
    }

    if (Boolean(categories.length) && !text) {
      filtered = apps.filter(app => filterAppByCategories(app, categories));
      shouldShowSearchText = false;
    }

    if (!categories.length && Boolean(text)) {
      filtered = apps.filter(_ref3 => {
        let {
          name
        } = _ref3;
        return filterAppByText(name, text);
      });
      shouldShowSearchText = true;
    }

    if (sortDirection === 'desc') {
      filtered.reverse();
    }

    const total = filtered.length;
    const offset = current > total ? 0 : current;
    const end = current + itemsPerPage;
    const slice = filtered.slice(offset, end);
    return {
      items: slice,
      offset,
      total: apps.length,
      count: slice.length,
      shouldShowSearchText
    };
  }, [categories, current, appsData, itemsPerPage, sortDirection, text]);

  if (appsData.phase === AsyncStatePhase.RESOLVED) {
    if (!value) {
      throw new Error('useFilteredApps - Unexpected state');
    }

    return _objectSpread(_objectSpread({}, appsData), {}, {
      value
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/dfd5465dfed49004b9d9935baec157b8e41e26d9.map

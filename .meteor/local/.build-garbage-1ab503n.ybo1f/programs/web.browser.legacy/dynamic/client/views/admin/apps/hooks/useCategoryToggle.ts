function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategoryToggle.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  useCategoryToggle: function () {
    return useCategoryToggle;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);

var useCategoryToggle = function (setData) {
  var onSelected = useCallback(function (item) {
    return setData(function (prev) {
      var categories = prev.flatMap(function (group) {
        return group.items;
      });
      var categoriesWithoutAll = categories.filter(function (_ref) {
        var id = _ref.id;
        return id !== 'all';
      });
      var allCategoriesOption = categories.find(function (_ref2) {
        var id = _ref2.id;
        return id === 'all';
      });
      var toggledCategory = categories.find(function (_ref3) {
        var id = _ref3.id;
        return id === item.id;
      });
      var isAllCategoriesToggled = item.id === 'all';

      if (isAllCategoriesToggled) {
        categoriesWithoutAll.forEach(function (currentItem) {
          currentItem.checked = !item.checked;
        });
      }

      if (toggledCategory) {
        toggledCategory.checked = !toggledCategory.checked;
      }

      if (allCategoriesOption && categoriesWithoutAll.some(function (currentCategory) {
        return currentCategory.checked === false;
      })) {
        allCategoriesOption.checked = false;
      }

      return _toConsumableArray(prev);
    });
  }, [setData]);
  return onSelected;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/8048f753c490698c3edb2fcaa2caab4643912d2b.map

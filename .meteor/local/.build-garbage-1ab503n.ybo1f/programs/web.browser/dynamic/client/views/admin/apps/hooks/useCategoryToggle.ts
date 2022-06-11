function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategoryToggle.ts                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCategoryToggle: () => useCategoryToggle
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);

const useCategoryToggle = setData => {
  const onSelected = useCallback(item => setData(prev => {
    const categories = prev.flatMap(group => group.items);
    const categoriesWithoutAll = categories.filter(_ref => {
      let {
        id
      } = _ref;
      return id !== 'all';
    });
    const allCategoriesOption = categories.find(_ref2 => {
      let {
        id
      } = _ref2;
      return id === 'all';
    });
    const toggledCategory = categories.find(_ref3 => {
      let {
        id
      } = _ref3;
      return id === item.id;
    });
    const isAllCategoriesToggled = item.id === 'all';

    if (isAllCategoriesToggled) {
      categoriesWithoutAll.forEach(currentItem => {
        currentItem.checked = !item.checked;
      });
    }

    if (toggledCategory) {
      toggledCategory.checked = !toggledCategory.checked;
    }

    if (allCategoriesOption && categoriesWithoutAll.some(currentCategory => currentCategory.checked === false)) {
      allCategoriesOption.checked = false;
    }

    return [...prev];
  }), [setData]);
  return onSelected;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/7e0a90babe068479bcafec4e3b5165860fe39274.map

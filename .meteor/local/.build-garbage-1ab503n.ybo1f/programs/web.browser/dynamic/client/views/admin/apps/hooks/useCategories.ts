function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/hooks/useCategories.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCategories: () => useCategories
});
let useCallback, useEffect, useMemo, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let Apps;
module.link("../../../../../app/apps/client/orchestrator", {
  Apps(v) {
    Apps = v;
  }

}, 1);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let handleAPIError;
module.link("../helpers", {
  handleAPIError(v) {
    handleAPIError = v;
  }

}, 3);
let useCategoryFlatList;
module.link("./useCategoryFlatList", {
  useCategoryFlatList(v) {
    useCategoryFlatList = v;
  }

}, 4);
let useCategoryToggle;
module.link("./useCategoryToggle", {
  useCategoryToggle(v) {
    useCategoryToggle = v;
  }

}, 5);

const useCategories = () => {
  const t = useTranslation();
  const [categories, setCategories] = useState([]);
  const fetchCategories = useCallback(async () => {
    try {
      const fetchedCategories = await Apps.getCategories();
      const mappedCategories = fetchedCategories.map(currentCategory => ({
        id: currentCategory.id,
        label: currentCategory.title,
        checked: false
      }));
      setCategories([{
        items: [{
          id: 'all',
          label: t('All_categories')
        }]
      }, {
        label: t('Filter_by_category'),
        items: mappedCategories
      }]);
    } catch (e) {
      handleAPIError(e);
    }
  }, [t]);
  useEffect(() => {
    const fetchCategoriesWrapper = async () => {
      await fetchCategories();
    };

    fetchCategoriesWrapper();
  }, [fetchCategories]);
  const onSelected = useCategoryToggle(setCategories);
  const flatCategories = useCategoryFlatList(categories);
  const originalSize = useCategoryFlatList(categories).length;
  const selectedCategories = useMemo(() => flatCategories.filter(category => Boolean(category.checked)), [flatCategories]);
  return [categories, selectedCategories, originalSize === selectedCategories.length ? [] : selectedCategories, onSelected];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/hooks/eea95a9933a28230053acb00d81dc7875013b8a8.map

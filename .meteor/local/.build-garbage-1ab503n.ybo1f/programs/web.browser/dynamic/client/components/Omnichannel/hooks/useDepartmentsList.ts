function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/hooks/useDepartmentsList.ts                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDepartmentsList: () => useDepartmentsList
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useScrollableRecordList;
module.link("../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 3);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 4);
let RecordList;
module.link("../../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 5);

const useDepartmentsList = options => {
  const t = useTranslation();
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const endpoint = 'livechat/department';
  const getDepartments = useEndpoint('GET', endpoint);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      departments,
      total
    } = await getDepartments({
      onlyMyDepartments: "".concat(!!options.onlyMyDepartments),
      text: options.filter,
      offset: start,
      count: end + start,
      sort: "{ \"name\": 1 }",
      excludeDepartmentId: options.excludeDepartmentId
    });
    const items = departments.filter(department => {
      if (options.departmentId && department._id === options.departmentId) {
        return false;
      }

      return true;
    }).map(department => {
      department._updatedAt = new Date(department._updatedAt);
      department.label = department.name;
      department.value = {
        value: department._id,
        label: department.name
      };
      return department;
    });
    options.haveAll && items.unshift({
      label: t('All'),
      value: {
        value: 'all',
        label: t('All')
      },
      _updatedAt: new Date()
    });
    options.haveNone && items.unshift({
      label: t('None'),
      value: {
        value: '',
        label: t('None')
      },
      _updatedAt: new Date()
    });
    return {
      items,
      itemCount: options.departmentId ? total - 1 : total
    };
  }, [getDepartments, options.departmentId, options.filter, options.haveAll, options.onlyMyDepartments, options.haveNone, options.excludeDepartmentId, t]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(itemsList, fetchData, 25);
  return {
    reload,
    itemsList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/hooks/ab16cb742c6fd34f653c0151dde9f8fab44274fb.map

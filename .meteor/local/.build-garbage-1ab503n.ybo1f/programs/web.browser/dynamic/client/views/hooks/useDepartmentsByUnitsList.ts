function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useDepartmentsByUnitsList.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDepartmentsByUnitsList: () => useDepartmentsByUnitsList
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
module.link("../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);

const useDepartmentsByUnitsList = options => {
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const endpoint = "livechat/departments.available-by-unit/".concat(options.unitId || 'none');
  const getDepartments = useEndpoint('GET', endpoint);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      departments,
      total
    } = await getDepartments({
      text: options.filter,
      offset: start,
      count: end + start
    });
    return {
      items: departments.map(department => {
        department._updatedAt = new Date(department._updatedAt);
        department.label = department.name;
        department.value = {
          value: department._id,
          label: department.name
        };
        return department;
      }),
      itemCount: total
    };
  }, [getDepartments, options.filter]);
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
//# sourceMappingURL=/dynamic/client/views/hooks/1cbee0eddc92eb87dd2869169eebca9d80bdc358.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteDepartment.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedSelectFiltered(v) {
    PaginatedSelectFiltered = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, memo, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useRecordList;
module.link("../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let useDepartmentsList;
module.link("./Omnichannel/hooks/useDepartmentsList", {
  useDepartmentsList(v) {
    useDepartmentsList = v;
  }

}, 6);

const AutoCompleteDepartment = props => {
  var _sortedByName$find;

  const {
    value,
    excludeDepartmentId,
    onlyMyDepartments = false,
    onChange = () => {},
    haveAll = false,
    haveNone = false
  } = props;
  const t = useTranslation();
  const [departmentsFilter, setDepartmentsFilter] = useState('');
  const debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);
  const {
    itemsList: departmentsList,
    loadMoreItems: loadMoreDepartments
  } = useDepartmentsList(useMemo(() => ({
    filter: debouncedDepartmentsFilter,
    onlyMyDepartments,
    haveAll,
    haveNone,
    excludeDepartmentId
  }), [debouncedDepartmentsFilter, onlyMyDepartments, haveAll, haveNone, excludeDepartmentId]));
  const {
    phase: departmentsPhase,
    items: departmentsItems,
    itemCount: departmentsTotal
  } = useRecordList(departmentsList);
  const sortedByName = departmentsItems.sort((a, b) => {
    if (a.value.value === 'all') {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  const findValue = value !== undefined && value !== null ? value : '';
  const department = (_sortedByName$find = sortedByName.find(dep => dep._id === (typeof findValue !== 'object' && findValue ? findValue : findValue.value))) === null || _sortedByName$find === void 0 ? void 0 : _sortedByName$find.value;
  return /*#__PURE__*/React.createElement(PaginatedSelectFiltered, {
    withTitle: true,
    value: department,
    onChange: onChange,
    filter: departmentsFilter,
    setFilter: setDepartmentsFilter,
    options: sortedByName,
    placeholder: t('Select_an_option'),
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreDepartments(start, Math.min(50, departmentsTotal))
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteDepartment));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/645ed7c290264c6848398a4a67a93daf5706de17.map

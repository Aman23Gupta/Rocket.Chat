function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteDepartmentMultiple.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedMultiSelectFiltered(v) {
    PaginatedMultiSelectFiltered = v;
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

const AutoCompleteDepartmentMultiple = props => {
  const {
    value,
    onlyMyDepartments = false,
    onChange = () => {}
  } = props;
  const t = useTranslation();
  const [departmentsFilter, setDepartmentsFilter] = useState('');
  const debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);
  const {
    itemsList: departmentsList,
    loadMoreItems: loadMoreDepartments
  } = useDepartmentsList(useMemo(() => ({
    filter: debouncedDepartmentsFilter,
    onlyMyDepartments
  }), [debouncedDepartmentsFilter, onlyMyDepartments]));
  const {
    phase: departmentsPhase,
    items: departmentsItems,
    itemCount: departmentsTotal
  } = useRecordList(departmentsList);
  const sortedByName = departmentsItems.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  return /*#__PURE__*/React.createElement(PaginatedMultiSelectFiltered, {
    withTitle: true,
    value: value,
    onChange: onChange,
    filter: departmentsFilter,
    setFilter: setDepartmentsFilter,
    options: sortedByName,
    width: "100%",
    flexShrink: 0,
    flexGrow: 0,
    placeholder: t('Select_an_option'),
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreDepartments(start, Math.min(50, departmentsTotal))
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteDepartmentMultiple));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/9cb6cf44c99f81bfc7fde01d333ae0602d7947a8.map

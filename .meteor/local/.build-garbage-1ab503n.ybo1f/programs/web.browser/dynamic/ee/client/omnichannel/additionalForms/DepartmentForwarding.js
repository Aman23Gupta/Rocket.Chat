function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/DepartmentForwarding.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DepartmentForwarding: () => DepartmentForwarding
});
let Field, Box, PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Box(v) {
    Box = v;
  },

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
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useDepartmentsList;
module.link("../../../../client/components/Omnichannel/hooks/useDepartmentsList", {
  useDepartmentsList(v) {
    useDepartmentsList = v;
  }

}, 3);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);

const DepartmentForwarding = _ref => {
  let {
    departmentId,
    value,
    handler,
    label
  } = _ref;
  const t = useTranslation();
  const [departmentsFilter, setDepartmentsFilter] = useState('');
  const debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);
  const {
    itemsList: departmentsList,
    loadMoreItems: loadMoreDepartments
  } = useDepartmentsList(useMemo(() => ({
    filter: departmentsFilter,
    departmentId
  }), [departmentId, departmentsFilter]));
  const {
    phase: departmentsPhase,
    items: departmentsItems,
    itemCount: departmentsTotal
  } = useRecordList(departmentsList);
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t(label)), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    w: "100%"
  }, /*#__PURE__*/React.createElement(PaginatedMultiSelectFiltered, {
    withTitle: true,
    maxWidth: "100%",
    w: "100%",
    flexGrow: 1,
    filter: debouncedDepartmentsFilter,
    setFilter: setDepartmentsFilter,
    onChange: handler,
    options: departmentsItems,
    value: value,
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreDepartments(start, Math.min(50, departmentsTotal))
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('List_of_departments_for_forward_description')));
};

module.exportDefault(DepartmentForwarding);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/bb4389e976ad28efd69bdebaecdb76ff4d23392f.map

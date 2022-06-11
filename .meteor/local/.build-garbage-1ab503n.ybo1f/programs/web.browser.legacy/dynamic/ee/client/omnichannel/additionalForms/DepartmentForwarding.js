function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/DepartmentForwarding.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  DepartmentForwarding: function () {
    return DepartmentForwarding;
  }
});
var Field, Box, PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Box: function (v) {
    Box = v;
  },
  PaginatedMultiSelectFiltered: function (v) {
    PaginatedMultiSelectFiltered = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useDepartmentsList;
module.link("../../../../client/components/Omnichannel/hooks/useDepartmentsList", {
  useDepartmentsList: function (v) {
    useDepartmentsList = v;
  }
}, 3);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);

var DepartmentForwarding = function (_ref) {
  var departmentId = _ref.departmentId,
      value = _ref.value,
      handler = _ref.handler,
      label = _ref.label;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      departmentsFilter = _useState2[0],
      setDepartmentsFilter = _useState2[1];

  var debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);

  var _useDepartmentsList = useDepartmentsList(useMemo(function () {
    return {
      filter: departmentsFilter,
      departmentId: departmentId
    };
  }, [departmentId, departmentsFilter])),
      departmentsList = _useDepartmentsList.itemsList,
      loadMoreDepartments = _useDepartmentsList.loadMoreItems;

  var _useRecordList = useRecordList(departmentsList),
      departmentsPhase = _useRecordList.phase,
      departmentsItems = _useRecordList.items,
      departmentsTotal = _useRecordList.itemCount;

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
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreDepartments(start, Math.min(50, departmentsTotal));
    }
  }))), /*#__PURE__*/React.createElement(Field.Hint, null, t('List_of_departments_for_forward_description')));
};

module.exportDefault(DepartmentForwarding);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/656a10f933a73f9b1c8744cf03e96be5b3736efb.map

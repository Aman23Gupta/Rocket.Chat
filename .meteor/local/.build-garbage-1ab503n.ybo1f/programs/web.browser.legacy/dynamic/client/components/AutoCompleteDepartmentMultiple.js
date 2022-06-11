function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteDepartmentMultiple.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var PaginatedMultiSelectFiltered;
module.link("@rocket.chat/fuselage", {
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
var React, memo, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useRecordList;
module.link("../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var useDepartmentsList;
module.link("./Omnichannel/hooks/useDepartmentsList", {
  useDepartmentsList: function (v) {
    useDepartmentsList = v;
  }
}, 6);

var AutoCompleteDepartmentMultiple = function (props) {
  var value = props.value,
      _props$onlyMyDepartme = props.onlyMyDepartments,
      onlyMyDepartments = _props$onlyMyDepartme === void 0 ? false : _props$onlyMyDepartme,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      departmentsFilter = _useState2[0],
      setDepartmentsFilter = _useState2[1];

  var debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);

  var _useDepartmentsList = useDepartmentsList(useMemo(function () {
    return {
      filter: debouncedDepartmentsFilter,
      onlyMyDepartments: onlyMyDepartments
    };
  }, [debouncedDepartmentsFilter, onlyMyDepartments])),
      departmentsList = _useDepartmentsList.itemsList,
      loadMoreDepartments = _useDepartmentsList.loadMoreItems;

  var _useRecordList = useRecordList(departmentsList),
      departmentsPhase = _useRecordList.phase,
      departmentsItems = _useRecordList.items,
      departmentsTotal = _useRecordList.itemCount;

  var sortedByName = departmentsItems.sort(function (a, b) {
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
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreDepartments(start, Math.min(50, departmentsTotal));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteDepartmentMultiple));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/531f39824eac09fe7649f3a73e88079276a5c98d.map

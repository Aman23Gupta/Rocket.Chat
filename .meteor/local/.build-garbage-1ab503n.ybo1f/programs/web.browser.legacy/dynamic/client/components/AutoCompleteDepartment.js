function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteDepartment.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedSelectFiltered: function (v) {
    PaginatedSelectFiltered = v;
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

var AutoCompleteDepartment = function (props) {
  var _sortedByName$find;

  var value = props.value,
      excludeDepartmentId = props.excludeDepartmentId,
      _props$onlyMyDepartme = props.onlyMyDepartments,
      onlyMyDepartments = _props$onlyMyDepartme === void 0 ? false : _props$onlyMyDepartme,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$haveAll = props.haveAll,
      haveAll = _props$haveAll === void 0 ? false : _props$haveAll,
      _props$haveNone = props.haveNone,
      haveNone = _props$haveNone === void 0 ? false : _props$haveNone;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      departmentsFilter = _useState2[0],
      setDepartmentsFilter = _useState2[1];

  var debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);

  var _useDepartmentsList = useDepartmentsList(useMemo(function () {
    return {
      filter: debouncedDepartmentsFilter,
      onlyMyDepartments: onlyMyDepartments,
      haveAll: haveAll,
      haveNone: haveNone,
      excludeDepartmentId: excludeDepartmentId
    };
  }, [debouncedDepartmentsFilter, onlyMyDepartments, haveAll, haveNone, excludeDepartmentId])),
      departmentsList = _useDepartmentsList.itemsList,
      loadMoreDepartments = _useDepartmentsList.loadMoreItems;

  var _useRecordList = useRecordList(departmentsList),
      departmentsPhase = _useRecordList.phase,
      departmentsItems = _useRecordList.items,
      departmentsTotal = _useRecordList.itemCount;

  var sortedByName = departmentsItems.sort(function (a, b) {
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
  var findValue = value !== undefined && value !== null ? value : '';
  var department = (_sortedByName$find = sortedByName.find(function (dep) {
    return dep._id === (_typeof(findValue) !== 'object' && findValue ? findValue : findValue.value);
  })) === null || _sortedByName$find === void 0 ? void 0 : _sortedByName$find.value;
  return /*#__PURE__*/React.createElement(PaginatedSelectFiltered, {
    withTitle: true,
    value: department,
    onChange: onChange,
    filter: departmentsFilter,
    setFilter: setDepartmentsFilter,
    options: sortedByName,
    placeholder: t('Select_an_option'),
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreDepartments(start, Math.min(50, departmentsTotal));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteDepartment));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/a4a2fa399e230d670c7c13d55bb64ee9b7ca5481.map

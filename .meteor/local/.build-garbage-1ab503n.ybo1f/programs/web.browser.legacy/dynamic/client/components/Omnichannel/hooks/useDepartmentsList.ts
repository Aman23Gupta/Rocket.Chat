function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/hooks/useDepartmentsList.ts                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useDepartmentsList: function () {
    return useDepartmentsList;
  }
});
var useCallback, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useScrollableRecordList;
module.link("../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 3);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 4);
var RecordList;
module.link("../../../lib/lists/RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 5);

var useDepartmentsList = function (options) {
  var t = useTranslation();

  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemsList = _useState2[1];

  var reload = useCallback(function () {
    return setItemsList(new RecordList());
  }, []);
  var endpoint = 'livechat/department';
  var getDepartments = useEndpoint('GET', endpoint);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getDepartments, departments, total, items;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getDepartments({
                  onlyMyDepartments: "" + !!options.onlyMyDepartments,
                  text: options.filter,
                  offset: start,
                  count: end + start,
                  sort: "{ \"name\": 1 }",
                  excludeDepartmentId: options.excludeDepartmentId
                }));

              case 2:
                _await$getDepartments = _context.sent;
                departments = _await$getDepartments.departments;
                total = _await$getDepartments.total;
                items = departments.filter(function (department) {
                  if (options.departmentId && department._id === options.departmentId) {
                    return false;
                  }

                  return true;
                }).map(function (department) {
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
                return _context.abrupt("return", {
                  items: items,
                  itemCount: options.departmentId ? total - 1 : total
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getDepartments, options.departmentId, options.filter, options.haveAll, options.onlyMyDepartments, options.haveNone, options.excludeDepartmentId, t]);

  var _useScrollableRecordL = useScrollableRecordList(itemsList, fetchData, 25),
      loadMoreItems = _useScrollableRecordL.loadMoreItems,
      initialItemCount = _useScrollableRecordL.initialItemCount;

  return {
    reload: reload,
    itemsList: itemsList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/hooks/b5ea0a95f63421396eaa85865c6a8f7b071151df.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useDepartmentsByUnitsList.ts                                                                     //
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
  useDepartmentsByUnitsList: function () {
    return useDepartmentsByUnitsList;
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
module.link("../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useScrollableRecordList;
module.link("../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);
var useComponentDidUpdate;
module.link("../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 3);
var RecordList;
module.link("../../lib/lists/RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 4);

var useDepartmentsByUnitsList = function (options) {
  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemsList = _useState2[1];

  var reload = useCallback(function () {
    return setItemsList(new RecordList());
  }, []);
  var endpoint = "livechat/departments.available-by-unit/" + (options.unitId || 'none');
  var getDepartments = useEndpoint('GET', endpoint);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getDepartments, departments, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getDepartments({
                  text: options.filter,
                  offset: start,
                  count: end + start
                }));

              case 2:
                _await$getDepartments = _context.sent;
                departments = _await$getDepartments.departments;
                total = _await$getDepartments.total;
                return _context.abrupt("return", {
                  items: departments.map(function (department) {
                    department._updatedAt = new Date(department._updatedAt);
                    department.label = department.name;
                    department.value = {
                      value: department._id,
                      label: department.name
                    };
                    return department;
                  }),
                  itemCount: total
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getDepartments, options.filter]);

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
//# sourceMappingURL=/dynamic/client/views/hooks/7c51d6b7839b09fcd9349f79d426feb440d547cd.map

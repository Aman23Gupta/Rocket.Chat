function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useCannedResponseList.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
module.export({
  useCannedResponseList: function () {
    return useCannedResponseList;
  }
});
var useCallback, useEffect, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useScrollableRecordList;
module.link("../../../../client/hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);
var useComponentDidUpdate;
module.link("../../../../client/hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 3);
var CannedResponseList;
module.link("../../../../client/lib/lists/CannedResponseList", {
  CannedResponseList: function (v) {
    CannedResponseList = v;
  }
}, 4);

var useCannedResponseList = function (options) {
  var _useState = useState(function () {
    return new CannedResponseList(options);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      cannedList = _useState2[0],
      setCannedList = _useState2[1];

  var reload = useCallback(function () {
    return setCannedList(new CannedResponseList(options));
  }, [options]);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  useEffect(function () {
    if (cannedList.options !== options) {
      cannedList.updateFilters(options);
    }
  }, [cannedList, options]);
  var getCannedResponses = useEndpoint('GET', 'canned-responses');
  var getDepartments = useEndpoint('GET', 'livechat/department');
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getCannedRespo, cannedResponses, total, _await$getDepartments, departments;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getCannedResponses(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, options.filter && {
                  text: options.filter
                }), options.type && ['global', 'user'].find(function (option) {
                  return option === options.type;
                }) && {
                  scope: options.type
                }), options.type && !['global', 'user', 'all'].find(function (option) {
                  return option === options.type;
                }) && {
                  scope: 'department',
                  departmentId: options.type
                }), {}, {
                  offset: start,
                  count: end + start
                })));

              case 2:
                _await$getCannedRespo = _context.sent;
                cannedResponses = _await$getCannedRespo.cannedResponses;
                total = _await$getCannedRespo.total;
                _context.next = 7;
                return _regeneratorRuntime.awrap(getDepartments({
                  text: ''
                }));

              case 7:
                _await$getDepartments = _context.sent;
                departments = _await$getDepartments.departments;
                return _context.abrupt("return", {
                  items: cannedResponses.map(function (cannedResponse) {
                    if (cannedResponse.departmentId) {
                      departments.forEach(function (department) {
                        if (cannedResponse.departmentId === department._id) {
                          cannedResponse.departmentName = department.name;
                        }
                      });
                    }

                    cannedResponse._updatedAt = new Date(cannedResponse._updatedAt);
                    cannedResponse._createdAt = new Date(cannedResponse._createdAt);
                    return cannedResponse;
                  }),
                  itemCount: total
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getCannedResponses, getDepartments, options.filter, options.type]);

  var _useScrollableRecordL = useScrollableRecordList(cannedList, fetchData),
      loadMoreItems = _useScrollableRecordL.loadMoreItems,
      initialItemCount = _useScrollableRecordL.initialItemCount;

  return {
    reload: reload,
    cannedList: cannedList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/c4266ea526cf879e747f6a6f247c5c709d0c8259.map

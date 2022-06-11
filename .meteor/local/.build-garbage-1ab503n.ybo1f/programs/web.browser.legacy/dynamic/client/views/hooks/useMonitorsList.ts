function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useMonitorsList.ts                                                                               //
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
  useMonitorsList: function () {
    return useMonitorsList;
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

var useMonitorsList = function (options) {
  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemsList = _useState2[1];

  var reload = useCallback(function () {
    return setItemsList(new RecordList());
  }, []);
  var endpoint = 'livechat/monitors.list';
  var getMonitors = useEndpoint('GET', endpoint);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getMonitors, monitors, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getMonitors({
                  text: options.filter,
                  offset: start,
                  count: end + start
                }));

              case 2:
                _await$getMonitors = _context.sent;
                monitors = _await$getMonitors.monitors;
                total = _await$getMonitors.total;
                return _context.abrupt("return", {
                  items: monitors.map(function (members) {
                    members._updatedAt = new Date(members._updatedAt);
                    members.label = members.username;
                    members.value = {
                      value: members._id,
                      label: members.username
                    };
                    return members;
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
  }(), [getMonitors, options.filter]);

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
//# sourceMappingURL=/dynamic/client/views/hooks/90122e52efdf0e9284b9da6a5aa5db5c684d5f30.map

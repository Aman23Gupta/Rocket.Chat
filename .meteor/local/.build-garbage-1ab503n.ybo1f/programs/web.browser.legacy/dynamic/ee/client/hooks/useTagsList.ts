function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/hooks/useTagsList.ts                                                                                      //
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
  useTagsList: function () {
    return useTagsList;
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
module.link("../../../client/contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useScrollableRecordList;
module.link("../../../client/hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);
var useComponentDidUpdate;
module.link("../../../client/hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 3);
var RecordList;
module.link("../../../client/lib/lists/RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 4);

var useTagsList = function (options) {
  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemsList = _useState2[1];

  var reload = useCallback(function () {
    return setItemsList(new RecordList());
  }, []);
  var getTags = useEndpoint('GET', 'livechat/tags.list');
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getTags, tags, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getTags({
                  text: options.filter,
                  offset: start,
                  count: end + start
                }));

              case 2:
                _await$getTags = _context.sent;
                tags = _await$getTags.tags;
                total = _await$getTags.total;
                return _context.abrupt("return", {
                  items: tags.map(function (tag) {
                    tag._updatedAt = new Date(tag._updatedAt);
                    tag.label = tag.name;
                    tag.value = {
                      value: tag._id,
                      label: tag.name
                    };
                    return tag;
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
  }(), [getTags, options.filter]);

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
//# sourceMappingURL=/dynamic/ee/client/hooks/417b6dc6306e416c73f95bce52cff77248dbb170.map

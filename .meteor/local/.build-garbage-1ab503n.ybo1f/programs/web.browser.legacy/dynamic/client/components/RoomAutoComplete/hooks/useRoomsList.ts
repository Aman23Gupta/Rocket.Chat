function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomAutoComplete/hooks/useRoomsList.ts                                                            //
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
  useRoomsList: function () {
    return useRoomsList;
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
var useScrollableRecordList;
module.link("../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 3);
var RecordList;
module.link("../../../lib/lists/RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 4);

var useRoomsList = function (options) {
  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      itemsList = _useState2[0],
      setItemsList = _useState2[1];

  var reload = useCallback(function () {
    return setItemsList(new RecordList());
  }, []);
  var endpoint = 'rooms.autocomplete.channelAndPrivate.withPagination';
  var getRooms = useEndpoint('GET', endpoint);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getRooms, rooms, total, items;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getRooms({
                  selector: JSON.stringify({
                    name: options.text || ''
                  }),
                  offset: start,
                  count: start + end,
                  sort: JSON.stringify({
                    name: 1
                  })
                }));

              case 2:
                _await$getRooms = _context.sent;
                rooms = _await$getRooms.items;
                total = _await$getRooms.total;
                items = rooms.map(function (room) {
                  room._updatedAt = new Date(room._updatedAt);
                  room.label = room.name;
                  room.value = room.name;
                  return room;
                });
                return _context.abrupt("return", {
                  items: items,
                  itemCount: total
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [getRooms, options.text]);

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
//# sourceMappingURL=/dynamic/client/components/RoomAutoComplete/hooks/2c5c2c79f4334904ec2a785c40aba8b1da5c7571.map

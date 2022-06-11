function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useMembersList.ts                                                                                //
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
  useMembersList: function () {
    return useMembersList;
  }
});
var useCallback, useMemo, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
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
var getConfig;
module.link("../../lib/utils/getConfig", {
  getConfig: function (v) {
    getConfig = v;
  }
}, 5);
var endpointsByRoomType = {
  d: 'im.members',
  p: 'groups.members',
  c: 'channels.members'
};

var useMembersList = function (options) {
  var getMembers = useEndpoint('GET', endpointsByRoomType[options.roomType]);

  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      membersList = _useState2[0],
      setMembersList = _useState2[1];

  var reload = useCallback(function () {
    return setMembersList(new RecordList());
  }, []);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$getMembers, members, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getMembers(_objectSpread(_objectSpread({
                  roomId: options.rid,
                  offset: start,
                  count: end
                }, options.debouncedText && {
                  filter: options.debouncedText
                }), options.type !== 'all' && {
                  status: [options.type]
                })));

              case 2:
                _await$getMembers = _context.sent;
                members = _await$getMembers.members;
                total = _await$getMembers.total;
                return _context.abrupt("return", {
                  items: members.map(function (members) {
                    members._updatedAt = new Date(members._updatedAt);
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
  }(), [getMembers, options]);

  var _useScrollableRecordL = useScrollableRecordList(membersList, fetchData, useMemo(function () {
    var filesListSize = getConfig('teamsChannelListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, [])),
      loadMoreItems = _useScrollableRecordL.loadMoreItems,
      initialItemCount = _useScrollableRecordL.initialItemCount;

  return {
    reload: reload,
    membersList: membersList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/3358ccd208b210ccee0adb6c9bdb00467fbcde6d.map

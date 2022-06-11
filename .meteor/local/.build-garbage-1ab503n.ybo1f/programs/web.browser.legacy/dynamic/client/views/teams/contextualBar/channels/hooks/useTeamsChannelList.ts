function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/hooks/useTeamsChannelList.ts                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_updatedAt", "lastMessage", "lm", "ts", "jitsiTimeout", "webRtcCallStartTime"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
module.export({
  useTeamsChannelList: function () {
    return useTeamsChannelList;
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
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useScrollableRecordList;
module.link("../../../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList: function (v) {
    useScrollableRecordList = v;
  }
}, 2);
var useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 3);
var RecordList;
module.link("../../../../../lib/lists/RecordList", {
  RecordList: function (v) {
    RecordList = v;
  }
}, 4);
var getConfig;
module.link("../../../../../lib/utils/getConfig", {
  getConfig: function (v) {
    getConfig = v;
  }
}, 5);
var mapMessageFromApi;
module.link("../../../../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi: function (v) {
    mapMessageFromApi = v;
  }
}, 6);

var useTeamsChannelList = function (options) {
  var apiEndPoint = useEndpoint('GET', 'teams.listRooms');

  var _useState = useState(function () {
    return new RecordList();
  }),
      _useState2 = _slicedToArray(_useState, 2),
      teamsChannelList = _useState2[0],
      setTeamsChannelList = _useState2[1];

  var reload = useCallback(function () {
    return setTeamsChannelList(new RecordList());
  }, []);
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  var fetchData = useCallback(function () {
    function _callee(start, end) {
      var _await$apiEndPoint, rooms, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(apiEndPoint({
                  teamId: options.teamId,
                  offset: start,
                  count: end,
                  filter: options.text,
                  type: options.type
                }));

              case 2:
                _await$apiEndPoint = _context.sent;
                rooms = _await$apiEndPoint.rooms;
                total = _await$apiEndPoint.total;
                return _context.abrupt("return", {
                  items: rooms.map(function (_ref) {
                    var _updatedAt = _ref._updatedAt,
                        lastMessage = _ref.lastMessage,
                        lm = _ref.lm,
                        ts = _ref.ts,
                        jitsiTimeout = _ref.jitsiTimeout,
                        webRtcCallStartTime = _ref.webRtcCallStartTime,
                        room = _objectWithoutProperties(_ref, _excluded);

                    return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
                      jitsiTimeout: new Date(jitsiTimeout)
                    }, lm && {
                      lm: new Date(lm)
                    }), ts && {
                      ts: new Date(ts)
                    }), {}, {
                      _updatedAt: new Date(_updatedAt)
                    }, lastMessage && {
                      lastMessage: mapMessageFromApi(lastMessage)
                    }), webRtcCallStartTime && {
                      webRtcCallStartTime: new Date(webRtcCallStartTime)
                    }), room);
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
  }(), [apiEndPoint, options]);

  var _useScrollableRecordL = useScrollableRecordList(teamsChannelList, fetchData, useMemo(function () {
    var filesListSize = getConfig('teamsChannelListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, [])),
      loadMoreItems = _useScrollableRecordL.loadMoreItems,
      initialItemCount = _useScrollableRecordL.initialItemCount;

  return {
    reload: reload,
    teamsChannelList: teamsChannelList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/hooks/755e2db7b8ac18c34e4980e5600ed52de719c3c0.map

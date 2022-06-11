function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/hooks/useFilesList.ts                                                     //
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
  useFilesList: function () {
    return useFilesList;
  }
});
var useCallback, useEffect, useMemo, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
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
var useUserRoom, useUserId;
module.link("../../../../../contexts/UserContext", {
  useUserRoom: function (v) {
    useUserRoom = v;
  },
  useUserId: function (v) {
    useUserId = v;
  }
}, 2);
var useScrollableMessageList;
module.link("../../../../../hooks/lists/useScrollableMessageList", {
  useScrollableMessageList: function (v) {
    useScrollableMessageList = v;
  }
}, 3);
var useStreamUpdatesForMessageList;
module.link("../../../../../hooks/lists/useStreamUpdatesForMessageList", {
  useStreamUpdatesForMessageList: function (v) {
    useStreamUpdatesForMessageList = v;
  }
}, 4);
var useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 5);
var FilesList;
module.link("../../../../../lib/lists/FilesList", {
  FilesList: function (v) {
    FilesList = v;
  }
}, 6);
var getConfig;
module.link("../../../../../lib/utils/getConfig", {
  getConfig: function (v) {
    getConfig = v;
  }
}, 7);

var useFilesList = function (options) {
  var _useState = useState(function () {
    return new FilesList(options);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      filesList = _useState2[0],
      setFilesList = _useState2[1];

  var reload = useCallback(function () {
    return setFilesList(new FilesList(options));
  }, [options]);
  var room = useUserRoom(options.rid);
  var uid = useUserId();
  useComponentDidUpdate(function () {
    options && reload();
  }, [options, reload]);
  useEffect(function () {
    if (filesList.options !== options) {
      filesList.updateFilters(options);
    }
  }, [filesList, options]);
  var roomTypes = {
    c: 'channels.files',
    l: 'channels.files',
    d: 'im.files',
    p: 'groups.files'
  };
  var apiEndPoint = room ? roomTypes[room.t] : 'channels.files';
  var getFiles = useEndpoint('GET', apiEndPoint);
  var fetchMessages = useCallback(function () {
    function _callee(start, end) {
      var _await$getFiles, files, total;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(getFiles({
                  roomId: options.rid,
                  offset: start,
                  count: end,
                  sort: JSON.stringify({
                    uploadedAt: -1
                  }),
                  query: JSON.stringify(_objectSpread({
                    name: {
                      $regex: options.text || '',
                      $options: 'i'
                    }
                  }, options.type !== 'all' && {
                    typeGroup: options.type
                  }))
                }));

              case 2:
                _await$getFiles = _context.sent;
                files = _await$getFiles.files;
                total = _await$getFiles.total;
                return _context.abrupt("return", {
                  items: files,
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
  }(), [getFiles, options.rid, options.type, options.text]);

  var _useScrollableMessage = useScrollableMessageList(filesList, fetchMessages, useMemo(function () {
    var filesListSize = getConfig('discussionListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, [])),
      loadMoreItems = _useScrollableMessage.loadMoreItems,
      initialItemCount = _useScrollableMessage.initialItemCount;

  useStreamUpdatesForMessageList(filesList, uid, options.rid);
  return {
    reload: reload,
    filesList: filesList,
    loadMoreItems: loadMoreItems,
    initialItemCount: initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/hooks/05ce12e9eb5e35f7706ee196186e134b673a6690.map

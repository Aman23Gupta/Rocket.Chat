function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/hooks/useFilesList.ts                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
module.export({
  useFilesList: () => useFilesList
});
let useCallback, useEffect, useMemo, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useUserRoom, useUserId;
module.link("../../../../../contexts/UserContext", {
  useUserRoom(v) {
    useUserRoom = v;
  },

  useUserId(v) {
    useUserId = v;
  }

}, 2);
let useScrollableMessageList;
module.link("../../../../../hooks/lists/useScrollableMessageList", {
  useScrollableMessageList(v) {
    useScrollableMessageList = v;
  }

}, 3);
let useStreamUpdatesForMessageList;
module.link("../../../../../hooks/lists/useStreamUpdatesForMessageList", {
  useStreamUpdatesForMessageList(v) {
    useStreamUpdatesForMessageList = v;
  }

}, 4);
let useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 5);
let FilesList;
module.link("../../../../../lib/lists/FilesList", {
  FilesList(v) {
    FilesList = v;
  }

}, 6);
let getConfig;
module.link("../../../../../lib/utils/getConfig", {
  getConfig(v) {
    getConfig = v;
  }

}, 7);

const useFilesList = options => {
  const [filesList, setFilesList] = useState(() => new FilesList(options));
  const reload = useCallback(() => setFilesList(new FilesList(options)), [options]);
  const room = useUserRoom(options.rid);
  const uid = useUserId();
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  useEffect(() => {
    if (filesList.options !== options) {
      filesList.updateFilters(options);
    }
  }, [filesList, options]);
  const roomTypes = {
    c: 'channels.files',
    l: 'channels.files',
    d: 'im.files',
    p: 'groups.files'
  };
  const apiEndPoint = room ? roomTypes[room.t] : 'channels.files';
  const getFiles = useEndpoint('GET', apiEndPoint);
  const fetchMessages = useCallback(async (start, end) => {
    const {
      files,
      total
    } = await getFiles({
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
    });
    return {
      items: files,
      itemCount: total
    };
  }, [getFiles, options.rid, options.type, options.text]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableMessageList(filesList, fetchMessages, useMemo(() => {
    const filesListSize = getConfig('discussionListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, []));
  useStreamUpdatesForMessageList(filesList, uid, options.rid);
  return {
    reload,
    filesList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/hooks/15a13229cb52acaa1b84045fedf8f9b344031468.map

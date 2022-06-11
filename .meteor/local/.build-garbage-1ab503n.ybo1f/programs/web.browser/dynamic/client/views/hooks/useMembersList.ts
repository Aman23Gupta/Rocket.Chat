function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/hooks/useMembersList.ts                                                                                //
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
  useMembersList: () => useMembersList
});
let useCallback, useMemo, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);
let getConfig;
module.link("../../lib/utils/getConfig", {
  getConfig(v) {
    getConfig = v;
  }

}, 5);
const endpointsByRoomType = {
  d: 'im.members',
  p: 'groups.members',
  c: 'channels.members'
};

const useMembersList = options => {
  const getMembers = useEndpoint('GET', endpointsByRoomType[options.roomType]);
  const [membersList, setMembersList] = useState(() => new RecordList());
  const reload = useCallback(() => setMembersList(new RecordList()), []);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      members,
      total
    } = await getMembers(_objectSpread(_objectSpread({
      roomId: options.rid,
      offset: start,
      count: end
    }, options.debouncedText && {
      filter: options.debouncedText
    }), options.type !== 'all' && {
      status: [options.type]
    }));
    return {
      items: members.map(members => {
        members._updatedAt = new Date(members._updatedAt);
        return members;
      }),
      itemCount: total
    };
  }, [getMembers, options]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(membersList, fetchData, useMemo(() => {
    const filesListSize = getConfig('teamsChannelListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, []));
  return {
    reload,
    membersList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/hooks/21e21c4ca60fd736c1b46b216d6b445350ea6eee.map

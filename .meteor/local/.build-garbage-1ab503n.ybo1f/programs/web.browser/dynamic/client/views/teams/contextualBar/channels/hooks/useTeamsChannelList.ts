function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/hooks/useTeamsChannelList.ts                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_updatedAt", "lastMessage", "lm", "ts", "jitsiTimeout", "webRtcCallStartTime"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  useTeamsChannelList: () => useTeamsChannelList
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
module.link("../../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useScrollableRecordList;
module.link("../../../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 2);
let useComponentDidUpdate;
module.link("../../../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 3);
let RecordList;
module.link("../../../../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 4);
let getConfig;
module.link("../../../../../lib/utils/getConfig", {
  getConfig(v) {
    getConfig = v;
  }

}, 5);
let mapMessageFromApi;
module.link("../../../../../lib/utils/mapMessageFromApi", {
  mapMessageFromApi(v) {
    mapMessageFromApi = v;
  }

}, 6);

const useTeamsChannelList = options => {
  const apiEndPoint = useEndpoint('GET', 'teams.listRooms');
  const [teamsChannelList, setTeamsChannelList] = useState(() => new RecordList());
  const reload = useCallback(() => setTeamsChannelList(new RecordList()), []);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      rooms,
      total
    } = await apiEndPoint({
      teamId: options.teamId,
      offset: start,
      count: end,
      filter: options.text,
      type: options.type
    });
    return {
      items: rooms.map(_ref => {
        let {
          _updatedAt,
          lastMessage,
          lm,
          ts,
          jitsiTimeout,
          webRtcCallStartTime
        } = _ref,
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
    };
  }, [apiEndPoint, options]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(teamsChannelList, fetchData, useMemo(() => {
    const filesListSize = getConfig('teamsChannelListSize');
    return filesListSize ? parseInt(filesListSize, 10) : undefined;
  }, []));
  return {
    reload,
    teamsChannelList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/hooks/18c9087849599b872f1ec2b1f32267b7c553fe90.map

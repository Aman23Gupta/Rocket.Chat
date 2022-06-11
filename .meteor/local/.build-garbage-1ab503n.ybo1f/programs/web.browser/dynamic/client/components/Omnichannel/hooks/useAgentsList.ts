function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/hooks/useAgentsList.ts                                                                //
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
  useAgentsList: () => useAgentsList
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useScrollableRecordList;
module.link("../../../hooks/lists/useScrollableRecordList", {
  useScrollableRecordList(v) {
    useScrollableRecordList = v;
  }

}, 3);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 4);
let RecordList;
module.link("../../../lib/lists/RecordList", {
  RecordList(v) {
    RecordList = v;
  }

}, 5);

const useAgentsList = options => {
  const t = useTranslation();
  const [itemsList, setItemsList] = useState(() => new RecordList());
  const reload = useCallback(() => setItemsList(new RecordList()), []);
  const endpoint = 'livechat/users/agent';
  const getAgents = useEndpoint('GET', endpoint);
  useComponentDidUpdate(() => {
    options && reload();
  }, [options, reload]);
  const fetchData = useCallback(async (start, end) => {
    const {
      users: agents,
      total
    } = await getAgents(_objectSpread(_objectSpread({}, options.text && {
      text: options.text
    }), {}, {
      offset: start,
      count: end + start,
      sort: "{ \"name\": 1 }"
    }));
    const items = agents.map(agent => {
      agent._updatedAt = new Date(agent._updatedAt);
      agent.label = agent.username;
      agent.value = agent._id;
      return agent;
    });
    options.haveAll && items.unshift({
      label: t('All'),
      value: 'all',
      _updatedAt: new Date()
    });
    return {
      items,
      itemCount: total + 1
    };
  }, [getAgents, options.haveAll, options.text, t]);
  const {
    loadMoreItems,
    initialItemCount
  } = useScrollableRecordList(itemsList, fetchData, 25);
  return {
    reload,
    itemsList,
    loadMoreItems,
    initialItemCount
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/hooks/c9384fd9904bef67a8eca281efdaf2a441d1284f.map

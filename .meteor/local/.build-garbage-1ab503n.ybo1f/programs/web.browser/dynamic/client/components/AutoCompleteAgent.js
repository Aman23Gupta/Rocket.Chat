function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteAgent.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedSelectFiltered(v) {
    PaginatedSelectFiltered = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, memo, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useRecordList;
module.link("../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 3);
let AsyncStatePhase;
module.link("../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 4);
let useAgentsList;
module.link("./Omnichannel/hooks/useAgentsList", {
  useAgentsList(v) {
    useAgentsList = v;
  }

}, 5);

const AutoCompleteAgent = props => {
  const {
    value,
    onChange = () => {},
    haveAll = false
  } = props;
  const [agentsFilter, setAgentsFilter] = useState('');
  const debouncedAgentsFilter = useDebouncedValue(agentsFilter, 500);
  const {
    itemsList: AgentsList,
    loadMoreItems: loadMoreAgents
  } = useAgentsList(useMemo(() => ({
    text: debouncedAgentsFilter,
    haveAll
  }), [debouncedAgentsFilter, haveAll]));
  const {
    phase: agentsPhase,
    items: agentsItems,
    itemCount: agentsTotal
  } = useRecordList(AgentsList);
  const sortedByName = agentsItems.sort((a, b) => {
    if (a.value === 'all') {
      return -1;
    }

    if (a.usename > b.usename) {
      return 1;
    }

    if (a.usename < b.usename) {
      return -1;
    }

    return 0;
  });
  return /*#__PURE__*/React.createElement(PaginatedSelectFiltered, {
    value: value,
    onChange: onChange,
    flexShrink: 0,
    filter: agentsFilter,
    setFilter: setAgentsFilter,
    options: sortedByName,
    endReached: agentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreAgents(start, Math.min(50, agentsTotal))
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteAgent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/20091e61d5612791570ce6301660b2dd9d9344d0.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/AutoCompleteAgent.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  PaginatedSelectFiltered: function (v) {
    PaginatedSelectFiltered = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, memo, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useRecordList;
module.link("../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 3);
var AsyncStatePhase;
module.link("../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 4);
var useAgentsList;
module.link("./Omnichannel/hooks/useAgentsList", {
  useAgentsList: function (v) {
    useAgentsList = v;
  }
}, 5);

var AutoCompleteAgent = function (props) {
  var value = props.value,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$haveAll = props.haveAll,
      haveAll = _props$haveAll === void 0 ? false : _props$haveAll;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      agentsFilter = _useState2[0],
      setAgentsFilter = _useState2[1];

  var debouncedAgentsFilter = useDebouncedValue(agentsFilter, 500);

  var _useAgentsList = useAgentsList(useMemo(function () {
    return {
      text: debouncedAgentsFilter,
      haveAll: haveAll
    };
  }, [debouncedAgentsFilter, haveAll])),
      AgentsList = _useAgentsList.itemsList,
      loadMoreAgents = _useAgentsList.loadMoreItems;

  var _useRecordList = useRecordList(AgentsList),
      agentsPhase = _useRecordList.phase,
      agentsItems = _useRecordList.items,
      agentsTotal = _useRecordList.itemCount;

  var sortedByName = agentsItems.sort(function (a, b) {
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
    endReached: agentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreAgents(start, Math.min(50, agentsTotal));
    }
  });
};

module.exportDefault( /*#__PURE__*/memo(AutoCompleteAgent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/dfe01a77c13344a11035426e517c95968aaf7f51.map

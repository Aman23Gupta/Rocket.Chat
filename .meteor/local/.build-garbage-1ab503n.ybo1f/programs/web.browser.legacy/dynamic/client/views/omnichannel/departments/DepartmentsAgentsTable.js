function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/DepartmentsAgentsTable.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  }
}, 0);
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var AddAgent;
module.link("./AddAgent", {
  "default": function (v) {
    AddAgent = v;
  }
}, 4);
var AgentRow;
module.link("./AgentRow", {
  "default": function (v) {
    AgentRow = v;
  }
}, 5);

function DepartmentsAgentsTable(_ref) {
  var agents = _ref.agents,
      setAgentListFinal = _ref.setAgentListFinal,
      setAgentsAdded = _ref.setAgentsAdded,
      setAgentsRemoved = _ref.setAgentsRemoved;
  var t = useTranslation();

  var _useState = useState(agents && JSON.parse(JSON.stringify(agents)) || []),
      _useState2 = _slicedToArray(_useState, 2),
      agentList = _useState2[0],
      setAgentList = _useState2[1];

  useEffect(function () {
    return setAgentListFinal(agentList);
  }, [agentList, setAgentListFinal]);
  var mediaQuery = useMediaQuery('(min-width: 1024px)');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AddAgent, {
    agentList: agentList,
    setAgentList: setAgentList,
    setAgentsAdded: setAgentsAdded
  }), /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name',
      w: "x200"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'Count',
      w: "x140"
    }, t('Count')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'Order',
      w: "x120"
    }, t('Order')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'remove',
      w: "x40"
    }, t('Remove'))),
    results: agentList,
    total: agentList === null || agentList === void 0 ? void 0 : agentList.length,
    pi: "x24"
  }, function (props) {
    return /*#__PURE__*/React.createElement(AgentRow, _extends({
      key: props._id,
      mediaQuery: mediaQuery,
      agentList: agentList,
      setAgentList: setAgentList,
      setAgentsRemoved: setAgentsRemoved
    }, props));
  }));
}

module.exportDefault(DepartmentsAgentsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/a60b498766850182d7974704d3061f112a3a661d.map

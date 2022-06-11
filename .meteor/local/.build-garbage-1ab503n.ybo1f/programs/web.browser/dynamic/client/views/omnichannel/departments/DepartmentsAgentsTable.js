function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/DepartmentsAgentsTable.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let useMediaQuery;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  }

}, 0);
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let AddAgent;
module.link("./AddAgent", {
  default(v) {
    AddAgent = v;
  }

}, 4);
let AgentRow;
module.link("./AgentRow", {
  default(v) {
    AgentRow = v;
  }

}, 5);

function DepartmentsAgentsTable(_ref) {
  let {
    agents,
    setAgentListFinal,
    setAgentsAdded,
    setAgentsRemoved
  } = _ref;
  const t = useTranslation();
  const [agentList, setAgentList] = useState(agents && JSON.parse(JSON.stringify(agents)) || []);
  useEffect(() => setAgentListFinal(agentList), [agentList, setAgentListFinal]);
  const mediaQuery = useMediaQuery('(min-width: 1024px)');
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
  }, props => /*#__PURE__*/React.createElement(AgentRow, _extends({
    key: props._id,
    mediaQuery: mediaQuery,
    agentList: agentList,
    setAgentList: setAgentList,
    setAgentsRemoved: setAgentsRemoved
  }, props))));
}

module.exportDefault(DepartmentsAgentsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/01e9020726471350c3eeeab19d0fdefd04f50869.map

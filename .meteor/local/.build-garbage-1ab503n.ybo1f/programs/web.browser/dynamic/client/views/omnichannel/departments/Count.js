function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/Count.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, NumberInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  NumberInput(v) {
    NumberInput = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

function Count(_ref) {
  let {
    agentId,
    setAgentList,
    agentList
  } = _ref;
  const t = useTranslation();
  const [agentCount, setAgentCount] = useState(agentList.find(agent => agent.agentId === agentId).count || 0);
  const handleCount = useMutableCallback(async e => {
    const countValue = Number(e.currentTarget.value);
    setAgentCount(countValue);
    setAgentList(agentList.map(agent => {
      if (agent.agentId === agentId) {
        agent.count = countValue;
      }

      return agent;
    }));
  });
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(NumberInput, {
    flexShrink: 1,
    key: "".concat(agentId, "-count"),
    title: t('Count'),
    value: agentCount,
    onChange: handleCount
  }));
}

module.exportDefault(Count);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/eec24cf8961cb2aa11d451789eea58815b8e8ee5.map

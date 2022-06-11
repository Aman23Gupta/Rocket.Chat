function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/Order.js                                                                       //
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

function Order(_ref) {
  let {
    agentId,
    setAgentList,
    agentList
  } = _ref;
  const t = useTranslation();
  const [agentOrder, setAgentOrder] = useState(agentList.find(agent => agent.agentId === agentId).order || 0);
  const handleOrder = useMutableCallback(async e => {
    const orderValue = Number(e.currentTarget.value);
    setAgentOrder(orderValue);
    setAgentList(agentList.map(agent => {
      if (agent.agentId === agentId) {
        agent.order = orderValue;
      }

      return agent;
    }));
  });
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(NumberInput, {
    flexShrink: 1,
    key: "".concat(agentId, "-order"),
    title: t('Order'),
    value: agentOrder,
    onChange: handleOrder
  }));
}

module.exportDefault(Order);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/44c7207f4f9345ac56346e5f4861a009d2ae66dd.map

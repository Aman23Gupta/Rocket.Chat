function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/AddAgent.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["agentList", "setAgentsAdded", "setAgentList"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let Box, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
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
let AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  default(v) {
    AutoCompleteAgent = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 6);

function AddAgent(_ref) {
  let {
    agentList,
    setAgentsAdded,
    setAgentList
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const [userId, setUserId] = useState();
  const getAgent = useEndpointAction('GET', "livechat/users/agent/".concat(userId));
  const dispatchToastMessage = useToastMessageDispatch();
  const handleAgent = useMutableCallback(e => setUserId(e));
  const handleSave = useMutableCallback(async () => {
    if (!userId) {
      return;
    }

    const {
      user
    } = await getAgent();

    if (agentList.filter(e => e.agentId === user._id).length === 0) {
      setAgentList([_objectSpread(_objectSpread({}, user), {}, {
        agentId: user._id
      }), ...agentList]);
      setUserId();
      setAgentsAdded(agents => [...agents, {
        agentId: user._id
      }]);
    } else {
      dispatchToastMessage({
        type: 'error',
        message: t('This_agent_was_already_selected')
      });
    }
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    alignItems: "center"
  }, props), /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    empty: true,
    value: userId,
    onChange: handleAgent
  }), /*#__PURE__*/React.createElement(Button, {
    disabled: !userId,
    onClick: handleSave,
    mis: "x8",
    primary: true
  }, t('Add')));
}

module.exportDefault(AddAgent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/4a4472f517281cabd114a33f277fec8da02187e5.map

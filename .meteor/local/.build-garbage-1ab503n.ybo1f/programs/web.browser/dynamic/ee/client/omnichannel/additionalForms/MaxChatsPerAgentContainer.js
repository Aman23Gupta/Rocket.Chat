function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgentContainer.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 1);
let MaxChatsPerAgent;
module.link("./MaxChatsPerAgent", {
  default(v) {
    MaxChatsPerAgent = v;
  }

}, 2);

const MaxChatsPerAgentContainer = _ref => {
  let {
    data: {
      livechat: {
        maxNumberSimultaneousChat = ''
      } = {}
    } = {},
    onChange
  } = _ref;
  const {
    values,
    handlers,
    hasUnsavedChanges,
    commit,
    reset
  } = useForm({
    maxNumberSimultaneousChat
  });
  onChange({
    values,
    hasUnsavedChanges,
    commit,
    reset
  });
  return /*#__PURE__*/React.createElement(MaxChatsPerAgent, {
    values: values,
    handlers: handlers
  });
};

module.exportDefault(MaxChatsPerAgentContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/9253dcef847ecbc2c094d508f81a89296cff11c2.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgentContainer.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 1);
var MaxChatsPerAgent;
module.link("./MaxChatsPerAgent", {
  "default": function (v) {
    MaxChatsPerAgent = v;
  }
}, 2);

var MaxChatsPerAgentContainer = function (_ref) {
  var _ref$data = _ref.data;
  _ref$data = _ref$data === void 0 ? {} : _ref$data;
  var _ref$data$livechat = _ref$data.livechat;
  _ref$data$livechat = _ref$data$livechat === void 0 ? {} : _ref$data$livechat;
  var _ref$data$livechat$ma = _ref$data$livechat.maxNumberSimultaneousChat,
      maxNumberSimultaneousChat = _ref$data$livechat$ma === void 0 ? '' : _ref$data$livechat$ma,
      onChange = _ref.onChange;

  var _useForm = useForm({
    maxNumberSimultaneousChat: maxNumberSimultaneousChat
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      commit = _useForm.commit,
      reset = _useForm.reset;

  onChange({
    values: values,
    hasUnsavedChanges: hasUnsavedChanges,
    commit: commit,
    reset: reset
  });
  return /*#__PURE__*/React.createElement(MaxChatsPerAgent, {
    values: values,
    handlers: handlers
  });
};

module.exportDefault(MaxChatsPerAgentContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/c652b30790d0a5e9b15c2c0b3fe6ec08ab1b06f9.map

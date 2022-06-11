function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgentDisplay.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var UserInfo;
module.link("../../../../client/views/room/contextualBar/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 2);

var MaxChatsPerAgentDisplay = function (_ref) {
  var _ref$data = _ref.data;
  _ref$data = _ref$data === void 0 ? {} : _ref$data;
  var _ref$data$livechat = _ref$data.livechat;
  _ref$data$livechat = _ref$data$livechat === void 0 ? {} : _ref$data$livechat;
  var _ref$data$livechat$ma = _ref$data$livechat.maxNumberSimultaneousChat,
      maxNumberSimultaneousChat = _ref$data$livechat$ma === void 0 ? '' : _ref$data$livechat$ma;
  var t = useTranslation();
  return maxNumberSimultaneousChat && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserInfo.Label, null, t('Max_number_of_chats_per_agent')), /*#__PURE__*/React.createElement(UserInfo.Info, null, maxNumberSimultaneousChat));
};

module.exportDefault(MaxChatsPerAgentDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/d6f16ed146a7c8613f1b4053f12ba54e1a78ec93.map

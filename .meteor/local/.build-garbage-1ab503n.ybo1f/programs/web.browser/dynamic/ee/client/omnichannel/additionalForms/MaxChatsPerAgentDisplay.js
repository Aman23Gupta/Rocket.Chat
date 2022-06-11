function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/MaxChatsPerAgentDisplay.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let UserInfo;
module.link("../../../../client/views/room/contextualBar/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 2);

const MaxChatsPerAgentDisplay = _ref => {
  let {
    data: {
      livechat: {
        maxNumberSimultaneousChat = ''
      } = {}
    } = {}
  } = _ref;
  const t = useTranslation();
  return maxNumberSimultaneousChat && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserInfo.Label, null, t('Max_number_of_chats_per_agent')), /*#__PURE__*/React.createElement(UserInfo.Info, null, maxNumberSimultaneousChat));
};

module.exportDefault(MaxChatsPerAgentDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/51425dec368cc3e6a51cf2d393b2121b2f78992f.map

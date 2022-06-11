function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentInfo.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["uid", "children"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  AgentInfo: () => AgentInfo
});
let Box, Margins, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 2);
let FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 3);
let UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 7);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 8);
let UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 9);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 10);
let AgentInfoAction;
module.link("./AgentInfoAction", {
  default(v) {
    AgentInfoAction = v;
  }

}, 11);
const AgentInfo = /*#__PURE__*/memo(function AgentInfo(_ref) {
  let {
    uid,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/users/agent/".concat(uid));
  const eeForms = useSubscription(formsSubscription);
  const {
    useMaxChatsPerAgentDisplay = () => {}
  } = eeForms;
  const MaxChats = useMaxChatsPerAgentDisplay();

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.user) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('User_not_found'));
  }

  const {
    user
  } = data;
  const {
    username,
    statusLivechat,
    status: userStatus
  } = user;
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    p: "x24"
  }, props), /*#__PURE__*/React.createElement(Box, {
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(UserInfo.Avatar, {
    size: 'x332',
    username: username
  })), /*#__PURE__*/React.createElement(ButtonGroup, {
    mi: "neg-x4",
    flexShrink: 0,
    flexWrap: "nowrap",
    withTruncatedText: true,
    justifyContent: "center",
    flexShrink: 0
  }, children), /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x2"
  }, /*#__PURE__*/React.createElement(UserInfo.Username, {
    name: username,
    status: /*#__PURE__*/React.createElement(UserStatus, {
      status: userStatus
    })
  })), statusLivechat && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UserInfo.Label, null, t('Livechat_status')), /*#__PURE__*/React.createElement(UserInfo.Info, null, t(statusLivechat === 'available' ? 'Available' : 'Not_Available'))), MaxChats && /*#__PURE__*/React.createElement(MaxChats, {
    data: user
  })));
});
module.exportDefault(Object.assign(AgentInfo, {
  Action: AgentInfoAction
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/eaef2918abbed872df766b6ad9863ee091c64fb2.map

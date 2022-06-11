function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentInfo.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["uid", "children"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  AgentInfo: function () {
    return AgentInfo;
  }
});
var Box, Margins, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 2);
var FormSkeleton;
module.link("../../../components/Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 3);
var UserStatus;
module.link("../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 7);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 8);
var UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 9);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 10);
var AgentInfoAction;
module.link("./AgentInfoAction", {
  "default": function (v) {
    AgentInfoAction = v;
  }
}, 11);
var AgentInfo = /*#__PURE__*/memo(function () {
  function AgentInfo(_ref) {
    var uid = _ref.uid,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, _excluded);

    var t = useTranslation();

    var _useEndpointData = useEndpointData("livechat/users/agent/" + uid),
        data = _useEndpointData.value,
        state = _useEndpointData.phase,
        error = _useEndpointData.error;

    var eeForms = useSubscription(formsSubscription);
    var _eeForms$useMaxChatsP = eeForms.useMaxChatsPerAgentDisplay,
        useMaxChatsPerAgentDisplay = _eeForms$useMaxChatsP === void 0 ? function () {} : _eeForms$useMaxChatsP;
    var MaxChats = useMaxChatsPerAgentDisplay();

    if (state === AsyncStatePhase.LOADING) {
      return /*#__PURE__*/React.createElement(FormSkeleton, null);
    }

    if (error || !data || !data.user) {
      return /*#__PURE__*/React.createElement(Box, {
        mbs: "x16"
      }, t('User_not_found'));
    }

    var user = data.user;
    var username = user.username,
        statusLivechat = user.statusLivechat,
        userStatus = user.status;
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
  }

  return AgentInfo;
}());
module.exportDefault(Object.assign(AgentInfo, {
  Action: AgentInfoAction
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/c7b811cb7b3a5dd07ff54582fb1736d44c007b81.map

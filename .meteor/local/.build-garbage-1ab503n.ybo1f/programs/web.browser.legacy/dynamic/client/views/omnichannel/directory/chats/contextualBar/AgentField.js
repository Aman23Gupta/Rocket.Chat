function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/AgentField.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var UserCard;
module.link("../../../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 2);
var UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 3);
var UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 7);
var Field;
module.link("../../../components/Field", {
  "default": function (v) {
    Field = v;
  }
}, 8);
var Info;
module.link("../../../components/Info", {
  "default": function (v) {
    Info = v;
  }
}, 9);
var Label;
module.link("../../../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 10);
var FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 11);

var AgentField = function (_ref) {
  var agent = _ref.agent;
  var t = useTranslation();
  var username = agent.username;

  var _useEndpointData = useEndpointData("users.info?username=" + username),
      value = _useEndpointData.value,
      state = _useEndpointData.phase;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  var _ref2 = value || {
    user: {}
  },
      _ref2$user = _ref2.user,
      name = _ref2$user.name,
      status = _ref2$user.status;

  var displayName = name || username;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Agent')), /*#__PURE__*/React.createElement(Info, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x40",
    title: username,
    username: username
  }), /*#__PURE__*/React.createElement(UserCard.Username, {
    mis: "x10",
    name: displayName,
    status: /*#__PURE__*/React.createElement(UserStatus, {
      status: status
    })
  }), username && name && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mis: "x7",
    mb: "x9",
    align: "center",
    justifyContent: "center"
  }, "(", username, ")")));
};

module.exportDefault(AgentField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/0505f778d9a276c207086fc26c700c1180707f9b.map

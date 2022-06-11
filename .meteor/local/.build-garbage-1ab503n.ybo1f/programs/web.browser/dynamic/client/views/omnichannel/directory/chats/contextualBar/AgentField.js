function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/AgentField.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let UserCard;
module.link("../../../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 2);
let UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 3);
let UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 7);
let Field;
module.link("../../../components/Field", {
  default(v) {
    Field = v;
  }

}, 8);
let Info;
module.link("../../../components/Info", {
  default(v) {
    Info = v;
  }

}, 9);
let Label;
module.link("../../../components/Label", {
  default(v) {
    Label = v;
  }

}, 10);
let FormSkeleton;
module.link("../../Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 11);

const AgentField = _ref => {
  let {
    agent
  } = _ref;
  const t = useTranslation();
  const {
    username
  } = agent;
  const {
    value,
    phase: state
  } = useEndpointData("users.info?username=".concat(username));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  const {
    user: {
      name,
      status
    }
  } = value || {
    user: {}
  };
  const displayName = name || username;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/06af4aef671d7901bb8a977ddcfbbd3a7c6e3177.map

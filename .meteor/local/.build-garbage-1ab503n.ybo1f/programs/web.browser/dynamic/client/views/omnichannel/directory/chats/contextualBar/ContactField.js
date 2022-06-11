function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ContactField.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Avatar, Box;
module.link("@rocket.chat/fuselage", {
  Avatar(v) {
    Avatar = v;
  },

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
let roomTypes;
module.link("../../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 2);
let UserCard;
module.link("../../../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 3);
let UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
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

const ContactField = _ref => {
  let {
    contact,
    room
  } = _ref;
  const t = useTranslation();
  const {
    status
  } = contact;
  const {
    fname,
    t: type
  } = room;
  const avatarUrl = roomTypes.getConfig(type).getAvatarPath(room);
  const {
    value: data,
    phase: state,
    error
  } = useEndpointData("livechat/visitors.info?visitorId=".concat(contact._id));

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.visitor) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Contact_not_found'));
  }

  const {
    visitor: {
      username,
      name
    }
  } = data;
  const displayName = name || username;
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Label, null, t('Contact')), /*#__PURE__*/React.createElement(Info, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "x40",
    title: fname,
    url: avatarUrl
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

module.exportDefault(ContactField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/d6dfa654ee8f3733a3ee37d128d16f092e80f1e6.map

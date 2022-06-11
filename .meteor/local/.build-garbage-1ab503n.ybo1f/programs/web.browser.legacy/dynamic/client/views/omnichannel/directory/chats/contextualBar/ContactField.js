function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ContactField.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Avatar, Box;
module.link("@rocket.chat/fuselage", {
  Avatar: function (v) {
    Avatar = v;
  },
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
var roomTypes;
module.link("../../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 2);
var UserCard;
module.link("../../../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 3);
var UserStatus;
module.link("../../../../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var AsyncStatePhase;
module.link("../../../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
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

var ContactField = function (_ref) {
  var contact = _ref.contact,
      room = _ref.room;
  var t = useTranslation();
  var status = contact.status;
  var fname = room.fname,
      type = room.t;
  var avatarUrl = roomTypes.getConfig(type).getAvatarPath(room);

  var _useEndpointData = useEndpointData("livechat/visitors.info?visitorId=" + contact._id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error;

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(FormSkeleton, null);
  }

  if (error || !data || !data.visitor) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Contact_not_found'));
  }

  var _data$visitor = data.visitor,
      username = _data$visitor.username,
      name = _data$visitor.name;
  var displayName = name || username;
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/f4ad7c99be2ca3f2da42efdccc07df4b86471b43.map

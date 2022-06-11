function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomForeword.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Avatar, Margins, Flex, Box, Tag;
module.link("@rocket.chat/fuselage", {
  Avatar(v) {
    Avatar = v;
  },

  Margins(v) {
    Margins = v;
  },

  Flex(v) {
    Flex = v;
  },

  Box(v) {
    Box = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let Rooms, Users;
module.link("../../app/models/client", {
  Rooms(v) {
    Rooms = v;
  },

  Users(v) {
    Users = v;
  }

}, 2);
let getUserAvatarURL;
module.link("../../app/utils/client", {
  getUserAvatarURL(v) {
    getUserAvatarURL = v;
  }

}, 3);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useUser;
module.link("../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 5);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 6);

const RoomForeword = _ref => {
  let {
    _id: rid
  } = _ref;
  const t = useTranslation();
  const user = useUser();
  const room = useReactiveValue(useCallback(() => Rooms.findOne({
    _id: rid
  }), [rid]));

  if ((room === null || room === void 0 ? void 0 : room.t) !== 'd') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, t('Start_of_conversation'));
  }

  const usernames = room.usernames.filter(username => username !== user.username);

  if (usernames.length < 1) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Box, {
    is: "div",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 1
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Avatar.Stack, null, usernames.map((username, index) => {
    const user = Users.findOne({
      username
    }, {
      fields: {
        avatarETag: 1
      }
    });
    const avatarUrl = getUserAvatarURL(username, user === null || user === void 0 ? void 0 : user.avatarETag);
    return /*#__PURE__*/React.createElement(Avatar, {
      key: index,
      size: "x48",
      title: username,
      url: avatarUrl,
      "data-username": username
    });
  })))), /*#__PURE__*/React.createElement(Box, {
    color: "default",
    fontScale: "h2",
    flexGrow: 1
  }, t('Direct_message_you_have_joined')), /*#__PURE__*/React.createElement(Box, {
    is: "div",
    mb: "x8",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  }, usernames.map((username, index) => /*#__PURE__*/React.createElement(Margins, {
    inline: "x4",
    key: index
  }, /*#__PURE__*/React.createElement(Box, {
    is: "a",
    href: "/direct/".concat(username)
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "secondary",
    className: "mention-link",
    "data-username": username,
    medium: true
  }, username))))));
};

module.exportDefault(RoomForeword);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/9a0d890aad5a1e0782b162990c733623e58ba0b0.map

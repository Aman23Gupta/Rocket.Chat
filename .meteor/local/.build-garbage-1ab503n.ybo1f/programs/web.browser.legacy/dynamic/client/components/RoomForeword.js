function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RoomForeword.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Avatar, Margins, Flex, Box, Tag;
module.link("@rocket.chat/fuselage", {
  Avatar: function (v) {
    Avatar = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Box: function (v) {
    Box = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var Rooms, Users;
module.link("../../app/models/client", {
  Rooms: function (v) {
    Rooms = v;
  },
  Users: function (v) {
    Users = v;
  }
}, 2);
var getUserAvatarURL;
module.link("../../app/utils/client", {
  getUserAvatarURL: function (v) {
    getUserAvatarURL = v;
  }
}, 3);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useUser;
module.link("../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 5);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 6);

var RoomForeword = function (_ref) {
  var rid = _ref._id;
  var t = useTranslation();
  var user = useUser();
  var room = useReactiveValue(useCallback(function () {
    return Rooms.findOne({
      _id: rid
    });
  }, [rid]));

  if ((room === null || room === void 0 ? void 0 : room.t) !== 'd') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, t('Start_of_conversation'));
  }

  var usernames = room.usernames.filter(function (username) {
    return username !== user.username;
  });

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
  }, /*#__PURE__*/React.createElement(Avatar.Stack, null, usernames.map(function (username, index) {
    var user = Users.findOne({
      username: username
    }, {
      fields: {
        avatarETag: 1
      }
    });
    var avatarUrl = getUserAvatarURL(username, user === null || user === void 0 ? void 0 : user.avatarETag);
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
  }, usernames.map(function (username, index) {
    return /*#__PURE__*/React.createElement(Margins, {
      inline: "x4",
      key: index
    }, /*#__PURE__*/React.createElement(Box, {
      is: "a",
      href: "/direct/" + username
    }, /*#__PURE__*/React.createElement(Tag, {
      variant: "secondary",
      className: "mention-link",
      "data-username": username,
      medium: true
    }, username)));
  })));
};

module.exportDefault(RoomForeword);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/0d5c8ec99a184733f0a5d152ab8179267b3caa04.map

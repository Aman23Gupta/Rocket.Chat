function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/UserCard.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, ActionButton, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  ActionButton(v) {
    ActionButton = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
let MarkdownText;
module.link("../MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let Status;
module.link("../UserStatus", {
  "*"(v) {
    Status = v;
  }

}, 3);
let UserAvatar;
module.link("../avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let Info;
module.link("./Info", {
  default(v) {
    Info = v;
  }

}, 5);
let Roles;
module.link("./Roles", {
  default(v) {
    Roles = v;
  }

}, 6);
let UserCardContainer;
module.link("./UserCardContainer", {
  default(v) {
    UserCardContainer = v;
  }

}, 7);
let Username;
module.link("./Username", {
  default(v) {
    Username = v;
  }

}, 8);
const clampStyle = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-all'
};
const UserCard = /*#__PURE__*/forwardRef(function UserCard(_ref, ref) {
  let {
    className,
    style,
    open,
    name = /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }),
    username,
    etag,
    customStatus = /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }),
    roles = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    })),
    bio = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    })),
    status = /*#__PURE__*/React.createElement(Status.Offline, null),
    actions,
    localTime = /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }),
    onClose,
    nickname,
    t = e => e
  } = _ref;
  return /*#__PURE__*/React.createElement(UserCardContainer, {
    className: className,
    ref: ref,
    style: style
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(UserAvatar, {
    username: username,
    etag: etag,
    size: "x124"
  }), actions && /*#__PURE__*/React.createElement(Box, {
    flexGrow: 0,
    display: "flex",
    mb: "x8",
    align: "center",
    justifyContent: "center"
  }, actions)), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    mis: "x24",
    width: "1px"
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    display: "flex"
  }, /*#__PURE__*/React.createElement(Username, {
    status: status,
    name: name,
    title: username !== name ? username : undefined
  }), nickname && /*#__PURE__*/React.createElement(Box, {
    title: t('Nickname'),
    color: "hint",
    mis: "x8",
    fontScale: "p2",
    withTruncatedText: true
  }, "(", nickname, ")")), customStatus && /*#__PURE__*/React.createElement(Info, null, typeof customStatus === 'string' ? /*#__PURE__*/React.createElement(MarkdownText, {
    content: customStatus,
    parseEmoji: true
  }) : customStatus), /*#__PURE__*/React.createElement(Roles, null, roles), /*#__PURE__*/React.createElement(Info, null, localTime), bio && /*#__PURE__*/React.createElement(Info, {
    withTruncatedText: false,
    style: clampStyle,
    height: "x60"
  }, typeof bio === 'string' ? /*#__PURE__*/React.createElement(MarkdownText, {
    content: bio
  }) : bio), open && /*#__PURE__*/React.createElement("a", {
    onClick: open
  }, t('See_full_profile'))), onClose && /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(ActionButton, {
    ghost: true,
    icon: "cross",
    onClick: onClose
  })));
});
module.exportDefault(UserCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/8344ff3234b9bc0e53fd84fb966e9cd6d0a3c981.map

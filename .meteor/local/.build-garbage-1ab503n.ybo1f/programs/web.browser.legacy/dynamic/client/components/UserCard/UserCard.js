function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/UserCard.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, ActionButton, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ActionButton: function (v) {
    ActionButton = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var MarkdownText;
module.link("../MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var Status;
module.link("../UserStatus", {
  "*": function (v) {
    Status = v;
  }
}, 3);
var UserAvatar;
module.link("../avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var Info;
module.link("./Info", {
  "default": function (v) {
    Info = v;
  }
}, 5);
var Roles;
module.link("./Roles", {
  "default": function (v) {
    Roles = v;
  }
}, 6);
var UserCardContainer;
module.link("./UserCardContainer", {
  "default": function (v) {
    UserCardContainer = v;
  }
}, 7);
var Username;
module.link("./Username", {
  "default": function (v) {
    Username = v;
  }
}, 8);
var clampStyle = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  wordBreak: 'break-all'
};
var UserCard = /*#__PURE__*/forwardRef(function () {
  function UserCard(_ref, ref) {
    var className = _ref.className,
        style = _ref.style,
        open = _ref.open,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }) : _ref$name,
        username = _ref.username,
        etag = _ref.etag,
        _ref$customStatus = _ref.customStatus,
        customStatus = _ref$customStatus === void 0 ? /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }) : _ref$customStatus,
        _ref$roles = _ref.roles,
        roles = _ref$roles === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "32%",
      mi: "x2"
    })) : _ref$roles,
        _ref$bio = _ref.bio,
        bio = _ref$bio === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }), /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    })) : _ref$bio,
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? /*#__PURE__*/React.createElement(Status.Offline, null) : _ref$status,
        actions = _ref.actions,
        _ref$localTime = _ref.localTime,
        localTime = _ref$localTime === void 0 ? /*#__PURE__*/React.createElement(Skeleton, {
      width: "100%"
    }) : _ref$localTime,
        onClose = _ref.onClose,
        nickname = _ref.nickname,
        _ref$t = _ref.t,
        t = _ref$t === void 0 ? function (e) {
      return e;
    } : _ref$t;
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
  }

  return UserCard;
}());
module.exportDefault(UserCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/6da218e3b26f194beb572481727bd4a950e3c505.map

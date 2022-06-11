function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/components/Message.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "msg", "following", "username", "name", "ts", "replies", "participants", "handleFollowButton", "unread", "mention", "all", "t", "formatDate", "tlm", "className"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
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
var Metrics;
module.link("../../../../../components/Message/Metrics", {
  "default": function (v) {
    Metrics = v;
  }
}, 2);
var NotificationStatus;
module.link("../../../../../components/Message/NotificationStatus", {
  "*": function (v) {
    NotificationStatus = v;
  }
}, 3);
var followStyle, anchor;
module.link("../../../../../components/Message/helpers/followSyle", {
  followStyle: function (v) {
    followStyle = v;
  },
  anchor: function (v) {
    anchor = v;
  }
}, 4);
var RawText;
module.link("../../../../../components/RawText", {
  "default": function (v) {
    RawText = v;
  }
}, 5);
var UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 6);
var MessageTemplate;
module.link("../../../components/MessageTemplate", {
  "*": function (v) {
    MessageTemplate = v;
  }
}, 7);

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }

  return typeof obj[Symbol.iterator] === 'function';
}

module.exportDefault( /*#__PURE__*/memo(function () {
  function Message(_ref) {
    var _id = _ref._id,
        msg = _ref.msg,
        following = _ref.following,
        username = _ref.username,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? username : _ref$name,
        ts = _ref.ts,
        replies = _ref.replies,
        participants = _ref.participants,
        handleFollowButton = _ref.handleFollowButton,
        unread = _ref.unread,
        mention = _ref.mention,
        all = _ref.all,
        _ref$t = _ref.t,
        t = _ref$t === void 0 ? function (e) {
      return e;
    } : _ref$t,
        _ref$formatDate = _ref.formatDate,
        formatDate = _ref$formatDate === void 0 ? function (e) {
      return e;
    } : _ref$formatDate,
        tlm = _ref.tlm,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? [] : _ref$className,
        props = _objectWithoutProperties(_ref, _excluded);

    var button = !following ? 'bell-off' : 'bell';
    var actionLabel = t(!following ? 'Not_Following' : 'Following');
    return /*#__PURE__*/React.createElement(MessageTemplate.Message, _extends({}, props, {
      className: [].concat(_toConsumableArray(isIterable(className) ? className : [className]), [!following && followStyle]).filter(Boolean)
    }), /*#__PURE__*/React.createElement(MessageTemplate.Container, {
      mb: "neg-x2"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      username: username,
      className: "rcx-message__avatar",
      size: "x36"
    })), /*#__PURE__*/React.createElement(MessageTemplate.Container, {
      width: "1px",
      mb: "neg-x4",
      flexGrow: 1
    }, /*#__PURE__*/React.createElement(MessageTemplate.Header, null, /*#__PURE__*/React.createElement(MessageTemplate.Username, {
      title: username
    }, name), /*#__PURE__*/React.createElement(MessageTemplate.Timestamp, {
      ts: formatDate(ts)
    })), /*#__PURE__*/React.createElement(MessageTemplate.BodyClamp, null, /*#__PURE__*/React.createElement(RawText, null, msg)), /*#__PURE__*/React.createElement(Metrics, {
      color: "neutral-600",
      mi: "neg-x8"
    }, /*#__PURE__*/React.createElement(Metrics.Item, null, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
      name: "thread"
    }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, replies)), /*#__PURE__*/React.createElement(Metrics.Item, null, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
      name: "user"
    }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, participants)), /*#__PURE__*/React.createElement(Metrics.Item, null, /*#__PURE__*/React.createElement(Metrics.Item.Icon, {
      name: "clock"
    }), /*#__PURE__*/React.createElement(Metrics.Item.Label, null, formatDate(tlm))))), /*#__PURE__*/React.createElement(MessageTemplate.Container, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Button, {
      className: anchor,
      small: true,
      square: true,
      flexShrink: 0,
      ghost: true,
      "data-following": following,
      "data-id": _id,
      onClick: handleFollowButton,
      title: actionLabel,
      "aria-label": actionLabel
    }, /*#__PURE__*/React.createElement(Icon, {
      name: button,
      size: "x20"
    })), mention && /*#__PURE__*/React.createElement(NotificationStatus.Me, {
      t: t,
      mb: "x24"
    }) || all && /*#__PURE__*/React.createElement(NotificationStatus.All, {
      t: t,
      mb: "x24"
    }) || unread && /*#__PURE__*/React.createElement(NotificationStatus.Unread, {
      t: t,
      mb: "x24"
    })));
  }

  return Message;
}()));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/components/740867d93e858add324c626ef24abf9a6d24d57c.map

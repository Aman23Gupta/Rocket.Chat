function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Threads/components/Message.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "msg", "following", "username", "name", "ts", "replies", "participants", "handleFollowButton", "unread", "mention", "all", "t", "formatDate", "tlm", "className"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let Metrics;
module.link("../../../../../components/Message/Metrics", {
  default(v) {
    Metrics = v;
  }

}, 2);
let NotificationStatus;
module.link("../../../../../components/Message/NotificationStatus", {
  "*"(v) {
    NotificationStatus = v;
  }

}, 3);
let followStyle, anchor;
module.link("../../../../../components/Message/helpers/followSyle", {
  followStyle(v) {
    followStyle = v;
  },

  anchor(v) {
    anchor = v;
  }

}, 4);
let RawText;
module.link("../../../../../components/RawText", {
  default(v) {
    RawText = v;
  }

}, 5);
let UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 6);
let MessageTemplate;
module.link("../../../components/MessageTemplate", {
  "*"(v) {
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

module.exportDefault( /*#__PURE__*/memo(function Message(_ref) {
  let {
    _id,
    msg,
    following,
    username,
    name = username,
    ts,
    replies,
    participants,
    handleFollowButton,
    unread,
    mention,
    all,
    t = e => e,
    formatDate = e => e,
    tlm,
    className = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const button = !following ? 'bell-off' : 'bell';
  const actionLabel = t(!following ? 'Not_Following' : 'Following');
  return /*#__PURE__*/React.createElement(MessageTemplate.Message, _extends({}, props, {
    className: [...(isIterable(className) ? className : [className]), !following && followStyle].filter(Boolean)
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
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Threads/components/984a62579fa5e88edaab1bc968966ff51ab122f9.map

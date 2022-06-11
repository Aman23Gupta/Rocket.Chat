function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/components/Message.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id", "msg", "following", "username", "name", "ts", "dcount", "t", "participants", "handleFollowButton", "unread", "mention", "all", "formatDate", "dlm", "className"];

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
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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
let RawText;
module.link("../../../../../components/RawText", {
  default(v) {
    RawText = v;
  }

}, 2);
let UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 3);
let MessageTemplate;
module.link("../../../components/MessageTemplate", {
  "*"(v) {
    MessageTemplate = v;
  }

}, 4);
module.exportDefault( /*#__PURE__*/memo(function Message(_ref) {
  let {
    _id,
    msg,
    following,
    username,
    name = username,
    ts,
    dcount,
    t = text => text,
    participants,
    handleFollowButton,
    unread,
    mention,
    all,
    formatDate = e => e,
    dlm,
    className = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(MessageTemplate.Message, _extends({}, props, {
    className: className
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
  })), /*#__PURE__*/React.createElement(MessageTemplate.BodyClamp, null, /*#__PURE__*/React.createElement(RawText, null, msg)), /*#__PURE__*/React.createElement(Box, {
    mi: "neg-x2",
    flexDirection: "row",
    display: "flex",
    alignItems: "baseline",
    mbs: "x8"
  }, !dcount && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    is: "span",
    fontSize: "x12",
    color: "neutral-700",
    fontWeight: "600"
  }, t('No_messages_yet')), !!dcount && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    is: "span",
    fontSize: "x12",
    color: "neutral-700",
    fontWeight: "600"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "discussion",
    size: "x20",
    mi: "x2"
  }), dcount), !!dcount && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    is: "span",
    fontSize: "x12",
    color: "neutral-700",
    fontWeight: "600",
    withTruncatedText: true,
    flexShrink: 1,
    mi: "x2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: "x20",
    mi: "x2"
  }), " ", formatDate(dlm), ' '))));
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/components/ba0871c5af1016f39e645282292735e4ff8d52de.map

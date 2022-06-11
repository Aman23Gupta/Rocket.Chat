function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Discussions/components/Message.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id", "msg", "following", "username", "name", "ts", "dcount", "t", "participants", "handleFollowButton", "unread", "mention", "all", "formatDate", "dlm", "className"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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
var RawText;
module.link("../../../../../components/RawText", {
  "default": function (v) {
    RawText = v;
  }
}, 2);
var UserAvatar;
module.link("../../../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 3);
var MessageTemplate;
module.link("../../../components/MessageTemplate", {
  "*": function (v) {
    MessageTemplate = v;
  }
}, 4);
module.exportDefault( /*#__PURE__*/memo(function () {
  function Message(_ref) {
    var _id = _ref._id,
        msg = _ref.msg,
        following = _ref.following,
        username = _ref.username,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? username : _ref$name,
        ts = _ref.ts,
        dcount = _ref.dcount,
        _ref$t = _ref.t,
        t = _ref$t === void 0 ? function (text) {
      return text;
    } : _ref$t,
        participants = _ref.participants,
        handleFollowButton = _ref.handleFollowButton,
        unread = _ref.unread,
        mention = _ref.mention,
        all = _ref.all,
        _ref$formatDate = _ref.formatDate,
        formatDate = _ref$formatDate === void 0 ? function (e) {
      return e;
    } : _ref$formatDate,
        dlm = _ref.dlm,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? [] : _ref$className,
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
  }

  return Message;
}()));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Discussions/components/671c5a9a03c2af1af90dfa6bdd4d0980fdfcbe55.map

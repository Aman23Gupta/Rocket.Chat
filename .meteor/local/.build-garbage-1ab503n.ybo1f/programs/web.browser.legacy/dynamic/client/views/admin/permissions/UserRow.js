function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UserRow.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Table, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 3);
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);

var UserRow = function (_ref) {
  var _id = _ref._id,
      username = _ref.username,
      name = _ref.name,
      avatarETag = _ref.avatarETag,
      emails = _ref.emails,
      onRemove = _ref.onRemove;
  var email = getUserEmailAddress({
    emails: emails
  });
  var handleRemove = useMutableCallback(function () {
    onRemove(username);
  });
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: _id,
    tabIndex: 0,
    role: "link"
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x40",
    title: username,
    username: username,
    etag: avatarETag
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    withTruncatedText: true,
    mi: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    withTruncatedText: true,
    color: "default"
  }, name || username), name && /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, ' ', "@" + username, ' '))))), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, email), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    square: true,
    danger: true,
    onClick: handleRemove
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x20"
  }))));
};

module.exportDefault( /*#__PURE__*/memo(UserRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/40a6ec1136e6a73f88651c06954aed52c3764820.map

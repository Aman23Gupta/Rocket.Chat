function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UserRow.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Table, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 3);
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);

const UserRow = _ref => {
  let {
    _id,
    username,
    name,
    avatarETag,
    emails,
    onRemove
  } = _ref;
  const email = getUserEmailAddress({
    emails
  });
  const handleRemove = useMutableCallback(() => {
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
  }, ' ', "@".concat(username), ' '))))), /*#__PURE__*/React.createElement(Table.Cell, {
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/f51fdaf6595129cede8c8bc189c6124d720b83a8.map

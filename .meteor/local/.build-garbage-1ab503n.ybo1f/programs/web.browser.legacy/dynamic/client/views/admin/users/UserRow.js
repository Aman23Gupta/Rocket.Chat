function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserRow.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Table;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize: function (v) {
    capitalize = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

var UserRow = function (_ref) {
  var emails = _ref.emails,
      _id = _ref._id,
      username = _ref.username,
      name = _ref.name,
      roles = _ref.roles,
      status = _ref.status,
      avatarETag = _ref.avatarETag,
      onClick = _ref.onClick,
      mediaQuery = _ref.mediaQuery,
      active = _ref.active;
  var t = useTranslation();
  var statusText = active ? t(capitalize(status)) : t('Disabled');
  return /*#__PURE__*/React.createElement(Table.Row, {
    onKeyDown: onClick(_id),
    onClick: onClick(_id),
    tabIndex: 0,
    role: "link",
    action: true,
    "qa-user-id": _id
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: mediaQuery ? 'x28' : 'x40',
    title: username,
    username: username,
    etag: avatarETag
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    style: style,
    mi: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    style: style
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    style: style,
    color: "default"
  }, name || username), !mediaQuery && name && /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "hint",
    style: style
  }, ' ', "@" + username, ' '))))), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    style: style,
    color: "hint"
  }, username), ' ', /*#__PURE__*/React.createElement(Box, {
    mi: "x4"
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, emails && emails.length && emails[0].address), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, {
    style: style
  }, roles && roles.join(', ')), /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    style: style
  }, statusText));
};

module.exportDefault(UserRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/fbf240b04e2764704e2637a754a525886d1b0bfe.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserRow.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Table;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize(v) {
    capitalize = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
const style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

const UserRow = _ref => {
  let {
    emails,
    _id,
    username,
    name,
    roles,
    status,
    avatarETag,
    onClick,
    mediaQuery,
    active
  } = _ref;
  const t = useTranslation();
  const statusText = active ? t(capitalize(status)) : t('Disabled');
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
  }, ' ', "@".concat(username), ' '))))), mediaQuery && /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
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
//# sourceMappingURL=/dynamic/client/views/admin/users/1229f31970f8114826162551c4f6fb5aa037fc87.map

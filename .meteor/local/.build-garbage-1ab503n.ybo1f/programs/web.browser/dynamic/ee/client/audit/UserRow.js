function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/UserRow.js                                                                                          //
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
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let UserAvatar;
module.link("../../../client/components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 2);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let FilterDisplay;
module.link("./FilterDisplay", {
  default(v) {
    FilterDisplay = v;
  }

}, 4);

const UserRow = _ref => {
  let {
    u,
    results,
    ts,
    _id,
    formatDateAndTime,
    formatDate,
    fields,
    mediaQuery
  } = _ref;
  const t = useTranslation();
  const {
    username,
    name,
    avatarETag
  } = u;
  const {
    msg,
    users,
    room,
    startDate,
    endDate
  } = fields;
  const when = useMemo(() => formatDateAndTime(ts), [formatDateAndTime, ts]);
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
    size: mediaQuery ? 'x28' : 'x40',
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
  }, ' ', "@".concat(username), ' '))))), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    withTruncatedText: true,
    color: "hint"
  }, msg), ' ', /*#__PURE__*/React.createElement(Box, {
    mi: "x4"
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, when), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, results), /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(FilterDisplay, {
    t: t,
    users: users,
    room: room,
    startDate: formatDate(startDate),
    endDate: formatDate(endDate)
  })));
};

module.exportDefault( /*#__PURE__*/memo(UserRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/80e607cb2e96993bb3718e05a0884bd838c0c826.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/UserRow.js                                                                                          //
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
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var UserAvatar;
module.link("../../../client/components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 2);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var FilterDisplay;
module.link("./FilterDisplay", {
  "default": function (v) {
    FilterDisplay = v;
  }
}, 4);

var UserRow = function (_ref) {
  var u = _ref.u,
      results = _ref.results,
      ts = _ref.ts,
      _id = _ref._id,
      formatDateAndTime = _ref.formatDateAndTime,
      formatDate = _ref.formatDate,
      fields = _ref.fields,
      mediaQuery = _ref.mediaQuery;
  var t = useTranslation();
  var username = u.username,
      name = u.name,
      avatarETag = u.avatarETag;
  var msg = fields.msg,
      users = fields.users,
      room = fields.room,
      startDate = fields.startDate,
      endDate = fields.endDate;
  var when = useMemo(function () {
    return formatDateAndTime(ts);
  }, [formatDateAndTime, ts]);
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
  }, ' ', "@" + username, ' '))))), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Box, {
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
//# sourceMappingURL=/dynamic/ee/client/audit/e7c94aaee53d7231a535fddf4ad7bc92f59c2127.map

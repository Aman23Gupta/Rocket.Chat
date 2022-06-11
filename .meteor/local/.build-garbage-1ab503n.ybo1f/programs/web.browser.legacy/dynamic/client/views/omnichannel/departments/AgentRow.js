function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/AgentRow.js                                                                    //
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
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 2);
var Count;
module.link("./Count", {
  "default": function (v) {
    Count = v;
  }
}, 3);
var Order;
module.link("./Order", {
  "default": function (v) {
    Order = v;
  }
}, 4);
var RemoveAgentButton;
module.link("./RemoveAgentButton", {
  "default": function (v) {
    RemoveAgentButton = v;
  }
}, 5);

var AgentRow = function (_ref) {
  var agentId = _ref.agentId,
      username = _ref.username,
      name = _ref.name,
      avatarETag = _ref.avatarETag,
      mediaQuery = _ref.mediaQuery,
      agentList = _ref.agentList,
      setAgentList = _ref.setAgentList,
      setAgentsRemoved = _ref.setAgentsRemoved;
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: agentId,
    tabIndex: 0,
    role: "link",
    action: true,
    "qa-user-id": agentId
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
  }, name || username), !mediaQuery && name && /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, ' ', "@" + username, ' '))))), /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Count, {
    agentId: agentId,
    agentList: agentList,
    setAgentList: setAgentList
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Order, {
    agentId: agentId,
    agentList: agentList,
    setAgentList: setAgentList
  })), /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint"
  }, /*#__PURE__*/React.createElement(RemoveAgentButton, {
    agentId: agentId,
    agentList: agentList,
    setAgentList: setAgentList,
    setAgentsRemoved: setAgentsRemoved
  })));
};

module.exportDefault( /*#__PURE__*/memo(AgentRow));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/744b1831d198e65db0b5469008542e057c1919b0.map

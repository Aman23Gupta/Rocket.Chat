function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/AgentRow.js                                                                    //
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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 2);
let Count;
module.link("./Count", {
  default(v) {
    Count = v;
  }

}, 3);
let Order;
module.link("./Order", {
  default(v) {
    Order = v;
  }

}, 4);
let RemoveAgentButton;
module.link("./RemoveAgentButton", {
  default(v) {
    RemoveAgentButton = v;
  }

}, 5);

const AgentRow = _ref => {
  let {
    agentId,
    username,
    name,
    avatarETag,
    mediaQuery,
    agentList,
    setAgentList,
    setAgentsRemoved
  } = _ref;
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
  }, ' ', "@".concat(username), ' '))))), /*#__PURE__*/React.createElement(Table.Cell, {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/1dc3c4122171cdc4604e58e6b97ae12ef1994d2e.map

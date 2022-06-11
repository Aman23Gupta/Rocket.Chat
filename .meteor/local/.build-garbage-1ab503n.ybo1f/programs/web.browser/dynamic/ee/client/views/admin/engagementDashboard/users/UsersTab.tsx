function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/UsersTab.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Divider, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  },

  Flex(v) {
    Flex = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints(v) {
    useBreakpoints = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let ActiveUsersSection;
module.link("./ActiveUsersSection", {
  default(v) {
    ActiveUsersSection = v;
  }

}, 3);
let BusiestChatTimesSection;
module.link("./BusiestChatTimesSection", {
  default(v) {
    BusiestChatTimesSection = v;
  }

}, 4);
let NewUsersSection;
module.link("./NewUsersSection", {
  default(v) {
    NewUsersSection = v;
  }

}, 5);
let UsersByTimeOfTheDaySection;
module.link("./UsersByTimeOfTheDaySection", {
  default(v) {
    UsersByTimeOfTheDaySection = v;
  }

}, 6);

const UsersTab = _ref => {
  let {
    timezone
  } = _ref;
  const isXxlScreen = useBreakpoints().includes('xxl');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NewUsersSection, {
    timezone: timezone
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ActiveUsersSection, {
    timezone: timezone
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mi: "x12",
    flexWrap: "wrap"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x12"
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    grow: 1,
    shrink: 0,
    basis: isXxlScreen ? '0' : '100%'
  }, /*#__PURE__*/React.createElement(UsersByTimeOfTheDaySection, {
    timezone: timezone
  })), /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: isXxlScreen ? '0' : '100%'
  }, /*#__PURE__*/React.createElement(BusiestChatTimesSection, {
    timezone: timezone
  })))));
};

module.exportDefault(UsersTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/f2a15e1e9c39ef93377076e192d0d91ba8beb3a8.map

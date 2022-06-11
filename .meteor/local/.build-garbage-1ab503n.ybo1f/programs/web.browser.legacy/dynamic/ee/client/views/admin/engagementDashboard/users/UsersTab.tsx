function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/UsersTab.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Divider, Flex, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints: function (v) {
    useBreakpoints = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var ActiveUsersSection;
module.link("./ActiveUsersSection", {
  "default": function (v) {
    ActiveUsersSection = v;
  }
}, 3);
var BusiestChatTimesSection;
module.link("./BusiestChatTimesSection", {
  "default": function (v) {
    BusiestChatTimesSection = v;
  }
}, 4);
var NewUsersSection;
module.link("./NewUsersSection", {
  "default": function (v) {
    NewUsersSection = v;
  }
}, 5);
var UsersByTimeOfTheDaySection;
module.link("./UsersByTimeOfTheDaySection", {
  "default": function (v) {
    UsersByTimeOfTheDaySection = v;
  }
}, 6);

var UsersTab = function (_ref) {
  var timezone = _ref.timezone;
  var isXxlScreen = useBreakpoints().includes('xxl');
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/55158fd785bac67151379034f97d588e62a0b2c1.map

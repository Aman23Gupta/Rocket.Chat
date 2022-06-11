function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesTab.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Divider;
module.link("@rocket.chat/fuselage", {
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var MessagesPerChannelSection;
module.link("./MessagesPerChannelSection", {
  "default": function (v) {
    MessagesPerChannelSection = v;
  }
}, 2);
var MessagesSentSection;
module.link("./MessagesSentSection", {
  "default": function (v) {
    MessagesSentSection = v;
  }
}, 3);

var MessagesTab = function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MessagesSentSection, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MessagesPerChannelSection, null));
};

module.exportDefault(MessagesTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/1abd8fe5a58956f7add3bba28b5c69fdd79e610b.map

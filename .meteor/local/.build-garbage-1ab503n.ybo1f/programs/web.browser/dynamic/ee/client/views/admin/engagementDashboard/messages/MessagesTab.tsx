function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesTab.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Divider;
module.link("@rocket.chat/fuselage", {
  Divider(v) {
    Divider = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let MessagesPerChannelSection;
module.link("./MessagesPerChannelSection", {
  default(v) {
    MessagesPerChannelSection = v;
  }

}, 2);
let MessagesSentSection;
module.link("./MessagesSentSection", {
  default(v) {
    MessagesSentSection = v;
  }

}, 3);

const MessagesTab = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MessagesSentSection, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(MessagesPerChannelSection, null));

module.exportDefault(MessagesTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/670388f62dc5c55a12f9eec6a996db76740d2940.map

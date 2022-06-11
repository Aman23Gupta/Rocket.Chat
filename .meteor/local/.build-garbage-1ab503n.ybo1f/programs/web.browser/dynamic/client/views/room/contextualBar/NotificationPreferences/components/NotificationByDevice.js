function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/NotificationByDevice.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  NotificationByDevice: () => NotificationByDevice
});
let Box, Accordion, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  },

  Icon(v) {
    Icon = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
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

const NotificationByDevice = _ref => {
  let {
    device,
    icon,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Accordion.Item, {
    title: /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: "x18"
    }), /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m",
      mi: "x16"
    }, device))
  }, /*#__PURE__*/React.createElement(FieldGroup, null, children));
};

module.exportDefault( /*#__PURE__*/memo(NotificationByDevice));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/a166d82babc04a8863c6fd9271b2143b00e6d5be.map

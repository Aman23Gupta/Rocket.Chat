function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/NotificationByDevice.js                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  NotificationByDevice: function () {
    return NotificationByDevice;
  }
});
var Box, Accordion, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
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

var NotificationByDevice = function (_ref) {
  var device = _ref.device,
      icon = _ref.icon,
      children = _ref.children;
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/1d70bb6c00eec449720a994ca8072f843907065e.map

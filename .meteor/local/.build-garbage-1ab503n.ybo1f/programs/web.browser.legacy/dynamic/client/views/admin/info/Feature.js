function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/Feature.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Feature = function (_ref) {
  var label = _ref.label,
      enabled = _ref.enabled;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Box, {
    color: enabled ? 'success' : 'danger'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: enabled ? 'check' : 'cross',
    size: "x16"
  })), label);
};

module.exportDefault(Feature);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/f56484a166c73cc5bcbbbc12eec7fa4faf9c8ad7.map

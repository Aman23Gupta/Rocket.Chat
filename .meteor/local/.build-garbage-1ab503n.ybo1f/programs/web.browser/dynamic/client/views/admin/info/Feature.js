function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/Feature.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Feature = _ref => {
  let {
    label,
    enabled
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/views/admin/info/6f4df0512542c2277338e4ea9b93325a2a740264.map

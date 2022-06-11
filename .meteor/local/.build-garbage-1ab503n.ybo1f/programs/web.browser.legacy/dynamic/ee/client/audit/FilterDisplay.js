function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/FilterDisplay.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var FilterDisplay = function (_ref) {
  var users = _ref.users,
      room = _ref.room,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      t = _ref.t;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true
  }, users ? "@" + users[0] + " : @" + users[1] : "#" + room), /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true
  }, startDate, " ", t('to'), " ", endDate));
};

module.exportDefault(FilterDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/bfd7051f6ae11238e189d36c78f6689b1219855f.map

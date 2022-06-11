function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/FilterDisplay.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const FilterDisplay = _ref => {
  let {
    users,
    room,
    startDate,
    endDate,
    t
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true
  }, users ? "@".concat(users[0], " : @").concat(users[1]) : "#".concat(room)), /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true
  }, startDate, " ", t('to'), " ", endDate));
};

module.exportDefault(FilterDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/6156fa8b3575d33c46aaf60417904a0d8342c976.map

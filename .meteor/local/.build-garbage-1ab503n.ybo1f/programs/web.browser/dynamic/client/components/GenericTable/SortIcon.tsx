function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/SortIcon.tsx                                                                         //
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

const SortIcon = _ref => {
  let {
    direction
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    is: "svg",
    width: "x16",
    height: "x16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.33337 5.99999L8.00004 3.33333L10.6667 5.99999",
    stroke: direction === 'desc' ? '#9EA2A8' : '#E4E7EA',
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.33337 10L8.00004 12.6667L10.6667 10",
    stroke: direction === 'asc' ? '#9EA2A8' : '#E4E7EA',
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

module.exportDefault(SortIcon);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/32a5f213c18cdc0e5530bd7c7825ac80bf57de3f.map

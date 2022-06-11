function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/InfoPanel.tsx                                                                                //
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

const InfoPanel = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    flexGrow: 1,
    mb: "neg-x24"
  }, children);
};

module.exportDefault(InfoPanel);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/90144495327074ee22acacb5a20dad856becac6a.map

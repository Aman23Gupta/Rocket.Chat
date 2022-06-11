function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Card/ColTitle.tsx                                                                                 //
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

const ColTitle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    fontScale: "c2",
    m: "none"
  }, children);
};

module.exportDefault(ColTitle);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Card/b98cf5c8222fc21dfca381dec5a9091532da599b.map

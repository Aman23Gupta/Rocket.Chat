function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Details.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
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

const Details = _ref => {
  let props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-attachment__details": true,
    fontScale: "p2",
    color: "info",
    bg: "neutral-100",
    pi: "x16",
    pb: "x16"
  }, props));
};

module.exportDefault(Details);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/91f55528b8cf9c4d1d3aff3e9866475860cfe7d5.map

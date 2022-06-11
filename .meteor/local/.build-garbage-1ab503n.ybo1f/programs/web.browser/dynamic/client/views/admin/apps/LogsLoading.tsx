function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogsLoading.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const LogsLoading = () => /*#__PURE__*/React.createElement(Box, {
  maxWidth: "x600",
  w: "full",
  alignSelf: "center"
}, /*#__PURE__*/React.createElement(Margins, {
  block: "x2"
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  width: "100%",
  height: "x80"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  width: "100%",
  height: "x80"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  width: "100%",
  height: "x80"
})));

module.exportDefault(LogsLoading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/338bb5cb6a70b911eccfca324afcace8c9c2ffbd.map

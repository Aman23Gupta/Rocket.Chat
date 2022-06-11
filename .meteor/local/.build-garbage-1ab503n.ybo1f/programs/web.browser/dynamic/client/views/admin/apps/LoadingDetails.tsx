function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LoadingDetails.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const LoadingDetails = () => /*#__PURE__*/React.createElement(Box, {
  display: "flex",
  flexDirection: "row",
  mbe: "x20",
  w: "full"
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  w: "x120",
  h: "x120",
  mie: "x20"
}), /*#__PURE__*/React.createElement(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1
}, /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  w: "full",
  h: "x32"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  w: "full",
  h: "x32"
}), /*#__PURE__*/React.createElement(Skeleton, {
  variant: "rect",
  w: "full",
  h: "x32"
})));

module.exportDefault(LoadingDetails);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/15dca78e9b19d4a7521f2eab88535dfd3ee24888.map

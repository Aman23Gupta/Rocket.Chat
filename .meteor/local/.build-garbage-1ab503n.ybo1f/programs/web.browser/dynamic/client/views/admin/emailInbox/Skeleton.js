function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/Skeleton.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  FormSkeleton: () => FormSkeleton
});
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

const FormSkeleton = props => /*#__PURE__*/React.createElement(Box, _extends({
  w: "full",
  pb: "x24"
}, props), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x8"
}), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x4"
}), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x4"
}), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x8"
}), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x4"
}), /*#__PURE__*/React.createElement(Skeleton, {
  mbe: "x8"
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/8110369f33300b470f8ecf677ee433a61a5ca775.map

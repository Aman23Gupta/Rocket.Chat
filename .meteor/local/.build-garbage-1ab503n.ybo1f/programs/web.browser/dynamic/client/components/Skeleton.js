function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Skeleton.js                                                                                       //
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
//# sourceMappingURL=/dynamic/client/components/b65c1a614f022c1af7749d0e3bdbd7ba67a1f7f3.map

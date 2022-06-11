function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarSkeleton.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let VerticalBar;
module.link("./VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let VerticalBarHeader;
module.link("./VerticalBarHeader", {
  default(v) {
    VerticalBarHeader = v;
  }

}, 3);

const VerticalBarSkeleton = props => /*#__PURE__*/React.createElement(VerticalBar, _extends({}, props, {
  width: "100%"
}), /*#__PURE__*/React.createElement(VerticalBarHeader, null, /*#__PURE__*/React.createElement(Skeleton, {
  width: "100%"
})), /*#__PURE__*/React.createElement(Box, {
  p: "x24"
}, /*#__PURE__*/React.createElement(Skeleton, {
  width: "32px",
  height: "32px",
  variant: "rect"
}), " ", /*#__PURE__*/React.createElement(Skeleton, null), Array(5).fill(5).map((_, index) => /*#__PURE__*/React.createElement(Skeleton, {
  key: index
}))));

module.exportDefault( /*#__PURE__*/memo(VerticalBarSkeleton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/07dc5eae486c7a7546b152dc76459a042ff3ad40.map

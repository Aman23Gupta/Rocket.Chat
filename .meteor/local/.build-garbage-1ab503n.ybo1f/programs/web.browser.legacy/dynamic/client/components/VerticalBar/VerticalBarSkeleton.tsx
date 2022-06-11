function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarSkeleton.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var VerticalBar;
module.link("./VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var VerticalBarHeader;
module.link("./VerticalBarHeader", {
  "default": function (v) {
    VerticalBarHeader = v;
  }
}, 3);

var VerticalBarSkeleton = function (props) {
  return /*#__PURE__*/React.createElement(VerticalBar, _extends({}, props, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(VerticalBarHeader, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  })), /*#__PURE__*/React.createElement(Box, {
    p: "x24"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "32px",
    height: "32px",
    variant: "rect"
  }), " ", /*#__PURE__*/React.createElement(Skeleton, null), Array(5).fill(5).map(function (_, index) {
    return /*#__PURE__*/React.createElement(Skeleton, {
      key: index
    });
  })));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarSkeleton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/e870e97b0195037e310bdad36febc076a3e1973e.map

function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/Skeleton.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
module.export({
  FormSkeleton: function () {
    return FormSkeleton;
  }
});
var Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var FormSkeleton = function (props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
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
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/f29bdfeef9a34cb777aaf9ea2f594ec4844f1b31.map

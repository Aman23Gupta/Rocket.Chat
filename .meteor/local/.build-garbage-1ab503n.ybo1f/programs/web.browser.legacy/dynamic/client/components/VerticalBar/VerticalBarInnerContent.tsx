function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarInnerContent.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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

var VerticalBarInnerContent = function (props) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-vertical-bar--inner-content": true,
    position: "absolute",
    height: "full",
    display: "flex",
    insetInline: 0
  }, props));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarInnerContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/4b7c6e4deb266eb55a0ced00e54fff37a60cb3cc.map

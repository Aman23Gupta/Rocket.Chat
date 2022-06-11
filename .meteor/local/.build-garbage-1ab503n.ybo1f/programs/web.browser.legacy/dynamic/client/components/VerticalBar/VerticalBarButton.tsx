function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarButton.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Button;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
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

var VerticalBarButton = function (props) {
  return /*#__PURE__*/React.createElement(Button, _extends({
    small: true,
    square: true,
    flexShrink: 0,
    ghost: true
  }, props));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/dab3772a5db780f9032187f4ded437ff90694013.map

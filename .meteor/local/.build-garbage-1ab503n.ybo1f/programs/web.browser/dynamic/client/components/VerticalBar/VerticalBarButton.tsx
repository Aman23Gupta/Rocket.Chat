function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarButton.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
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

const VerticalBarButton = props => /*#__PURE__*/React.createElement(Button, _extends({
  small: true,
  square: true,
  flexShrink: 0,
  ghost: true
}, props));

module.exportDefault( /*#__PURE__*/memo(VerticalBarButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/529977316fc6d9fb94d5665b13f078c651fead30.map

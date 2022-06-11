function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarActionBack.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
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

}, 0);
let VerticalBarAction;
module.link("./VerticalBarAction", {
  default(v) {
    VerticalBarAction = v;
  }

}, 1);

const VerticalBarActionBack = props => /*#__PURE__*/React.createElement(VerticalBarAction, _extends({}, props, {
  name: "arrow-back"
}));

module.exportDefault( /*#__PURE__*/memo(VerticalBarActionBack));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/9990bbde60a0ca4f7f6849e336850ae705c6acfa.map

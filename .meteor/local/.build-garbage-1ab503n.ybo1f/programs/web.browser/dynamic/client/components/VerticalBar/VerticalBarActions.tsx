function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarActions.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
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

const VerticalBarActions = props => /*#__PURE__*/React.createElement(ButtonGroup, _extends({
  medium: true
}, props));

module.exportDefault( /*#__PURE__*/memo(VerticalBarActions));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/71a3ebb03a799d3285ac874d82c1479796b0f332.map

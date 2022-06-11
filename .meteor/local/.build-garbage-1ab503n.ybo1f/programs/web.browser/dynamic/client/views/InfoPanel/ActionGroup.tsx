function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/ActionGroup.tsx                                                                              //
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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Section;
module.link("./Section", {
  default(v) {
    Section = v;
  }

}, 2);

const ActionGroup = props => /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(ButtonGroup, _extends({
  flexShrink: 0,
  flexWrap: "nowrap",
  withTruncatedText: true,
  justifyContent: "center"
}, props)));

module.exportDefault(ActionGroup);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/0203531923ee014d948539533e0b380c0a1da523.map

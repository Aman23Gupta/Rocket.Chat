function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Action.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Action = props => /*#__PURE__*/React.createElement(ActionButton, _extends({
  mi: "x2",
  mini: true,
  ghost: true
}, props));

module.exportDefault(Action);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/c3fb33aeee3a68180192000ea1435badf4864828.map
